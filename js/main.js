const ps5img = document.getElementById("colors");
const cost = document.getElementById("cost")
const whiteps5 = document.getElementById("white");
const blackps5 = document.getElementById("black");

whiteps5.addEventListener("click", function(){
    ps5img.src = "./../img/92e6aa40dbbc114d0ea7f56403dae94503f885f1_1609679750.jpg";
    cost.innerText = "499.99$";
});
blackps5.addEventListener("click", function(){
    ps5img.src = "./../img/PS5-Black.jpg";
    cost.innerText = "599.99$"
});
