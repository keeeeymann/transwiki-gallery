var arrayEN;  //File | Caption
var arrayMatch;
//1. Status: 1: Match, 2: Unmatch, 3: Re-match
//2. ZH if exist (same index as arrayEN)
var arrayNotMatchZH; //File | Caption

function showMatch() {
    for (var i = 0, lenM = arrayMatch.length; i < lenM; i++) {
        if (arrayMatch[i][0] !== 1) continue; //Check status flag
        //Adding a new tablerow tr
        var newTr = document.createElement("tr");
        newTr.className = "entry3";

        //Adding a td containing filename
        var newTd = document.createElement("td"); //td <- filename
        newTd.className = "item_filename";
        newTd.appendChild(document.createTextNode(arrayEN[i][0]));

        //Combine td into tr
        newTr.appendChild(newTd);

        //===Adding EN Caption Radiobutton===
        var newRadiobutton = document.createElement("input");
        newRadiobutton.type = "radio";
        newRadiobutton.checked = false;
        newRadiobutton.name = "caption_radio_" + i;
        newRadiobutton.value = "en";

        var newLabel = document.createElement("label");
        newLabel.appendChild(newRadiobutton);
        newLabel.appendChild(document.createTextNode(arrayEN[i][1]));
        var newTd = document.createElement("td"); //td <- radio label en
        newTd.className = "item3";
        newTd.appendChild(newLabel);

        newTr.appendChild(newTd);

        //===Adding ZH Caption Radiobutton===
        var newRadiobutton = document.createElement("input");
        newRadiobutton.type = "radio";
        newRadiobutton.checked = true;
        newRadiobutton.name = "caption_radio_" + i;
        newRadiobutton.value = "zh";

        var newLabel = document.createElement("label");
        newLabel.appendChild(newRadiobutton);
        newLabel.appendChild(document.createTextNode(arrayMatch[i][1]));
        var newTd = document.createElement("td"); //td <- radio label zh
        newTd.className = "item3";
        newTd.appendChild(newLabel);

        newTr.appendChild(newTd);

        document.getElementById("match_entries").appendChild(newTr);
    }
}

function showUnmatchEN() {
    for (var i = 0, lenM = arrayMatch.length; i < lenM; i++) {
        if (arrayMatch[i][0] !== 2) continue; //status flag
        //Adding a new tablerow tr
        var newTr = document.createElement("tr");
        newTr.className = "entry2";

        var newRadiobutton = document.createElement("input");
        newRadiobutton.type = "radio";
        newRadiobutton.checked = false;
        newRadiobutton.name = "unmatch_radiobuttons_en";
        newRadiobutton.value = i;

        var newLabel = document.createElement("label");
        newLabel.appendChild(newRadiobutton);
        newLabel.appendChild(document.createTextNode(arrayEN[i][0]));

        //Creating a tablecolumn
        var newTd = document.createElement("td"); //td <- filename
        newTd.className = "item_filename";
        newTd.appendChild(newLabel);
        newTr.appendChild(newTd);

        newTd = document.createElement("td"); //td <- caption
        newTd.className = "item2";
        newTd.appendChild(document.createTextNode(arrayEN[i][1]));
        newTr.appendChild(newTd);

        newTr.id = "unmatch_entry_en_" + i;
        document.getElementById("unmatch_entries_en").appendChild(newTr);
    }
}

function showUnmatchZH() {
    for (var i = 0, lenUZ = arrayNotMatchZH.length; i < lenUZ; i++) {
        //Adding a new tablerow tr
        var newTr = document.createElement("tr");
        newTr.className = "entry2";

        var newRadiobutton = document.createElement("input");
        newRadiobutton.type = "radio";
        newRadiobutton.checked = false;
        newRadiobutton.name = "unmatch_radiobuttons_zh";
        newRadiobutton.value = i;

        var newLabel = document.createElement("label");
        newLabel.appendChild(newRadiobutton);
        newLabel.appendChild(document.createTextNode(arrayNotMatchZH[i][0]));

        //Creating a tablerow
        var newTd = document.createElement("td"); //td <- filename
        newTd.className = "item_filename";
        newTd.appendChild(newLabel);
        newTr.appendChild(newTd);

        newTd = document.createElement("td"); //td <- caption
        newTd.className = "item2";
        newTd.appendChild(document.createTextNode(arrayNotMatchZH[i][1]));
        newTr.appendChild(newTd);

        newTr.id = "unmatch_entry_zh_" + i;
        document.getElementById("unmatch_entries_zh").appendChild(newTr);
    }
}

