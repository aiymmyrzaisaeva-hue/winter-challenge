# Winter Challenge measurement handoff

Issue 11 · verified against public docs on 2026-11-15

## What Lava can confirm

- Lava documents `payment.success` and authenticated `GET /api/v1/invoices/{id}` as sources of truth. The creator's **Продажи** screen also exposes paid sales, a source filter, and a transaction report. The filter's existence does not establish which source or UTM fields survive the current hosted checkout. [Lava developer docs](https://developers.lava.top/en) · [Creator sales and reports](https://faq.lava.top/article/79240)
- Lava's January 2025 changelog mentions UTMs. Its linked TypeScript SDK documents optional `clientUtm` for API-created one-time payments, with `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content`. Public evidence reviewed does not establish that arbitrary parameters on the existing `app.lava.top/products/…` link are recorded on paid invoices, nor that these fields appear in a hosted sale export or webhook. Confirm the actual paid record for the exact link before relying on it. [Lava developer docs and SDK links](https://developers.lava.top/en) · [Linked TypeScript SDK example](https://github.com/azamatjamaliev/lava_public_api_sdk_node#usage)
- The optional API invoice return URLs append `invoiceId` and a browser-visible `status`. They apply to API-created invoices only. Use the server-side payment record to confirm the outcome. [Lava return and webhook docs](https://developers.lava.top/en)

## Instagram links

Append the following to the canonical HTTPS landing URL from the landing owner. Reuse the campaign across placements. Keep the link in a Reel's accompanying DM tagged `dm`; use `reel` only for a tappable link or redirect used specifically from a Reel. Keep source tags off internal guide links.

| Placement | Query |
| --- | --- |
| Profile bio | `?utm_source=instagram&utm_medium=organic_social&utm_campaign=winter_challenge_2027&utm_content=bio` |
| Story link sticker | `?utm_source=instagram&utm_medium=organic_social&utm_campaign=winter_challenge_2027&utm_content=story` |
| Direct message | `?utm_source=instagram&utm_medium=organic_social&utm_campaign=winter_challenge_2027&utm_content=dm` |
| Tappable Reel path | `?utm_source=instagram&utm_medium=organic_social&utm_campaign=winter_challenge_2027&utm_content=reel` |

Use `&` if the landing URL already has a query and put tags before any `#`. In HTML attributes write `&amp;`. Keep tags lowercase and use placement labels only. Tagged traffic can include forwarded links. Visits with missing source, medium, or campaign are outside the measured cohort even if the referrer is Instagram.

## Landing integration

The landing page loads the tracking module after the existing Vercel queue and deferred Insights script.

```html
<script defer src="/funnel-analytics.js"></script>
```

The landing page uses the selectors below. All four purchase links use the verified public Lava listing, and the two videos begin on user playback. Update all four links together if the checkout destination changes.

```html
<a data-funnel-guide="hero" href="#examples">Читать бесплатный гайд</a>
<a data-funnel-cta="hero" href="https://app.lava.top/products/31432966-4fab-412d-838e-9c4374c4f083">Купить участие</a>
<video data-funnel-example="unboxing" controls playsinline src="/DfkWAbzs3Sb.mp4"></video>
<a data-funnel-original="unboxing" href="https://www.instagram.com/p/DfkWAbzs3Sb/">Смотреть Reels</a>
<a data-funnel-cta="after_unboxing" href="https://app.lava.top/products/31432966-4fab-412d-838e-9c4374c4f083">Купить участие</a>
<video data-funnel-example="advent" controls playsinline src="/Dfih4gWP7BD.mp4"></video>
<a data-funnel-original="advent" href="https://www.instagram.com/p/Dfih4gWP7BD/">Смотреть Reels</a>
<a data-funnel-cta="after_advent" href="https://app.lava.top/products/31432966-4fab-412d-838e-9c4374c4f083">Купить участие</a>
<a data-funnel-cta="final" href="https://app.lava.top/products/31432966-4fab-412d-838e-9c4374c4f083">Купить участие</a>
```

The script sends up to two properties per event. `entry` is always present and takes the placement above, `instagram_other` for matching campaign tags with missing or unexpected content, or `other` for other traffic. It does not store a visitor ID, forward UTMs to Lava, alter URLs, or delay navigation. Vercel custom events require Pro or Enterprise, and Vercel's native UTM panel requires Web Analytics Plus or Enterprise. The custom event captures normalized placement as a property. [Vercel plans and limits](https://vercel.com/docs/analytics/limits-and-pricing) · [Vercel's client event interface](https://github.com/vercel/analytics/blob/main/packages/web/src/generic.ts)

| Event | Additional property | When it fires |
| --- | --- | --- |
| `instagram_landing` | — | Once per execution on a tagged landing page load, including reloads. Use the event's Visitors metric for audience size. |
| `guide_open` | `position=hero` | Activation of the guide shortcut. |
| `checkout_click` | `position=hero\|after_unboxing\|after_advent\|final` | Activation of a marked Lava link. Repeated clicks count as actions. Hosted checkout start is unobserved unless Lava provides a verified start signal. |
| `example_video_start` | `example=unboxing\|advent` | First actual playback of each marked video element per page load. |
| `example_original_click` | `example=unboxing\|advent` | Activation of an original Reel link. |

## Order reconciliation and rate

1. For the exact hosted path selected by Checkout, use a supported test mode if available or an existing authorized tagged order with known entry evidence. With account access, look up its paid transaction in **Продажи** and inspect the transaction report and, where already configured, the authenticated invoice or webhook record. Capture the stable order identifier, observed field names and values, and which source/campaign/placement tags actually survived. Use a second placement or an untagged control to distinguish pass-through from a default value. Seeing tags in an address bar or a source dropdown is insufficient. Ask Lava support which supported hosted-link fields persist, where they are exposed, and whether there is a test mode if records are inconclusive.
2. Maintain a restricted ledger with one row per canonical Lava invoice ID for the verified Winter Challenge offer. If the sales report exposes only a transaction ID, use it as the canonical report key until its mapping to invoice ID is verified. Never add one count per system. Record successful payment time, offer, amount/currency, attribution evidence, refund/dispute state, and test flag. Filter to the correct offer, remove test records, and deduplicate retries, repeated exports, and repeated browser returns by the canonical ID. Include only confirmed first/one-time payments. Track full refunds, partial refunds, and disputes separately from gross confirmations. Keep purchase IDs and customer details out of Vercel custom events.
3. If native hosted attribution proves only an aggregate campaign label, report campaign-attributed orders and tagged landing visitors side by side. The exact per-visitor rate requires evidence joining the same landing cohort and paid orders, including the visitor's landing time. Unmatched or ambiguous orders stay unattributed, and report how many there are. Without verified attribution, report total confirmed Winter Challenge orders, tagged landing visitors, and the diagnostic events. Mark the Instagram purchase rate unavailable.
4. If the project later adopts API-created invoices, capture an opaque first-party visitor key and tagged landing time in a durable ledger and persist the mapping to the returned Lava invoice ID before redirecting to its payment URL. Pass the normalized campaign data via the supported `clientUtm` request when verified for the selected API version. Use the server-held invoice mapping for reconciliation. Authenticate webhooks with a server-held secret, check the offer and paid state, and upsert on invoice ID before acknowledging. Keep Lava credentials server-side. This path needs credentials, a buyer email step, durable storage, and account configuration.
5. With a verified join, use a **7-day window from first tagged campaign landing** as the initial reporting convention. For each reporting period count distinct eligible Instagram landing visitors, then the subset with at least one confirmed eligible order paid between their cohort timestamp and seven days later. Divide the second count by the first and multiply by 100. Retain the first eligible placement per visitor for breakdowns. Compare only cohorts whose seven days have elapsed, use the same timezone for both sources (start with America/New_York), and publish numerator, denominator, and attribution coverage. Vercel hashes reset daily, so Vercel's Visitors metric alone supplies a diagnostic count at browser/day granularity and cannot support a joined seven-day visitor conversion rate. [Vercel visitor counting](https://vercel.com/docs/analytics#how-visitors-are-determined)

## Integration checks

- In an authorized analytics-enabled preview, open each tagged entry plus an untagged link and one with an unexpected `utm_content`. Verify `instagram_landing` and `entry` in the browser's analytics request and Vercel Events. The untagged link should emit no custom landing event. Separate preview/test traffic from production reporting.
- Test every purchase CTA on desktop with mouse and keyboard, then tap the hero and guide-path CTAs in Instagram on iPhone and Android. Verify each named click event and successful navigation to the same verified Lava destination. Repeat with analytics blocked and verify that purchase navigation still works.
- Activate the guide shortcut, play each video, pause and resume, then activate each original Reel link. Confirm the expected properties and one video-start event per video per load.
- For a supported test or existing authorized order, follow the reconciliation steps above and retain redacted evidence. Reprocess the same order twice and verify that the confirmed count stays one. Cancelled/unpaid paths leave that count unchanged. Record the export or webhook fields actually available and gate purchase-rate reporting on the matching evidence.
