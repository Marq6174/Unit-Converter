
const lenConversion = document.getElementById("length-conversion");
const volConversion = document.getElementById("volume-conversion");
const massConversion = document.getElementById("mass-conversion");
const conversion = document.getElementById("convert");
let inputEl = document.getElementById("input-el")

conversion.addEventListener("click", function() {
    const meters = inputEl.value/3.281
    const gallons = inputEl.value/0.264172
    const kilos = inputEl.value/2.2046
    
    lenConversion.textContent = `${inputEl.value} Meters = ${inputEl.value * 3.281} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters`
    
    volConversion.textContent = `${inputEl.value} liters = ${inputEl.value * 0.264} gallons | ${inputEl.value} gallons = ${gallons.toFixed(3)} liters`
    
    massConversion.textContent = `${inputEl.value} kilograms = ${inputEl.value * 2.2046} pounds | ${inputEl.value} pounds = ${kilos.toFixed(3)} kilos`
})