var unmatchCheckedEN;
var unmatchCheckedZH;

function showRematch() {
    //Adding a new tablerow tr
    var newTr = document.createElement("tr");
    newTr.className = "entry3";

    //Adding a td 
    var newTd = document.createElement("td"); //td <- filename
    newTd.className = "item_filename";
    newTd.appendChild(document.createTextNode(arrayEN[unmatchCheckedEN][0]));

    //Combine td into tr
    newTr.appendChild(newTd);

    //===Adding EN Caption Radiobutton===
    var newRadiobutton = document.createElement("input");
    newRadiobutton.type = "radio";
    newRadiobutton.checked = false;
    newRadiobutton.name = "caption_radio_" + unmatchCheckedEN;
    newRadiobutton.value = "en";

    var newLabel = document.createElement("label");
    newLabel.appendChild(newRadiobutton);
    newLabel.appendChild(document.createTextNode(arrayEN[unmatchCheckedEN][1]));
    var newTd = document.createElement("td"); //td <- radio label en
    newTd.className = "item3";
    newTd.appendChild(newLabel);

    newTr.appendChild(newTd);

    //===Adding ZH Caption Radiobutton===
    var newRadiobutton = document.createElement("input");
    newRadiobutton.type = "radio";
    newRadiobutton.checked = true;
    newRadiobutton.name = "caption_radio_" + unmatchCheckedEN;
    newRadiobutton.value = "zh";

    var newLabel = document.createElement("label");
    newLabel.appendChild(newRadiobutton);
    newLabel.appendChild(document.createTextNode(arrayMatch[unmatchCheckedEN][1]));
    var newTd = document.createElement("td"); //td <- radio label zh
    newTd.className = "item3";
    newTd.appendChild(newLabel);

    newTr.appendChild(newTd);

    //show new tr
    document.getElementById("rematch_entries").appendChild(newTr);

    //delete old entries
    var node;
    node = document.getElementById("unmatch_entry_en_" + unmatchCheckedEN);
    node.parentNode.removeChild(node);
    node = document.getElementById("unmatch_entry_zh_" + unmatchCheckedZH);
    node.parentNode.removeChild(node);
}


function showRename() {
    //Adding a new tablerow tr
    var newTr = document.createElement("tr");
    newTr.className = "entry2";

    var newTd = document.createElement("td"); //td <- filename
    newTd.className = "item_filename";
    newTd.appendChild(document.createTextNode(arrayNotMatchZH[unmatchCheckedZH][0]));

    //Combine td into tr
    newTr.appendChild(newTd);

    newTd = document.createElement("td"); //td <- new filename
    newTd.className = "item_filename";
    newTd.appendChild(document.createTextNode(arrayEN[unmatchCheckedEN][0]));

    newTr.appendChild(newTd);

    document.getElementById("rename_entries").appendChild(newTr);
}

function clearScreen() {
    document.getElementById("match_entries").innerHTML = "";
    document.getElementById("unmatch_entries_en").innerHTML = "";
    document.getElementById("unmatch_entries_zh").innerHTML = "";
    document.getElementById("rematch_entries").innerHTML = "";
    document.getElementById("rename_entries").innerHTML = "";
    document.getElementById("wikisrc_export").innerHTML = "";
    document.getElementById("rename_links").innerHTML = "";

    document.getElementById("compare_section").style.display = "none";
    document.getElementById("rematch_section").style.display = "none";
    document.getElementById("submit_export").style.display = "none";
    document.getElementById("src_output").style.display = "none";
}