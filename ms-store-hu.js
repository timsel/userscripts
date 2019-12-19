// ==UserScript==
// @name         ms store => hu-hu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.microsoft.com/en-us/p/*
// @grant        none
// ==/UserScript==

(function() {
    window.location.replace(window.location.href.replace('en-us', 'hu-hu'));
})();
