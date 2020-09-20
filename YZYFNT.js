let text = "Donda waiting room"
let samohlasky = ('AEIOU' + 'aeiou').split("")
function yzyfnt(text){
    console.log(text.toUpperCase()
    .split('')
    .filter((charakter) => !samohlasky.includes(charakter))
    .join('')
    )
} 
    

yzyfnt(text)
console.log(samohlasky)
