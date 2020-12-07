
function rwd() {
    console.log("偵測到螢幕寬度正在改變");
    console.log(document.body.clientWidth);

    if (document.body.clientWidth < 980) {
        console.log("md size");
        document.getElementById("maintitle").style.fontSize = "25px";
        document.getElementById("c2p").style.fontSize = "22px";

        document.getElementById("c3pic").classList.remove("pic");
        document.getElementById("c3pic").classList.add("spic");

        document.getElementById("c3picfig").classList.remove("fig_pastor");
        document.getElementById("c3picfig").classList.add("sfig_pastor");

        document.getElementById("bible_part1").style.fontSize = "10px";
        document.getElementById("c4title").style.fontSize = "20px";
        document.getElementById("intro_p1").style.fontSize = "10px";
        document.getElementById("intro_p2").style.fontSize = "1px";
        document.getElementById("about_title").style.fontSize = "20px";

        document.getElementById("about_dd").classList.remove("ad");
        document.getElementById("about_dd").classList.add("nad");
    } else {
        console.log("lg size");
        document.getElementById("maintitle").style.fontSize = "40px";
        document.getElementById("c2p").style.fontSize = "30px";

        document.getElementById("c3pic").classList.add("pic");
        document.getElementById("c3pic").classList.remove("spic");

        document.getElementById("c3picfig").classList.add("fig_pastor");
        document.getElementById("c3picfig").classList.remove("sfig_pastor");

        document.getElementById("bible_part1").style.fontSize = "20px";
        document.getElementById("c4title").style.fontSize = "30px";

        document.getElementById("intro_p1").style.fontSize = "22px";
        document.getElementById("intro_p2").style.fontSize = "18px";

        document.getElementById("about_title").style.fontSize = "30px";

        document.getElementById("about_dd").classList.add("ad");
        document.getElementById("about_dd").classList.remove("nad");
    }
    if (document.body.clientWidth < 500) {
        document.getElementById("all").style.width = "95%";
        document.getElementById("maintitle").style.fontSize = "20px";
        document.getElementById("c2p").style.fontSize = "15px";
        document.getElementById("intro_p2").style.fontSize = "9px";
        document.getElementById("about_title").style.fontSize = "15px";
    }
}

window.addEventListener("resize", rwd);
window.addEventListener("load", rwd);