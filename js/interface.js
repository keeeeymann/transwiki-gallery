function buttonCompare() {
    globalReset();
    galleryParse();
    galleryCompare();
    clearScreen();
    showMatch();
    showUnmatchEN();
    showUnmatchZH();
    document.getElementById("compare_section").style.display = "";
    document.getElementById("submit_export").style.display = "";
}

function buttonRematch() {
    manualMatch();
    showRematch();
    showRename();
    document.getElementById("rematch_section").style.display = "";
}

function buttonExport() {
    galleryExport();
    document.getElementById("src_output").style.display = "";
}

function globalReset() {
    galGenReset();
}