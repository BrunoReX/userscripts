// ==UserScript==
// @name          YouTube - Hide related videos & expand comments
// @version       1.1.2
// @author        Bruno Barbieri
// @description   Hides related videos and expand comment section
// @include       http://*.youtube.com/*watch*
// @include       http://youtube.com/*watch*
// @include       https://*.youtube.com/*watch*
// @include       https://youtube.com/*watch*
// @namespace     https://github.com/BrunoReX/userscripts
// @updateURL     https://raw.github.com/BrunoReX/userscripts/master/YouTube/hide_related_videos_and_expand_comments.user.js
// @downloadURL   https://raw.github.com/BrunoReX/userscripts/master/YouTube/hide_related_videos_and_expand_comments.user.js
// ==/UserScript==

// A function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
    if (!jQ('.playlist-header').length) { // Don't hide playlist controls
        jQ('.watch-sidebar').remove();
        jQ('.watch-content').width('100%');
        jQ('#action-panel-details').width('100%');
        jQ('#watch-description-clip').width('100%');
    }
}

window.addEventListener('load', function() {
    addJQuery(main);
}, false);
