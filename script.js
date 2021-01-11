var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var sauda = window.document.getElementById('sauda')
var data = new Date()
var hora = data.getHours()

function carregar() {
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora< 12){
        //BOM DIA!
        img.src= 'manha.png'
        document.body.style.background = '#e2c9f' 
        sauda.innerHTML = `<strong>Bom Dia!</strong>`
    } else if (hora >= 12 && hora <18){
        //BOA TARDE!
        img.src= 'tarde.jpg'
        document.body.style.background = '#b9846f'
        sauda.innerHTML = `<strong>Boa Tarde!</strong>`
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        sauda.innerHTML = `<strong>Boa Noite!</strong>`
    } 
}    
