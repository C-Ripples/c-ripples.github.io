/*********************************************************
 * 
 * Application "Rain"
 * 
 *********************************************************/

import { Rain } from './rain.js';

const BG_COLOR = "#f0f0f0";

let canvas = document.querySelector("#_canvas");
let rain = new Rain();

export function execRain() {

    /**
     * Full size window
     */
    const _html = document.querySelector("#_html");
    _html.style.margin = 0;
    _html.style.padding = 0;
    const _body = document.querySelector("#_body");
    _body.style.margin = 0;
    _body.style.padding = 0;

    /**
     * Canvas initialization
     */
    canvas.style.display = "block";
    canvas.style.backgroundColor = BG_COLOR;
    canvas.width = window.innerWidth;          // Canvas size
    canvas.height = window.innerHeight;        //   <- Window size

    /**
     * Event settings
     */
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;      // Canvas size
        canvas.height = window.innerHeight;    //   <- Window size
        rain.restart(canvas);
    });

    /**
     * App execution
     */
    rain.start(canvas);
}