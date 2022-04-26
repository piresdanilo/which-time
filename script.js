function load() {
var Message = window.document.getElementById('Message')
var img = window.document.querySelector('img#imagem')
var data = new Date()
var minutes = data.getMinutes()
var Hour = data.getHours()
//var Hour = 08
Message.innerHTML = `Now its ${Hour}h and ${minutes} minutes`
if (Hour >= 0 && Hour < 12){
    // Good morning
    img.src = 'manha.png'
    document.body.style.background = "#dda338"
} else if (Hour >=12 && Hour < 18){
    // Good afternoon
    img.src = 'tarde.png'
    document.body.style.background = "#306d97"
} else {
    // Good night
    img.src = 'noite.png'
    document.body.style.background = "#6f0641"
}
}