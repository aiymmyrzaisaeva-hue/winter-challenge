# Winter Challenge offer and Lava checkout handoff

Public buyer flow checked on 15 November 2026 in desktop Chrome, signed out of Lava.

## URLs and price for the landing page

- [Public Lava product listing][listing] — **Зимний сезонный челлендж 2027**, by **Aiymmyrza Isaeva**. The listing loaded with an active Buy button. Lava documents this product URL as its share link, with optional currency and interface language settings. The bare link opened in USD and English in this browser. The product description itself was in Russian. [Lava share-link instructions][sharing]
- [Direct USD payment form][direct] — Lava generated this URL from Buy. I reopened it in a new desktop tab and confirmed it reached the same product's email/payment form at **$99 USD** without a listing step. This establishes that the generated route works in desktop Chrome. Lava's public sharing instructions document the listing URL, and I found no public guidance guaranteeing the generated checkout URL as a durable campaign link. Use the listing as the launch fallback. Before replacing it with the direct route, confirm link support with Lava and check the route from actual Instagram browsers. Lava also documents a site payment widget that requires a moderated domain. [Lava share-link instructions][sharing] · [Lava widget instructions][widget]
- Put the price beside the first and final CTA. For the universal listing link, use **«99 USD / 89 EUR / 8 199 ₽ · Оплата через Lava»** with **«Купить участие»**. For a USD-first route that you have verified from the target device, use **«Купить участие за 99 USD»** with **«Оплата через Lava. На странице оплаты можно сменить валюту»**. The USD-first choice is optional for the international audience. Use the same destination across equivalent CTAs and share the selected URL with the measurement owner.

## Observed checkout

| Currency | Total with fee compensation off | Methods displayed on desktop before email or payment |
| --- | --- | --- |
| USD | $99.00 | Card, Apple Pay, PayPal and SBP icon |
| EUR | €89.00 | Card, Apple Pay, PayPal and a menu showing icons for SEPA, iDEAL, Bancontact, MB WAY and PIX |
| RUB | ₽8,199.00 | Card and SBP |

The selectable currencies were USD, EUR and RUB. For USD the author-fee switch was off on arrival. Turning it on displayed **$8.61** in compensation and **$107.61** to pay. I turned it off and confirmed **$99.00** again. Lava describes the author commission as 8% and buyer compensation as voluntary and off by default when enabled. Card issuers may apply conversion or their own fees. The USD SBP icon is a UI observation. Lava's buyer guidance directs Russian card and SBP buyers to RUB. Treat displayed icons as method choices, with actual availability dependent on buyer device, market and provider. [Lava creator fees][creator-fees] · [Lava buyer payment guide][buyer-payments]

The Russian interface was available through the public language menu. The two tabs shared browser state, so language on a clean direct visit and on iPhone/Android remains to be checked. I did not enter an email, apply a promo code, submit a payment, or access seller settings. The public form demonstrates that checkout can be opened. Actual charges, access delivery and cohort availability remain unverified.

## Offer facts and owner confirmations

| Item | Evidence | What Aiym needs to confirm |
| --- | --- | --- |
| Product name and enrollment | Lava uses **Зимний сезонный челлендж 2027**. The final landing offer uses **Зимний челлендж 2026/2027**. The current Lava form is open. | Use Lava's existing name consistently unless Aiym chooses a different shared title. Confirm this is the correct product for the upcoming cohort, whether enrollment is open now, and any real deadline or capacity. |
| Category count and materials | The public Lava listing says **30**. The landing says **34**. The [research index][index] lists 34 winter categories plus one «Другое» and links to example analyses and filming notes. This establishes the source library's count. | Confirm which categories and materials a buyer receives from this SKU. Verify that examples, opening frames, shooting steps and timing ship as described. If all 34 ship, update Lava to 34. If the SKU delivers a subset, verify its count and use that across both pages. |
| Plan and cohort dates | Lava says day-by-day. The landing says four weekly plans, 18 November to 15 December, with call dates of 24 November, 1, 8 and 15 December. The landing calendar points to 2026. | Confirm the actual plan's cadence and that the cohort runs **18 November–15 December 2026**. Confirm proposed call dates, start times, time zone and duration. |
| Live feedback and recordings | The landing advertises four Zoom calls with feedback on participant Reels. The Lava description omits calls. | Confirm that all four calls are included in this price, who can submit videos, how to submit them, how feedback is allocated, and whether recordings are provided and for how long. |
| Delivery and access | The landing promises indefinite access to materials. The public listing omits access duration. Lava documents a paid section and «Мои покупки» after purchase. [Lava purchase guide][buying] | Verify what the paid section and purchase email actually contain, how and when access and Zoom instructions arrive, the destination and support contact, and how long buyers retain access to materials. |
| Refunds | Lava documents a seller-driven refund process. When a buyer voluntarily covers the service fee, Lava says the fee compensation is excluded from the refund. [Lava buyer payment guide][buyer-payments] · [Lava creator fees][creator-fees] | Supply the offer's actual refund terms, request channel, and any deadlines or conditions. |
| Creator claims | Lava mentions 10,000 followers gained last winter. The landing mentions 40,000 gained over the past year. These cover different periods and the public screens do not substantiate either gain. | Provide the source and date range for any growth claim to be used on both pages. |

