console.log("hi")
//DONE input field with id text
//DONEevent listener key up on input field.
//DONEput value from input field in BOTH boxes. 
//DONEtwo article elements with ids thing-one thing-two
//create flexbox around them. 
//change display to row.
//each should take up 50% of browswer.
//boxes should have different border colors.

const inputField = document.querySelector("#text")
const firstBox = document.querySelector("#thing-one")
const secondBox = document.querySelector("#thing-two")

inputField.addEventListener("keyup", () =>{
    firstBox.innerHTML = event.target.value
    secondBox.innerHTML = event.target.value
})

