const reaction = document.querySelectorAll('.reaction');
let feedback= "Satisfied";
const send_button= document.querySelector('button');
const panel= document.querySelector('.panel');
const item2= document.querySelector('.item2');

function removeActive(){
    for(let i=0; i<reaction.length;i++){
        reaction[i].classList.remove('active');
    }
}

panel.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.parentNode.classList.contains('reaction')){
        removeActive();
        e.target.parentNode.classList.add('active');
        feedback=e.target.parentNode.children[1].innerHTML;
    }
   }
);


send_button.addEventListener("click",()=>{
    panel.innerHTML=
    `
    <p class='heart'>💖</p>
    <strong>ThankYou!</strong>
    <br>
    <strong>Your feedback! : ${feedback}</strong>
    `;
});