Landing source — [current full-offer section](../public/index.html#L352). The original runbook records the mismatch in [issue 01][issue1] and the mobile checkout acceptance criteria in [issue 02][issue2].

## Russian copy for the Lava listing

**Название**

Зимний сезонный челлендж 2027

**Описание**

Выберите тему для своего зимнего Reels, придумайте первый кадр и решите, когда выложить ролик. Я собрала сезонные идеи и примеры, чтобы вы смогли подобрать формат для своего блога и перейти к съёмке.

Внутри вас ждут примеры Reels, идеи, которые можно адаптировать под свою тему и аудиторию, и план, который помогает выбрать, что снимать сейчас и какие сюжеты оставить на следующие недели. Начните с темы, которую ваши зрители уже обсуждают — от подарков и декора до итогов года.

Стоимость участия — 99 USD, 89 EUR или 8 199 ₽. Валюту можно выбрать при оплате через Lava.

**Дополнения после подтверждения Айым**

Если подтверждены даты, формат и четыре созвона, добавьте перед ценой:

> Челлендж пройдёт с 18 ноября по 15 декабря 2026 года. Каждую неделю вы сможете выбрать идею из плана, снять ролик и обсудить его на групповом созвоне в Zoom. На четырёх встречах я разберу Reels участников и покажу, как усилить первый кадр, съёмку и подачу.

Если подтверждён полный комплект, замените второй абзац описания:

> Внутри — 34 категории зимних Reels. В каждой есть примеры, идеи для первого кадра, план съёмки и подсказки, когда выложить ролик. Выберите тему для своего блога и снимите первый ролик по плану этой недели.

Если подтверждён бессрочный доступ к материалам, добавьте рядом с ценой:

> Материалы останутся у вас после челленджа. К ним можно возвращаться в любой зимний сезон.

Перед публикацией условий участия рядом с ценой укажите подтверждённые время и часовой пояс созвонов, порядок отправки роликов, условия доступа к записям и возврата. Тот же текст используйте в разделе о покупке на лендинге.

Если Aiym verified that the paid section contains access instructions, use this as the post-payment email message:

> Спасибо за участие в «Зимнем сезонном челлендже 2027»! Войдите в Lava с email, который указали при оплате. Откройте «Мои покупки» и выберите челлендж. Внутри вы найдёте инструкцию по доступу к материалам.

## Checks before switching landing CTAs

1. Reconcile the paid payload and confirmed cohort terms with Aiym. Update the Lava description and landing offer together. Verify the public listing and each landing CTA still reference the correct product and that price, currency and access terms match.
2. Open the landing from the Instagram app on iPhone and Android. In each intended market, record the default language and currency, selectable currency, displayed total with compensation off, visible payment methods, and whether the checkout opens from the first and final CTAs. Include a USD or EUR international route and a RUB route if serving Russian buyers. Stop at the payment form for a read-only check.
3. If using the direct route, repeat the same walkthrough from a fresh in-app browser session after the product copy changes and verify the measurement contract with the measurement owner. Use the documented listing route if the generated payment URL fails in a target environment or Lava cannot confirm it for campaign use.

[listing]: https://app.lava.top/products/31432966-4fab-412d-838e-9c4374c4f083
[direct]: https://app.lava.top/products/31432966-4fab-412d-838e-9c4374c4f083/52714333-def7-4e32-a2a5-c6eb26799196?currency=USD
[sharing]: https://faq.lava.top/article/79615
[widget]: https://faq.lava.top/article/67353
[creator-fees]: https://lava.top/wiki/finances/for-creators
[buyer-payments]: https://faq.lava.top/article/79263
[buying]: https://faq.lava.top/article/59251
[index]: /Users/aiymmyrzaisaeva/winter-season-challenge-analysis/winter-challenge/index.md
[issue1]: /Users/aiymmyrzaisaeva/Documents/ChatGPT/winter-challenge/issues/01-align-the-landing-page-and-lava-offer.md
[issue2]: /Users/aiymmyrzaisaeva/Documents/ChatGPT/winter-challenge/issues/02-show-price-and-shorten-checkout.md
