'use strict';
const email = document.querySelector('#email');
const submit = document.querySelector('#submit-btn');
const errorMSG = document.querySelector('#error-msg');

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(!email.value.includes('@')) {
        errorMSG.style.display="block";
        return;
    }else{
        errorMSG.style.display="none";
    }

    
})