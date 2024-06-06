let input= document.querySelector('.input');
let container= document.querySelector('.container');



function newele(){
    let ele= document.createElement('div');
    ele.classList.add('element_class');
    ele.innerHTML=
    `
    <p class="content"></p>
    <div class="cross"><img id="wrong" src="wrong.png" alt="delete"></div>
    `
    return ele;

}






input.addEventListener("keypress", function(event) {
    

    if (event.key === "Enter") {
      event.preventDefault();
      console.log(input.value);
      let n_element = newele();
      n_element.children[0].innerHTML=input.value;
      container.appendChild(n_element);
      input.value="";
      n_element.children[1].addEventListener('click',function(e){
        console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.remove();

      });
      
      
    }

  });







