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
        changeColor();
    }
);

lowerCount.addEventListener
(
    "click" , ()=>
    {
        counter--;
        counterValue.innerText = counter;
        changeColor();
    }
);


changeColor = () =>
{
    if(counter > 0)
        {
            counterValue.style.color = "green";
        }
    
    else if(counter < 0)
        {
            counterValue.style.color = "red";
        }
        
    else
        {
            counterValue.style.color = "black";
        }
}