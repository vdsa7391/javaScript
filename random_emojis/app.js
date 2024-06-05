const x= document.querySelector(".emoji");

const emojis=[
    "😊",
    "😘",
    "😒",
    "😁",
    "😍",
    "🤣",
    "😎",
    "😜",
];


x.addEventListener('mouseover', ()=>{
    x.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
});