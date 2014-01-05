// ==UserScript==
// @name           AfterDawn download wrapper remover
// @version        0.4
// @author         Bruno Barbieri
// @description    Rewrites the download link to remove the download wrapper in AfterDawn (i.e. "Safe Download" button)
// @include        http://afterdawn.*/*
// @include        http://*.afterdawn.*/*
// @include        http://www.*.afterdawn.*/*
// @include        http://download.fi/*
// @include        http://*.download.fi/*
// @include        http://www.*.download.fi/*
// @namespace      http://userscripts.org/scripts/show/161313
// @updateURL      http://userscripts.org/scripts/source/161313.meta.js
// @downloadURL    http://userscripts.org/scripts/source/161313.user.js
// ==/UserScript==

/*
 * ===== Changelog =====
 *
 * v0.1: Initial version
 * v0.2: Switch code to jQuery and only keep one regex search, just in case
 * v0.3: Use alternate method for loading jQuery, now works with Chrome as well. Credits to Erik Vold (http://r.evold.ca/jquery4us).
 *       Use domain wildcards that work in Chrome as well, and add the Finnish domain.
 * v0.4: Added update URL and updated JQuery version
 *
 */
 
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
    // Remove extra text from button (e.g. "Safe Download")
    jQ("#download-main-button").html((jQ("#download-main-button").html().replace("<b>" + jQ('#download-main-button > b').html() + "</b>","")));

    // Remove extra style from button
    jQ('#download-main-button').removeClass('extra-label');

    // Remove hidden input
    jQ('input[name="installer"]').remove();

    // Replace installer option in button URL
    jQ('#download-main-button').attr('href', jQ('#download-main-button').attr('href').replace(/installer=[\d]+/, 'installer=0'));
}

// Load jQuery and execute the main function
addJQuery(main);