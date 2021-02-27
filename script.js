let addCount = document.querySelector('#addCount');
let lowerCount = document.querySelector('#lowerCount');
let counterValue = document.querySelector('#counterValue');

let counter = 0;

addCount.addEventListener
(
    "click" , ()=> 
    {
        counter++;
        counterValue.innerText = counter; 
        if (counterValue > 0) {
            document.getElementById('addCount').style.color = "green";
        } 
    }
);

lowerCount.addEventListener
(
    "click" , ()=>
    {
        counter--;
        counterValue.innerText = counter;  
        if (counterValue < 0) {
            document.getElementById('lowerCount').style.color = "reed";
        } 
    }
);

