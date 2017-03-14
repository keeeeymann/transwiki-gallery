var arrayEN;  //File | Caption
var arrayMatch;
//1. Status: 1: Match, 2: Unmatch, 3: Re-match
//2. ZH if exist (same index as arrayEN)
var arrayNotMatchZH; //File | Caption

var unmatchCheckedEN;
var unmatchCheckedZH;

var arrayRename; //Old name to be renamed (same index as arrayEN)

function manualMatch() {
    var unmatchRadiobuttonsEN = document.getElementsByName("unmatch_radiobuttons_en");
    unmatchCheckedEN = -1;
    for (bt of unmatchRadiobuttonsEN) {
        if (bt.checked == true) {
            unmatchCheckedEN = bt.value;
            break;
        }
    }
    if (unmatchCheckedEN == -1) {
        alert("Please select an EN entry.");
        return;
    }

    var unmatchRadiobuttonsZH = document.getElementsByName("unmatch_radiobuttons_zh");
    unmatchCheckedZH = -1;
    for (bt of unmatchRadiobuttonsZH) {
        if (bt.checked == true) {
            unmatchCheckedZH = bt.value;
            break;
        }
    }
    if (unmatchCheckedZH == -1) {
        alert("Please select a ZH entry.");
        return;
    }

    arrayMatch[unmatchCheckedEN][0] = 3; //Status: re-match
    arrayMatch[unmatchCheckedEN][1] = arrayNotMatchZH[unmatchCheckedZH][1]; //assign translation

    if (arrayRename === undefined) arrayRename = new Array;
    arrayRename[unmatchCheckedEN] = arrayNotMatchZH[unmatchCheckedZH][0]; //Save renames
}

function galleryExport() {
    var out = document.getElementById("wikisrc_export");
    out.innerHTML = "";
    for (var i = 0, lenM = arrayMatch.length; i < lenM; i++) {
        if (arrayMatch[i][0] == 2) { //Unmatch: use arrayEN
            out.innerHTML += arrayEN[i][0] + "|" + arrayEN[i][1] + "\n";
        } else { //Match & Re-match: use selected
            out.innerHTML += arrayEN[i][0] + "|";
            for (bt of document.getElementsByName("caption_radio_" + i)) {
                if (bt.checked == true) {
                    if (bt.value == "en") out.innerHTML += arrayEN[i][1] + "\n";
                    else if (bt.value == "zh") out.innerHTML += arrayMatch[i][1] + "\n";
                }
            }
        }
    }
    if (arrayRename) {
        for (var i = 0, lenR = arrayRename.length; i < lenR; i++) {
            if (arrayRename[i]) {
                var newTr = document.createElement("tr");

                var newTd = document.createElement("td");
                var newA = document.createElement("a");
                newA.href = document.getElementById("text_wikilink").value + arrayRename[i]; //link to old file name
                newA.target = "_blank";
                newA.appendChild(document.createTextNode(arrayRename[i]));
                newTd.appendChild(newA);
                newTr.appendChild(newTd);

                newTd = document.createElement("td");
                newTd.appendChild(document.createTextNode(arrayEN[i][0])); //new file name
                newTr.appendChild(newTd);

                document.getElementById("rename_links").appendChild(newTr);
            }
        }
    }

}

function galGenReset() {
    unmatchCheckedEN = undefined;
    unmatchCheckedZH = undefined;
    arrayRename = undefined;
}