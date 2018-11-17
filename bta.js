// ==UserScript==
// @name         ph
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://prohardver.hu/*
// @match        https://itcafe.hu/*
// @grant        none
// ==/UserScript==

(function() {
    jQuery(".msg :contains(bta1)").parent().hide(); // troll
    jQuery(jQuery.find("[class*=xabre]")).hide(); //ads
    jQuery('body > style:nth-child(3)').remove(); //background ads
    jQuery('body > a').remove(); // background ads link
})();
