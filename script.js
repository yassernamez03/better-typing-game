const texts = ['Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few. She did open find pain some out. If we landlord stanhill mr whatever pleasure supplied concerns so. Exquisite by it admitting cordially september newspaper an. Acceptance middletons am it favourable. It it oh happen lovers afraid.',
    'Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain.',
    'Am increasing at contrasted in favourable he considered astonished. As if made held in an shot. By it enough to valley desire do. Mrs chief great maids these which are ham match she. Abode to tried do thing maids. Doubtful disposed returned rejoiced to dashwood is so up.',
    'Also when you use plain Lorem ipsum text, your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing.',
    "It's better than Lorem ipsum because it can produce text in many languages and in particular: Chinese, Dutch, English, Finnish, French, German, Greek, Hebrew, Italian, Japanese, Latin, Polish, Portuguese, Russian, Serbian and Spanish.", 'hello'
];
const paragraph = document.querySelector("#text");
const refrech = document.querySelector("#refrech");
const textplace = document.querySelector('#textplace');
const timer = document.querySelector('#clock');
let time = ''
    //var for text
var i = 1
let txt = paragraph.textContent
    //genteration des paragraph par refrech
refrech.addEventListener('click', e => {
    i = Math.floor(Math.random() * 5)
    paragraph.innerHTML = texts[i];
    textplace.value = '';
    txt = paragraph.textContent
    reset()
    textplace.addEventListener('input', start, true)
});
//generation des paragraph par reload
window.addEventListener('load', e => {
    i = Math.floor(Math.random() * 5);
    paragraph.innerHTML = texts[5];
    txt = paragraph.textContent
    textplace.value = '';
    reset()
    textplace.addEventListener('input', start, true)
});
//autogenerating


// function to be executed when the chronometer stops
function AutoStop() {
    alert(`your time is ${time}`);
}
// the initial tenths-of-second, seconds, and minutes
let milsec = 0;
let seconds = 0;
let mints = 0;
let pr0 = '0';
let startcount = 0;

function chronometer(typecheck) {
    if (startcount == 1) {

        // set mileseconds
        milsec += 1;

        // set seconds
        if (milsec > 9) {
            milsec = 0;
            seconds += 1;
        }
        // set minutes
        if (seconds > 59) {
            seconds = 0;
            mints += 1;
        }
        if (seconds > 9) {
            pr0 = '';
        }
        // adds data in #showtm
        timer.innerHTML = '0' + mints + ` : ${pr0}` + seconds + ' : ' + milsec + '0';
        time = '0' + mints + ` : ${pr0}` + seconds + ' : ' + milsec + '0'

        //Typing conditiion
        if (typecheck) AutoStop();
        else setTimeout("chronometer()", 100);
    }
}

function start() {
    startcount = 1;
    chronometer();
} // starts the chronometer
function stop() { startcount = 0; } // stops the chronometer
function reset() {
    milsec = 0;
    seconds = 0;
    mints = 0;
    startcount = 0;
    timer.innerHTML = '0' + mints + ` : ${pr0}` + seconds + ' : ' + milsec + '0';
    console.log(`hell yeah you won your time is ${time}`);
} //reset
let win = ''
textplace.addEventListener('input', () => {
    if (textplace.value == txt.slice(0, textplace.value.length) && textplace.value.length == txt.slice(0, textplace.value.length).length) {
        textplace.style.borderColor = 'blue'
        paragraph.style.color = 'green'
        paragraph.style.outline = '1px black'
    } else {
        textplace.style.borderColor = 'red'
        paragraph.style.color = 'red'
        paragraph.style.outline = '1px black'

    }
    if (textplace.value == txt) {
        reset()
        textplace.removeEventListener('input', start, true)
        win = true
        paragraph.style.color = 'black'
    }
})









































































































































/*
let tt = txt[0]
let min = 0
let sec = 0
let milsec = 0
const time = ``
let typingcheck = false
let mistakes = false
let x = 1
refrech.addEventListener('click', e => {
    let i = Math.floor(Math.random() * 5)
    paragraph.innerHTML = texts[i]
    textplace.value = 'clear'
    txt = paragraph.textContent
    tt = txt[0]
    x = 1
})
window.addEventListener('load', e => {
    let i = Math.floor(Math.random() * 5)
    paragraph.innerHTML = texts[5]
    txt = paragraph.textContent
    tt = txt[0]
})
textplace.addEventListener('input', e => {
    typingcheck = true
    if (textplace.value == tt) {
        textplace.style.borderColor = 'green'
        textplace.style.color = 'darkgray'
        tt = tt + txt[x]
        x += 1
        mistakes = false


    } else if (textplace.value != tt) {
        textplace.style.borderColor = 'red'
        textplace.style.color = 'rgb(90, 22, 22)'
        mistakes = true
    }
})
if (textplace.value == txt) {
    textplace.style.borderColor = 'green'
    textplace.style.color = 'darkgray'
    mistakes = false


} else if (textplace.value != txt) {
    textplace.style.borderColor = 'red'
    textplace.style.color = 'rgb(90, 22, 22)'
    mistakes = true
}
if (textplace.value == txt && !(mistakes) && textplace.value.length == txt.length) {
    clearInterval(intermil)
    clearInterval(intersec)
    clearInterval(intermin)
    milsec = 0
    sec = 0
    min = 0
    alert(`your time is ${min} : ${sec} : ${milsec}`)
}
paragraph.addEventListener('change',e=>{
    clearInterval(intermil)
    clearInterval(intersec)
    clearInterval(intermin)
    milsec = 0
    sec = 0
    min = 0
    timer.innerHTML = ` 0${min} : 0${sec} : ${milsec}`
})
const intermil = setInterval(() => {
    milsec += 1
    timer.innerHTML = ` 0${min} : 0${sec} : ${milsec}`
    if (textplace.value == txt && !(mistakes)) {
        clearInterval(intermil)
        clearInterval(intersec)
        clearInterval(intermin)
        milsec = 0
        sec = 0
        min = 0
        timer.innerHTML = ` 0${min} : 0${sec} : ${milsec}`
        intermil()
        intersec()
        intermin()
    }
    if (milsec > 99) {
        milsec = 0
    }
    if (sec > 60) {
        sec = 0
    }
    if (min > 60) {
        min = 0
    }
    if (min > 9) {
        timer.innerHTML = `
                $ { min }: 0 $ { sec }: $ { milsec }
                `
    }
    if (sec > 9) {
        timer.innerHTML = `
                0 $ { min }: $ { sec }: $ { milsec }
                `
    }
    if (milsec > 99) {
        timer.innerHTML = `
                0 $ { min }: 0 $ { sec }: $ { milsec }
                `
    }
}, 10)
if (milsec > 99) {
    milsec = 0
}
const intersec = setInterval(() => {
    sec += 1
}, 1000);
const intermin = setInterval(() => {
    min += 1
}, 60000);*/