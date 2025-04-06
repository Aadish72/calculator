let a = document.getElementById("21");

function add(x) {
     // Make sure this is an <input> element
    a.value += x; // Append the clicked button's text to the input field
}

a.addEventListener("change",function(e){
    console.log(e.target.value);
    
})

let b = document.getElementById("2");
b.addEventListener("click", function () {
    add(b.innerText);
});

let c=document.getElementById("3")
c.addEventListener("click",function(){
   add(c.innerText)
})
let d=document.getElementById("18")
d.addEventListener("click",function(){
    add(d.innerText)
})

let equal=document.getElementById("20");
equal.addEventListener("click",function(e){
    console.log(a.value);
    a.value=eval(a.value);
})

let input=document.getElementById("21")
input.addEventListener("click",function inp(){
   add(input.innerText)
})

let one=document.getElementById("4")
one.addEventListener("click",function(){
   add(one.innerText)
})
let eight=document.getElementById("7")
eight.addEventListener("click",function(){
   add(eight.innerText)
})

let five=document.getElementById("8")
five.addEventListener("click",function(){
   add(five.innerText)
})
let two=document.getElementById("9")
two.addEventListener("click",function(){
   add(two.innerText)
})
let zero=document.getElementById("10")
zero.addEventListener("click",function(){
   add(zero.innerText)
})
let nine=document.getElementById("12")
nine.addEventListener("click",function(){
   add(nine.innerText)
})

let six=document.getElementById("13")
six.addEventListener("click",function(){
   add(six.innerText)
})
let minus=document.getElementById("19")
minus.addEventListener("click",function(){
    add(minus.innerText)
})
let multiply=document.getElementById("17")
multiply.addEventListener("click",function(){
    add(multiply.innerText)
})
let divide=document.getElementById("16")
divide.addEventListener("click",function(){
    add(divide.innerText)
})
let modulus=document.getElementById("11")
modulus.addEventListener("click",function(){
    add(modulus.innerText)
})
let decimal=document.getElementById("15")
decimal.addEventListener("click",function(){
    add(decimal.innerText)
})
let three=document.getElementById("14")
three.addEventListener("click",function(){
    add(three.innerText)
})
let plusminus=document.getElementById("6")
plusminus.addEventListener("click",function(){
    add(plusminus.innerText)
})
let ac=document.getElementById("1")
ac.addEventListener("click",function(){
    a.value="";
})
let backspace=document.getElementById("5");
function back(){
backspace=input.value.slice(0,-1)
}

backspace.addEventListener("click")
{
    back()
}