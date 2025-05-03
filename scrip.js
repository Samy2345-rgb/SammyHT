const yesbtn = document.querySelector("#yesbtn");

yesbtn.addEventListener("click",function () {
    alert("Sabia que ibas a decir que si Te amo")
});

const nobtn = document.querySelector("#nobtn");

nobtn.addEventListener("monsover",function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()+100);
    nobtn.style.setProperty("top",randomY+"%");
    nobtn.style.setProperty("left",randomX+"%");
    nobtn.style.setProperty("transform","tramslate(-${randomX}%,-${randomY}%)");
});