(function(){
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('pageScript.js');
  script.onload = ()=> script.remove();
  (document.head||document.documentElement).appendChild(script);
})();
