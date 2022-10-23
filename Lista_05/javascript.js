
const textModal = document.getElementById("textarea-modal");
const text = document.getElementById("textarea");
const buttonTweetModal = document.querySelector('#botao-enviar-modal');
const buttonTweetHome = document.querySelector('#enviar');



let tamMax = 140;

textModal.addEventListener('keyup', ()=>{
    let divCont = document.getElementById("contador-modal");
    contador(divCont, tamMax, textModal);
    color(tamMax, textModal, divCont);
    botao(tamMax, textModal, buttonTweetModal);
    scrollHeight(textModal);
});


function contador (divCont, tamMax, textarg){
    if(textarg.value.length!=""){
        divCont.innerHTML = tamMax - textarg.value.length;
    }else{
        divCont.innerHTML = "";
    }
    
}
function color(tamMax, textarg, divCont){
    if((tamMax-textarg.value.length)<=40 && (tamMax-textarg.value.length)>0){
        divCont.style.color = `rgb(255, 200, 0)`;
    }else if((tamMax-textarg.value.length)<=0){
        divCont.style.color = `rgb(255, 0, 0)`;
    }else{
        divCont.style.color = `rgb(15, 20, 25)`;
    }
}
function botao(tamMax, textarg, buttonTweet){
    if(textarg.value=="" || (tamMax-textarg.value.length)<=0){
        buttonTweet.disabled=true;
    }else if(textarg.value.length>=1 && textarg.value.length<=140){
        buttonTweet.disabled=false;
    }
}

if(text!=null){
    text.addEventListener('keyup', ()=>{
        let divCont = document.getElementById("contador");
        contador(divCont, tamMax, text);
        color(tamMax, text, divCont);
        botao(tamMax, text, buttonTweetHome);
        scrollHeight(text);
    });
}