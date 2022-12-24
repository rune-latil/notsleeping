const main = document.querySelector("#main");
const talk = document.querySelector("#talk");

function goNext() {
    var img = document.querySelector(".imgBox");
    var tBox = document.querySelector(".talkBox");

    img.innerHTML = talkList[0].i;
}

function start() {
    main.style.Webkitanimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        talk.style.Webkitanimation = "fadeIn 1s";
        talk.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            talk.style.display = "block";
        }, 600)
        goNext();
    });

}
