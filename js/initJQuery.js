/**
 * Melanie Boncaro
 * Portfolio 2023
 * 
 * Adds JQuery and Scroll Animation scripts to head element of pages.
 */

let jqueryScript = document.createElement("script");
jqueryScript.src = "https://code.jquery.com/jquery-3.7.1.js";

let AOSScript = document.createElement("script");
// let AOSScriptPath = 
// initAOS.src = (window.location.href = "js/scrollAnimations.js");

console.log(AOSScript);


function initJQuery() {
    document.getElementsByTagName("head")[0].appendChild(jqueryScript);
}

async function initAOS() {
    await initJQuery();
    document.getElementsByTagName("head")[0].appendChild(AOSScript);
}

initJQuery();
initAOS();