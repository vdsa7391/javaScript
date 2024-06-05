let panel= document.querySelector(".panel");

document.onkeydown= function(event){
    /*console.log(event);
    console.log(event.key);*/


    panel.innerHTML=
    `
    <div class="btn-container">
    <div class="container" >
        <p>event.key</p>
        <button  class="btns" >${event.key}</button>
    </div>
    <div class="container">
        <p>event.keycode</p>
        <button class="btns" >${event.keyCode}</button>
    </div>
    <div class="container">
        <p>event.code</p>
        <button class="btns" >${event.code}</button>
    </div>
    </div>

    
    `;

    

    
};