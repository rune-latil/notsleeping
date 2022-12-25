const main = document.querySelector("#main");
const talk = document.querySelector("#talk");
const result = document.querySelector("#result");
const endPoint = 16;

function textBox(talkText, tIdx) {
    var talkBox = document.querySelector(".talkBox");
    var talkLi = document.createElement('li');

    talkLi.classList.add('talkLi');
    talkBox.appendChild(talkLi);
    talkLi.innerHTML = talkText;

    talkLi.addEventListener("click", function () {
        var children = document.querySelectorAll('.talkLi');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        goNext(++tIdx);
    }, false);

}

function goResult() {
    talk.style.Webkitanimation = "fadeOut 1s";
    talk.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.Webkitanimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            talk.style.display = "none";
            result.style.display = "block";
        }, 600)
    });
}


function goNext(tIdx) {
    if (tIdx + 1 === endPoint) {
        goResult();
    }
    var img = document.querySelector(".imgBox");
    img.innerHTML = talkList[tIdx].i;

    for (let i in talkList[tIdx].t) {
        textBox(talkList[tIdx].t[i].text, tIdx);
    }

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
        let tIdx = 0;
        goNext(tIdx);
    });

}

