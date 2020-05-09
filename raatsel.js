"use strict";

import {
    edge_cells,
    white_cells,
    colored_cells,
    nrc_week,
    nrc_week_min,
    nrc_week_max,
    nrc_date,
    nrc_href,
    setWeekPuzzle
} from "./raatsel-week-puzzels.js";

let menu = "<li><a >week</a></li>";
let menu_date = new Date(2020, 2, 28);
const menu_date_option = {month: 'long', day: 'numeric'};
for (let x = nrc_week_min; x <= nrc_week_max; x++) {
    menu += "<li><a href='#" + x + "'>" + x + " / " + menu_date.toLocaleDateString("nl-NL", menu_date_option) + "</a></li>\n";
    menu_date.setDate(menu_date.getDate() + 7);
}
document.getElementById("menu_week_met_datum").innerHTML = menu;

function locationHashChanged() {

    setWeekPuzzle();

    document.getElementById("Raatsel_h2").innerHTML = "NRC Raatsel week " + nrc_week;

    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    document.getElementById("nrc_puzzle_datum").innerHTML = "NRC Raatsel week " + nrc_week + " van " + nrc_date.toLocaleDateString('nl-NL', options);
    document.getElementById("nrc_puzzle_link").innerHTML = "<a href=" + nrc_href + ">link naar nrc krant</a>";
    document.getElementById("witte_cellen").innerHTML = white_cells.join(" - ");
    document.getElementById("gekleurde_cellen").innerHTML = colored_cells.join(" - ");

    edge_cells.map((item, index) => {
        let i = "e" + (index);
        document.getElementById(i).innerText = item
    });

    white_cells.map((item, index) => {
        let i = "w" + (index + 1);
        document.getElementById(i).innerText = item
    });

    colored_cells.map((item, index) => {
        let i = "c" + (index + 1);
        document.getElementById(i).innerText = item
    });
}

window.onhashchange = locationHashChanged;
locationHashChanged()

let color_cell_selected = null;
let white_cell_selected = null;

document.addEventListener('click', function (event) {

        let clickedElem = event.target;
        // Log the clicked element in the console
        // console.log(clickedElem);

        if (clickedElem.classList.contains('white-text')) {
            if (clickedElem.classList.contains('x')) {
                clickedElem.classList.remove('x')
                white_cell_selected = null;
            } else {
                if (white_cell_selected) {
                    let temp_id = clickedElem.id.valueOf().toString();
                    let temp_text = document.getElementById(temp_id).innerText;
                    document.getElementById(temp_id).innerText = document.getElementById(white_cell_selected).innerText;
                    document.getElementById(white_cell_selected).innerText = temp_text;
                    document.getElementById(white_cell_selected).classList.remove('x')
                    white_cell_selected = null;
                } else {
                    clickedElem.classList.add('x')
                    white_cell_selected = clickedElem.id.valueOf().toString();
                }
            }
        }

        if (clickedElem.classList.contains('color-text')) {
            if (clickedElem.classList.contains('y')) {
                clickedElem.classList.remove('y')
                color_cell_selected = null;
            } else {
                if (color_cell_selected) {
                    let temp_id = clickedElem.id.valueOf().toString();
                    let temp_text = document.getElementById(temp_id).innerText;
                    document.getElementById(temp_id).innerText = document.getElementById(color_cell_selected).innerText;
                    document.getElementById(color_cell_selected).innerText = temp_text;
                    document.getElementById(color_cell_selected).classList.remove('y')
                    color_cell_selected = null;
                } else {
                    clickedElem.classList.add('y')
                    color_cell_selected = clickedElem.id.valueOf().toString();
                }
            }
        }

        if (clickedElem.classList.contains('oplossing')) {
            modal.style.display = "block";
            // let weekId = "week_" + nrc_week;
            // let puzzleDate = document.getElementById(weekId).getAttribute("data-puzzle");
            // let puzzleText = document.getElementById(weekId).innerText;
            let puzzleDate = nrc_date.toISOString().split("T")[0];
            document.getElementById("oplossing_img").src = "images/raatsel-oplossing-" + puzzleDate + ".png";
            captionText.innerHTML = "Oplossing van week " + nrc_week + ", " + puzzleDate;
            document.getElementById("oplossing_img").style.visibility = "visible";
            if (nrc_week === nrc_week_max) {
                document.getElementById("oplossing_img").style.visibility = "hidden";
                captionText.innerHTML = "Oplossing van week " + nrc_week + ", " + puzzleDate + " komt komende zaterdag";
            }
        }
    },
    false
);

// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// let modalImg = document.getElementById("modal-content");
let captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
let closeMyModal = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeMyModal.onclick = function () {
    modal.style.display = "none";
}

let tempSave = document.getElementById("temp_save");
tempSave.onclick = function () {
    status()
};

function status() {
    let white_status = [];
    let colored_status = [];
    for (let i = 1; i <= 7; i++) {
        let index = "w" + i;
        white_status.push(document.getElementById(index).innerText);
    }
    for (let i = 1; i <= 30; i++) {
        let index = "c" + i;
        colored_status.push(document.getElementById(index).innerText);
    }

    if (document.getElementById("temp_status").style.display === "none") {
        document.getElementById("temp_status").style.display = "block";
        document.getElementById("witte_cellen_status").innerText = white_status.join(" - ");
        document.getElementById("gekleurde_cellen_status").innerText = colored_status.join(" - ");

        console.log("white_cells=");
        console.log(white_status);
        console.log("colored_cells=");
        console.log(colored_status);
    } else {
        document.getElementById("temp_status").style.display = "none";
    }
}