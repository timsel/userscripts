// ==UserScript==
// @name         passzio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://passzio.hu/*
// @grant        none
// ==/UserScript==

(function() {
    jQuery('#dialog').hide();
    jQuery('#mask').hide();
})();
