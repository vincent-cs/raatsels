"use strict";

let edge_cells = [];
let white_cells = [];
let colored_cells = [];

function locationHashChanged() {
// raatsels previous weeks
    switch (location.hash) {
        default:
            location.hash = "19";
        case "#19" :
            // NRC raatsel 2 mei 2020, week 18
            edge_cells = ["Eindigt op een a", "Dier", "Feeks", "Monic Hendrickx", "Palindroom", "Indonesië"];
            white_cells = ["5 letters", "Automodel", "Begint met een s", "Meisjesnaam", "Mythologie", "NAVO-alfabet", "Stad"];
            colored_cells = ["Anna", "Bravo", "Carina", "Echo", "Eenhoorn", "Eos", "Furie", "Harpij", "Hydra", "India", "Juliett", "Ka", "Kenau", "Kreng", "Lima", "Mustang", "Nadine", "Nynke", "Petra", "Quebec", "Sawa’s", "Semarang", "Sierra", "Sijs", "Soenda", "Soerabaja", "Sofia", "Sonja", "Suus", "Toledo"];
            break;
        case "#18" :
            // NRC raatsel 2 mei 2020, week 18
            edge_cells = ["Bevestigingsmiddel", "Politicus", "Zelfde begin- en eindletter", "Begint met een R", "Zeevaarder", "dubbele"];
            white_cells = ["Hoofdstad VS-staat", "In de bouw", "Jongensnaam", "Scheeps-onderdeel", "Schip", "Sterrenbeeld", "Vogel"];
            colored_cells = ["Anker", "Arend", "Axle", "Bismarck", "Bodem", "Columbus", "Duif", "Eenhoorn", "Hamer", "Hein", "Koekoek", "Kompas", "Koolmees", "Kraan", "Lier", "Maasdam", "Nagel", "Nelson", "Phoenix", "Pierre", "Rainbow Worrior", "Releigh", "Reiger", "Richmond", "Rotterdam", "Schroef", "Steven", "Tapbout", "Valk", "Winkelhaak"];
            break;
        case "#17" :
            // NRC raatsel 25 april 2020, week 17
            edge_cells = ["Inspiratie voor van Gogh", "Meisjesnaam", "Schrijver", "Arnhem", "Wielersport", "Brussels metrostation"];
            white_cells = ["België", "Dit jaar geschrapt", "Floraal", "Frankrijk", "Met oo", "Religieus", "Voetbal"];
            colored_cells = ["Alex Pastoor", "Anderlecht", "Ardennen", "Bizet", "Bloemencorso Zundert", "Burgers Zoo", "Delacroix", "Doop", "Eddy Merckx", "Euro 2020", "F1 Zandvoort", "Fleur de lis", "Gelredome", "Gloria", "Guido Gezelle", "Hadewijch", "Iris", "Jaques Brel", "Louis Paul Boon", "Marcel van Roosmalen", "Matthäus-Passion", "Milet", "Monnikskap", "Parijs-Roubaix", "Ronde van Vlaanderen", "Rui Costa", "Theo Bos", "Tom Boonen", "Veronica", "Zonnebloem"];
            break;
        case "#16":
            // NRC raatsel 18 april 2020, week 16
            edge_cells = ["Australië", "Naast elkaar", "Op de huid", "Begint met een S", "Romeinse oudheid", "Maakte beroemde reis"];
            white_cells = ["Als held vereerd", "Auto", "Dubbelop", "Duitsland", "Kleding", "Stad", "Televisie"];
            colored_cells = ["Aeneas", "Arminius", "Baden-Baden", "Barentsz", "Buurman en Buurman", "Cancan", "Columbus", "Dallas", "Darwin", "Duster", "Kiel", "Kielekiele", "Lederhose", "Lepeltje-lepeltje", "Lincoln", "Neighbours", "Octavia", "SamSam", "Smart", "Scorpio", "Ski-jack", "Skinny jeans", "Spartacus", "Sydney", "Tatort", "Taunus", "The Flying Doctors", "Tutu", "Washington", "Wetsuit"];
            break;
        case "#15":
            // NRC raatsel 11 april 2020, week 15
            edge_cells = ["4 letters", "Deel van een vuurwapen", "Eerste of Tweede", "Eindigt op een I", "Lichaamsdeel", "Hugo"];
            white_cells = ["In een restaurant", "Minister", "Muziek", "Op het boerenerf", "Palindroom", "Ruimte", "Zanger"];
            colored_cells = ["Aardappelen", "Borst", "Bot", "Brood", "De Groot", "De Jonge", "Gang", "Haak", "Haan", "Kaak", "Kamer", "Klas", "Knol", "Kok", "Kroes", "Lel", "Lepel", "Levensnevel", "Long", "Lounge", "Magazijn", "Muzak", "Pink", "Pop", "Stal", "Stem", "Soul", "Trekker", "Viool", "Zalm"];
            break;
        case "#14":
            // NRC raatsel 4 april 2020, week 14
            edge_cells = ["Op de kermis", "Jan Wolkers", "Monique van de Ven", "Meisjesnaam", "Zelfde begin- en eindletter", "Begint met een C"];
            white_cells = ["Drank", "Eindigt op een o", "Film", "Lekkernij", "Muzikaal", "Plant", "Tijdschrift"];
            colored_cells = ["Antonia", "Botsauto", "Brandende Liefde", "Candy", "Calypso", "Casino", "Cognac", "Cosmopolitan", "Curacau", "De aanslag", "Elle", "Fanfare", "Gesponnen suiker", "Gifsla", "Iris", "Isabelle", "KIJK", "Magnolia", "Mai Tai", "Margriet", "Mars", "Mojito", "Ouzo", "Pepermunt", "Rolling Stone", "Rolo", "Tango", "Turks fruit", "Viool", "Zuurstok"];
            break;
        case "#13":
            // NRC raatsel 28 maart 2020, week 13
            edge_cells = ["Winkels", "Colomnist", "Vader en zoon", "Begin met een V", "Zes letters", "Begint met een S"];
            white_cells = ["Ajax", "Boeken", "Jan", "Presentator", "Scheepvaart", "Snelheidssport", "Tweeling"];
            colored_cells = ["Adriaan en Olivier", "Anker", "Barend", "Blind", "Blokker", "Bolt", "Bruna", "Coronel", "De Boer", "De Hartog", "Ekkel", "Kieft", "Kompas", "Kuitenbrouwer", "Merckx", "Mulder", "Salamander", "Schippers", "Selexyz", "Stekelenburg", "Steven", "Stuurboord", "Verstappen", "Versteegh", "Visser", "Vos", "Wolkers", "Wouters", "Yates", "Zeeman"];
            break;
    }

    document.getElementById("Raatsel_h2").innerHTML = "NRC Raatsel week " + location.hash[1] + location.hash[2];
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
            let weekNumber = location.hash[1] + location.hash[2];
            let weekId = "week_" + weekNumber;
            let puzzleDate = document.getElementById(weekId).getAttribute("data-puzzle");
            let puzzleText = document.getElementById(weekId).innerText;
            document.getElementById("oplossing_img").src = "images/raatsel-oplossing-" + puzzleDate + ".png";
            captionText.innerHTML = "Oplossing van week " + weekNumber + ", " + puzzleText;
            document.getElementById("oplossing_img").style.visibility = "visible";
            if (weekNumber === "18") {
                document.getElementById("oplossing_img").style.visibility = "hidden";
                captionText.innerHTML = "Oplossing van week " + weekNumber + ", " + puzzleText + " komt komende zaterdag";
            }
        }
    }
    ,
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