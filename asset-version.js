(function () {
  const version = '20260806-1';
  const hasVersion = (url) => /([?&])v=[^&]+/.test(url);
  const isLocalAsset = (url) => {
    if (!url) return false;
    return !/^(https?:|data:|mailto:|tel:|#)/i.test(url);
  };

  const applyVersion = (element, attrName) => {
    const currentValue = element.getAttribute(attrName);
    if (!currentValue || !isLocalAsset(currentValue) || hasVersion(currentValue)) {
      return;
    }

    const separator = currentValue.includes('?') ? '&' : '?';
    element.setAttribute(attrName, `${currentValue}${separator}v=${version}`);
  };

  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => applyVersion(link, 'href'));
  document.querySelectorAll('script[src]').forEach((script) => applyVersion(script, 'src'));
  document.querySelectorAll('img[src]').forEach((img) => applyVersion(img, 'src'));
})();
