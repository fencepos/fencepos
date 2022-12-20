let reportWebVitals;

(async () => {
  const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
  const webVitals = { getCLS, getFID, getFCP, getLCP, getTTFB };

  reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      webVitals.getCLS(onPerfEntry);
      webVitals.getFID(onPerfEntry);
      webVitals.getFCP(onPerfEntry);
      webVitals.getLCP(onPerfEntry);
      webVitals.getTTFB(onPerfEntry);
    }
  };
})();

export default reportWebVitals;
