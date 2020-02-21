// modified from https://github.com/djpogo/webp-inline-support/blob/master/webp.js

/*
const detectNoScriptCode = (document: Document) => {
  "use strict";

  const addClassIfSupported = (hasSupport: boolean) => {
    if (!hasSupport) return;

    const htmlElement = document.documentElement;
    !!htmlElement.classList
      ? htmlElement.classList.add("webp")
      : (htmlElement.className += " webp");
  };

  const testWepP = () => {
    const webP = new Image();
    webP.src =
      "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";

    webP.onload = () => addClassIfSupported(webP.height === 2);
    webP.onerror = () => addClassIfSupported(webP.height === 2);
  };

  document.addEventListener("DOMContentLoaded", testWepP);
  // use this when calling inside a script tag in the <head> element:
  // testWepP()
};
*/

export const detectWebpSupport =
  '!function(e){"use strict";function s(s){if(s){var t=e.documentElement;t.classList?t.classList.add("webp"):t.className+=" webp",window.sessionStorage.setItem("webpSupport",!0)}}!function(e){if(window.sessionStorage&&window.sessionStorage.getItem("webpSupport"))s(!0);else{var t=new Image;t.onload=t.onerror=function(){e(2===t.height)},t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}}(s)}(document);';
