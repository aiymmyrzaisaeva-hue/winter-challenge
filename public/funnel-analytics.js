(() => {
  const query = new URLSearchParams(window.location.search);
  const placements = ['bio', 'story', 'dm', 'reel'];
  const isInstagramCampaign = query.get('utm_source') === 'instagram'
    && query.get('utm_medium') === 'organic_social'
    && query.get('utm_campaign') === 'winter_challenge_2027';
  const content = query.get('utm_content');
  const entry = isInstagramCampaign
    ? (placements.includes(content) ? content : 'instagram_other')
    : 'other';

  function track(name, data) {
    try {
      window.va?.('event', { name, data: { entry, ...data } });
    } catch {
      // Analytics must never interfere with the page or checkout link.
    }
  }

  if (isInstagramCampaign) track('instagram_landing');

  const linkEvents = [
    ['a[data-funnel-cta]', 'checkout_click', 'funnelCta', 'position',
      ['hero', 'after_unboxing', 'after_advent', 'final']],
    ['a[data-funnel-guide]', 'guide_open', 'funnelGuide', 'position', ['hero']],
    ['a[data-funnel-original]', 'example_original_click', 'funnelOriginal', 'example',
      ['unboxing', 'advent']],
  ];

  for (const [selector, name, attribute, property, allowed] of linkEvents) {
    for (const link of document.querySelectorAll(selector)) {
      const value = link.dataset[attribute];
      if (allowed.includes(value)) {
        link.addEventListener('click', () => track(name, { [property]: value }));
      }
    }
  }

  for (const video of document.querySelectorAll('video[data-funnel-example]')) {
    const example = video.dataset.funnelExample;
    if (['unboxing', 'advent'].includes(example)) {
      video.addEventListener('playing', () => track('example_video_start', { example }), { once: true });
    }
  }
})();
