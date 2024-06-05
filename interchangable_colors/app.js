const body = document.body;
const btns= document.querySelectorAll(".btn");

function changeBackGround(color){
    body.className="";
    switch(color){
        case "purple":
            body.classList.add('purple');
            break;

        case "red":
            body.classList.add('red');
            break;

        case "orange":
            body.classList.add('orange');
            break;

        case "green":
            body.classList.add('green');
            break;

        case "blue":
            body.classList.add('blue');
            break;

        default:break;

    };

    
}




btns.forEach((c) =>{
    c.addEventListener('click',()=>{
        let color= c.value;
       
        changeBackGround(color);
    });
});






