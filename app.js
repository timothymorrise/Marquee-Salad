// JAVASCRIPT 

// working signal
console.log("live!")

// VAIRABLES FROM DOCUMENT
const testButton = document.getElementById("test-button")
const oldMarquee = document.getElementById("old-marquee")
const newMarquee = document.getElementById("new-marquee")
const form = document.getElementById("form")
const submit = document.getElementById("submit")
const letterZone = document.getElementById("letter-zone")

let letters = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0
}

submit.onclick = function(e) {
    e.preventDefault();
    let text1 = oldMarquee.value.toUpperCase().replace(/[^A-Z]/g,'');
    let text2 = newMarquee.value.toUpperCase().replace(/[^A-Z]/g,'');
    for (let i=0; i<text2.length; i++) {
        letters[text2[i]]++
    }
    for  (i=0; i<text1.length; i++) {
        letters[text1[i]]--
    }
    let insertTags = ""
    for (var key in letters) {
        if (letters[key]>0) {
            insertTags+= `<h1>${key} : ${String(letters[key])}</h1>`
        }
    }
    letterZone.innerHTML = insertTags
    oldMarquee.value = ""
    newMarquee.value = ""
}

testButton.onclick = function() {
    alert("test")
}