// ==UserScript==
// @name         furry_irl Place overlay
// @namespace    https://nightc.at/
// @version      6.21
// @description  try to take over the canvas!
// @author       oralekin, Monitor
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://imgur.com/g2aG2Nj.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            //console.log(i);
            //console.log("tes2t")
            return i;
        })())

    }, false);

}
