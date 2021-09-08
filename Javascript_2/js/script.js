function creatNote(){
    var title = prompt('entrer le titre ')
    var content = prompt('entrer le contrent ')
    var notes=document.getElementById('notes')

    var card = document.createElement('div') // creat a div//
    card.setAttribute('class','card')// choose and afect the css class//
    notes.appendChild(card) // affect to her parent element //
    
   var cardheader = document.createElement('div')
    cardheader.setAttribute('class','card-header')
    card.appendChild(cardheader)
    

    var titlecard = document.createElement('div')
    titlecard.setAttribute('class','title-card')
    cardheader.appendChild(titlecard)

    var span1=document.createElement('span')
    span1.innerHTML=title
    titlecard.appendChild(span1)


    var check=document.createElement('div')
    check.setAttribute('class','check')
    cardheader.appendChild(check)

    var img1=document.createElement('img')
    img1.setAttribute('src','./img/checked.svg')
    check.appendChild(img1)



    var textcard = document.createElement('div')
    textcard.setAttribute('class','text-card')
    var span2 =document.createElement('span')
    span2.innerHTML= content
    card.appendChild(textcard)
    textcard.appendChild(span2)


}








