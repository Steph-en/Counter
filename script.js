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

        if(counter > 0)
        {
            counterValue.style.color = "green";
        }
        
        else if(counter == 0)
        {
            counterValue.style.color = "black";
        }
    }
);

lowerCount.addEventListener
(
    "click" , ()=>
    {
        counter--;
        counterValue.innerText = counter; 

        if(counter < 0)
        {
            counterValue.style.color = "red";
        }
        
        else if(counter == 0)
        {
            counterValue.style.color = "black";
        }
    }
);

