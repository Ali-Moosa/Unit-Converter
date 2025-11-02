/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const num = document.querySelector(".num")
const btn = document.querySelector(".btn")
const length = document.getElementById("length") 
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

btn.addEventListener("click",function(){
    
let x = num.value 
console.log(num.value)
let mTof = (x * 3.281).toFixed(3)
let fTom = (x / 3.281).toFixed(3)

let lTog = (x * 0.264).toFixed(3)
let gTol = (x / 0.264).toFixed(3)

let kTop = (x * 2.204).toFixed(3)
let pTok = (x / 2.204).toFixed(3)
    
    length.textContent =`${x} meters = ${mTof} feet | ${x} feet = ${fTom} meters`
    volume.textContent =`${x} liters = ${lTog} gallons | ${x} gallons = ${gTol} liters`
    mass.textContent =`${x} kilos = ${kTop} pounds | ${x} pounds = ${pTok} kilos`
})
