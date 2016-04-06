(function siteId(tries) {
  var hostname = location.hostname.replace(/[^a-z0-9]/gm, "_");
  var className = "id__" + hostname;
  var html = document.documentElement;

  if (!html && tries < 3) {
    setTimeout(function() {
      siteId(tries + 1);
    }, 300);
  } else {
    html.classList.add(className);
    html.dataset.siteId = hostname;
  }
}(0));
