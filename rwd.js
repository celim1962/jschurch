
function rwd() {
    console.log("偵測到螢幕寬度正在改變");
    console.log(document.body.clientWidth);
    if (document.body.clientWidth < 980) {
        console.log("md size");
        document.getElementById("maintitle").style.fontSize = "30px";
        document.getElementById("c2p").style.fontSize = "22px";

        document.getElementById("c3pic").classList.remove("pic");
        document.getElementById("c3pic").classList.add("spic");

        document.getElementById("c3picfig").classList.remove("fig_pastor");
        document.getElementById("c3picfig").classList.add("sfig_pastor");

        document.getElementById("bible_part1").style.fontSize = "10px";
    } else {
        console.log("lg size");
        document.getElementById("maintitle").style.fontSize = "40px";
        document.getElementById("c2p").style.fontSize = "30px";

        document.getElementById("c3pic").classList.add("pic");
        document.getElementById("c3pic").classList.remove("spic");

        document.getElementById("c3picfig").classList.add("fig_pastor");
        document.getElementById("c3picfig").classList.remove("sfig_pastor");

        document.getElementById("bible_part1").style.fontSize = "20px";
    }
}

window.addEventListener("resize", rwd);
window.addEventListener("load", rwd);