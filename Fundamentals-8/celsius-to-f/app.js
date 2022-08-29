// 8 kyu
// Grasshopper - Debug

// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function convertToCelsius(temperature) {
  let celsius = (temperature - 32) * (5 / 9)
  return celsius
}

function weatherInfo(temp) {
  let c = convertToCelsius(temp)
  return `${c} ${
    c > 0 ? 'is above freezing temperature' : 'is freezing temperature'
  }`
}

// shorter solution

const weatherInfo = t =>
  `${(t = (t - 32) * (5 / 9))} is ${t > 0 ? 'above ' : ''}freezing temperature`

// Solution using  IIFE (Immediately Invoked Function Expression) 

const weatherInfo = temp =>
  (val => `${val} is ${val > 0 ? `above ` : ``}freezing temperature`)(
    (temp - 32) * (5 / 9)
  )