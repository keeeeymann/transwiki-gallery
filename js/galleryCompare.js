var galTextareaEN = document.getElementById("wikisrc_en");
var galTextareaZH = document.getElementById("wikisrc_zh");

var arrayEN, arrayZH;  //File | Caption
var arrayMatch;
//1. Status: 1: Match, 2: Unmatch, 3: Re-match
//2. ZH if exist (same index as arrayEN)
var arrayNotMatchZH; //File | Caption

function galleryParse() {
    var linesEN = String(galTextareaEN.value).split("\n");
    var linesZH = String(galTextareaZH.value).split("\n");

    arrayEN = new Array; arrayZH = new Array;

    for (var i = 0, len = linesEN.length; i < len; i++) {
        var set = galleryFileNameProcess(linesEN[i]);
        if (set) {
            arrayEN.push(set);
        }
    }

    for (var i = 0, len = linesZH.length; i < len; i++) {
        var set = galleryFileNameProcess(linesZH[i]);
        if (set) {
            arrayZH.push(set);
        }
    }
}

function galleryCompare() {
    arrayMatch = new Array;
    arrayNotMatchZH = arrayZH; //filter ZH entries by deleting matching ones
    var matched;
    for (var i = 0, lenE = arrayEN.length; i < lenE; i++) {
        matched = false;
        for (var j = 0, lenZ = arrayNotMatchZH.length; j < lenZ; j++) { //search for entry matching file name in NotMatch list
            if (arrayEN[i][0] == arrayZH[j][0]) {
                arrayMatch.push(Array(1, arrayNotMatchZH[j][1]));
                arrayNotMatchZH.splice(j, 1); //delete the matching entry
                matched = true;
                break;
            }
        }
        if (!matched) { //if none of these match
            arrayMatch.push(Array(2, 0));
        }
    }
}

function galleryFileNameProcess(filestr) {
    var set = filestr.replace(/_/g, " ").splitFirst("|");
    if (set.length == 2 && !set[0].isEmpty() && !set[1].isEmpty()) {
        set[0] = set[0].trim();
        set[1] = set[1].trim();
        return set;
    } else return null;
}

String.prototype.isEmpty = function () {
    if (this.match(/\S/)) return false;
    else return true;
}

String.prototype.splitFirst = function (str) {
    var n = this.indexOf(str);
    if (n == -1) return new Array;
    else {
        var result = new Array;
        result[0] = this.substring(0, n + 1 - 1); //neglect split sign
        result[1] = this.substring(n + 1);
        return result;
    }
}