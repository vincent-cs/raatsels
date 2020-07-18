"use strict";

export  let edge_cells = [];
export  let white_cells = [];
export  let colored_cells = [];

export  let nrc_week = 0;
export  let nrc_week_min = 13;
export  let nrc_week_max = 29;
export  let nrc_date = new Date();
export  let nrc_href = "";

export function setWeekPuzzle() {

    // raatsels previous weeks
    switch (location.hash) {
        default:
            location.hash = nrc_week_max.toString();
        case "#29" :
            // NRC raatsel 18 juli 2020, week 29
            nrc_week = 29;
            nrc_date = new Date(Date.UTC(2020, 6, 18));
            nrc_href = "https://www.nrc.nl/nieuws/2020/07/18/raatsel-a4006292";
            edge_cells = ["Han", "Alleen", "Begint met een P", "Architect", "6 letters", "Voetbalcoach"];
            white_cells = ["Begint met een meisjesnaam","Bouwwerk","In het water","Muziek","Religieus","Spel","Zelfde begin- en eindletter"];
            colored_cells = ["Aria","Berger","Boothuis","Cantor","Dam","Duiker","Enrique","Ensemble","Hotel","Jokeren","Kerk",
                "Koraal","Koster","Kwartet","Lotus","Mariakapel","Moslim","Noten","Opera","Pagode","Pastoor","Patience","Pennywafel",
                "Pesten","Piano","Reiziger","Rietveld","Römer","Solitaire","Solo"];
            break;
        case "#28" :
            // NRC raatsel 11 juli 2020, week 28
            nrc_week = 28;
            nrc_date = new Date(Date.UTC(2020, 6, 11));
            nrc_href = "https://www.nrc.nl/nieuws/2020/07/11/raatsel-a4005614";
            edge_cells = ["ijsje", "Sportterm", "Groep", "Stok", "Vervoermiddel", "Hij gaat als een ..."];
            white_cells = ["5 letters","Begint met een B","Frans","Militair","Plaatsnaam","Ten afscheid","Wapentuig"];
            colored_cells = ["Adieu","Au revoir","Axel","Baton","Batterij","Bazooka","Bezemsteel","Biljartkeu",
                "Break","Brommer","Bye","Chantilly","Dolle","Ensemble","Gendarmerie","Goedendag","Groet","Koets","Knots","Magnum",
                "Manche","Peloton","Raket","Sedan","Saluut","Speer","Split","Staf","Trein","Winchester"];
            break;
        case "#27" :
            // NRC raatsel 4 juli 2020, week 27
            nrc_week = 27;
            nrc_date = new Date(Date.UTC(2020, 6, 4));
            nrc_href = "https://www.nrc.nl/nieuws/2020/07/04/raatsel-a4004935";
            edge_cells = ["Begint met een jongensnaam", "'s nachts", "Sukkel", "Begint met een G", "Hyppisch", "Auto"];
            white_cells = ["4 letters","Bolvormig","Dier","Dubbelop","Kleding","Plaatsnaam","Sport"];
            colored_cells =["Assendelft","Babydoll","Bobben","Charleston","Cordoba","Eend","Egel","Fado","Gang","Gans",
                "Gehaktbal","Gierzwaluw","Globe","Golf","Hansop","Ibiza","Judo","Kiel","Knol","Kogelvis","Oliebol","Polo",
                "Reining","Robe","Rugby","Ruin","Uil","Vlinderdas","Voetbal","Vos"];
            break;
        case "#19" :
            // NRC raatsel 9 mei 2020, week 19
            nrc_week = 19;
            nrc_date = new Date(Date.UTC(2020, 4, 9));
            nrc_href = "https://www.nrc.nl/nieuws/2020/05/09/raatsel-a3998912";
            edge_cells = ["Eindigt op een a", "Dier", "Feeks", "Monic Hendrickx", "Palindroom", "Indonesië"];
            white_cells = ["5 letters", "Automodel", "Begint met een s", "Meisjesnaam", "Mythologie", "NAVO-alfabet", "Stad"];
            colored_cells = ["Anna", "Bravo", "Carina", "Echo", "Eenhoorn", "Eos", "Furie", "Harpij", "Hydra", "India", "Juliett",
                "Ka", "Kenau", "Kreng", "Lima", "Mustang", "Nadine", "Nynke", "Petra", "Quebec", "Sawa’s", "Semarang", "Sierra",
                "Sijs", "Soenda", "Soerabaja", "Sofia", "Sonja", "Suus", "Toledo"];
            break;
        case "#18" :
            // NRC raatsel 2 mei 2020, week 18
            nrc_week = 18;
            nrc_date = new Date(Date.UTC(2020, 4, 2));
            nrc_href = "https://www.nrc.nl/nieuws/2020/05/02/raatsel-a3997534";
            edge_cells = ["Bevestigingsmiddel", "Politicus", "Zelfde begin- en eindletter", "Begint met een R", "Zeevaarder", "dubbele"];
            white_cells = ["Hoofdstad VS-staat", "In de bouw", "Jongensnaam", "Scheeps-onderdeel", "Schip", "Sterrenbeeld", "Vogel"];
            colored_cells = ["Anker", "Arend", "Axle", "Bismarck", "Bodem", "Columbus", "Duif", "Eenhoorn", "Hamer", "Hein", "Koekoek", "Kompas", "Koolmees", "Kraan", "Lier", "Maasdam", "Nagel", "Nelson", "Phoenix", "Pierre", "Rainbow Worrior", "Releigh", "Reiger", "Richmond", "Rotterdam", "Schroef", "Steven", "Tapbout", "Valk", "Winkelhaak"];
            break;
        case "#17" :
            // NRC raatsel 25 april 2020, week 17
            nrc_week = 17;
            nrc_date = new Date(Date.UTC(2020, 3, 25));
            nrc_href = "https://www.nrc.nl/nieuws/2020/04/25/raatsel-a3997534";
            edge_cells = ["Inspiratie voor van Gogh", "Meisjesnaam", "Schrijver", "Arnhem", "Wielersport", "Brussels metrostation"];
            white_cells = ["België", "Dit jaar geschrapt", "Floraal", "Frankrijk", "Met oo", "Religieus", "Voetbal"];
            colored_cells = ["Alex Pastoor", "Anderlecht", "Ardennen", "Bizet", "Bloemencorso Zundert", "Burgers Zoo", "Delacroix", "Doop", "Eddy Merckx", "Euro 2020", "F1 Zandvoort", "Fleur de lis", "Gelredome", "Gloria", "Guido Gezelle", "Hadewijch", "Iris", "Jaques Brel", "Louis Paul Boon", "Marcel van Roosmalen", "Matthäus-Passion", "Milet", "Monnikskap", "Parijs-Roubaix", "Ronde van Vlaanderen", "Rui Costa", "Theo Bos", "Tom Boonen", "Veronica", "Zonnebloem"];
            break;
        case "#16":
            // NRC raatsel 18 april 2020, week 16
            nrc_week = 16;
            nrc_date = new Date(Date.UTC(2020, 3, 18));
            nrc_href = "https://www.nrc.nl/nieuws/2020/04/18/raatsel-a3996850";
            edge_cells = ["Australië", "Naast elkaar", "Op de huid", "Begint met een S", "Romeinse oudheid", "Maakte beroemde reis"];
            white_cells = ["Als held vereerd", "Auto", "Dubbelop", "Duitsland", "Kleding", "Stad", "Televisie"];
            colored_cells = ["Aeneas", "Arminius", "Baden-Baden", "Barentsz", "Buurman en Buurman", "Cancan", "Columbus", "Dallas", "Darwin", "Duster", "Kiel", "Kielekiele", "Lederhose", "Lepeltje-lepeltje", "Lincoln", "Neighbours", "Octavia", "SamSam", "Smart", "Scorpio", "Ski-jack", "Skinny jeans", "Spartacus", "Sydney", "Tatort", "Taunus", "The Flying Doctors", "Tutu", "Washington", "Wetsuit"];
            break;
        case "#15":
            // NRC raatsel 11 april 2020, week 15
            nrc_week = 15;
            nrc_date = new Date(Date.UTC(2020, 3, 11));
            nrc_href = "https://www.nrc.nl/nieuws/2020/04/11/raatsel-a3995577";
            edge_cells = ["4 letters", "Deel van een vuurwapen", "Eerste of Tweede", "Eindigt op een I", "Lichaamsdeel", "Hugo"];
            white_cells = ["In een restaurant", "Minister", "Muziek", "Op het boerenerf", "Palindroom", "Ruimte", "Zanger"];
            colored_cells = ["Aardappelen", "Borst", "Bot", "Brood", "De Groot", "De Jonge", "Gang", "Haak", "Haan", "Kaak", "Kamer", "Klas", "Knol", "Kok", "Kroes", "Lel", "Lepel", "Levensnevel", "Long", "Lounge", "Magazijn", "Muzak", "Pink", "Pop", "Stal", "Stem", "Soul", "Trekker", "Viool", "Zalm"];
            break;
        case "#14":
            // NRC raatsel 4 april 2020, week 14
            nrc_week = 14;
            nrc_date = new Date(Date.UTC(2020, 4, 4));
            nrc_href = "https://www.nrc.nl/nieuws/2020/04/04/raatsel-a3995577";
            edge_cells = ["Op de kermis", "Jan Wolkers", "Monique van de Ven", "Meisjesnaam", "Zelfde begin- en eindletter", "Begint met een C"];
            white_cells = ["Drank", "Eindigt op een o", "Film", "Lekkernij", "Muzikaal", "Plant", "Tijdschrift"];
            colored_cells = ["Antonia", "Botsauto", "Brandende Liefde", "Candy", "Calypso", "Casino", "Cognac", "Cosmopolitan", "Curacau", "De aanslag", "Elle", "Fanfare", "Gesponnen suiker", "Gifsla", "Iris", "Isabelle", "KIJK", "Magnolia", "Mai Tai", "Margriet", "Mars", "Mojito", "Ouzo", "Pepermunt", "Rolling Stone", "Rolo", "Tango", "Turks fruit", "Viool", "Zuurstok"];
            break;
        case "#13":
            // NRC raatsel 28 maart 2020, week 13
            nrc_week = 13;
            nrc_date = new Date(Date.UTC(2020, 2, 28));
            nrc_href = "https://www.nrc.nl/nieuws/2020/03/28/raatsel-a3994896";
            edge_cells = ["Winkels", "Colomnist", "Vader en zoon", "Begin met een V", "Zes letters", "Begint met een S"];
            white_cells = ["Ajax", "Boeken", "Jan", "Presentator", "Scheepvaart", "Snelheidssport", "Tweeling"];
            colored_cells = ["Adriaan en Olivier", "Anker", "Barend", "Blind", "Blokker", "Bolt", "Bruna", "Coronel", "De Boer", "De Hartog", "Ekkel", "Kieft", "Kompas", "Kuitenbrouwer", "Merckx", "Mulder", "Salamander", "Schippers", "Selexyz", "Stekelenburg", "Steven", "Stuurboord", "Verstappen", "Versteegh", "Visser", "Vos", "Wolkers", "Wouters", "Yates", "Zeeman"];
            break;
    }
}