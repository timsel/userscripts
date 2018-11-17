// ==UserScript==
// @name         bta1 blocker :)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://prohardver.hu/tema/*
// @grant        none
// ==/UserScript==

(function() {
    jQuery(".msg :contains(bta1)").parent().hide();
    jQuery(jQuery.find("[class*=xabre]")).hide();
})();
