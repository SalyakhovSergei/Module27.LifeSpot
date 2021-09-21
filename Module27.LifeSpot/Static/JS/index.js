﻿let session = new Map();

function handleSession(checkAgeFunc, logger)
{
    session.set("startDate", new Date().toLocaleString())
   
    session.set("userAgent", window.navigator.userAgent)
    
    if(window.sessionStorage.getItem("startDate") == null){
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }
    if(window.sessionStorage.getItem("userAgent") == null){
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }
    if(window.sessionStorage.getItem("userAge") == null){
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)
        checkAgeFunc(true)
    }else{
        checkAgeFunc(false)
    }
    
    logger()
}


let checkAgeFunc = function (newVisit){
    if(window.sessionStorage.getItem("userAge")>=18){
        if(newVisit){
            alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString());
        }
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
                }
}

let logger = function (){
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate") )
    console.log('Данные клиента: ' + window.sessionStorage.getItem("userAgent") )
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
}

function filterContent()
{
    let elements = document.getElementsByClassName('video-container');
    
    for (let i = 0; i <= elements.length; i++ )
    {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;
        
        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase()))
        {
            elements[i].style.display = 'none';
        } else 
        {
            elements[i].style.display = 'inline-block';
        }
    }
}

