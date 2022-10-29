function copy() {
    var id = document.getElementById("total-played").textContent;
    var win = document.getElementById("total-wins").textContent;
    var per = document.getElementById("win-pct").textContent;
    var stre = document.getElementById("current-streak").textContent;

    var text = "STATISTICS \n Total: " + id + "\n Wins: " + win + "\n Win %: " + per + "\n Current Strea: " + stre;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        window.confirm("Copy success to clipboard!");
    }
}