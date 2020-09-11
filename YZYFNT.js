let text = "Donda waiting room"
let samohlasky = ('AEIOU' + 'aeiou').split("")
let yzyfnt = text
    .toUpperCase()
    .split('')
    .filter((charakter) => !samohlasky.includes(charakter))
    .join('')


console.log(yzyfnt)
console.log(samohlasky)
