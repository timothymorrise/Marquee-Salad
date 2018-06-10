// JAVASCRIPT 

// working signal
console.log("live!")

// VAIRABLES FROM DOCUMENT
const testButton = document.getElementById("test-button")
const oldMarquee = document.getElementById("old-marquee")
const newMarquee = document.getElementById("new-marquee")
const form = document.getElementById("form")
const submit = document.getElementById("submit")

form.onsubmit = function(e) {
    e.preventDefault()
    console.log(oldMarquee.value)
    console.log(newMarquee.value)
}

testButton.onclick = function() {
    alert("is he fucking you barbara?")
}