function replace() {
    document.getElementById("ml").innerHTML = "<a onclick=\"showMail()\">cliquer pour afficher</a>";
}

function showMail() {
    document.getElementById("ml").innerHTML = "<a href=\"mailto:benjamin.sientzoff@yahoo.fr\" >benjamin.sientzoff@yahoo.fr</a>";
}
