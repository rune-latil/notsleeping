const main = document.querySelector("#main");
const talk = document.querySelector("#talk");

function goNext() {
    var img = document.querySelector(".imgBox");
    var name = document.querySelector(".name");
    var talkText = document.querySelector(".talkText");

    img.innerHTML = talkList[0].i;
    name.innerHTML = talkList[0].t[0].name;
    talkText.innerHTML = talkList[0].t[1].talk;

}

function start() {
    main.style.Webkitanimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        talk.style.Webkitanimation = "fadeIn 1s";
        talk.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            talk.style.display = "flex";
        }, 600)
        goNext();
    });

}

