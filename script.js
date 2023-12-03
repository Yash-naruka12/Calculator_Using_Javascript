let input = document.querySelector("#input");
let buttons = document.querySelectorAll("button")



let inputdata = "";
let getallbuttons = Array.from(buttons);

getallbuttons.forEach(button =>{
    button.addEventListener("click" ,(events)=>{
        if(events.target.innerHTML == "="){
            inputdata = eval(inputdata);
            input.value = inputdata;
        }
        else if(events.target.innerHTML == "DEL"){
            inputdata = inputdata.substring(0,inputdata.length-1)
            input.value = inputdata
        }
        else if(events.target.innerHTML == "AC"){
            inputdata = "";
            input.value = inputdata;
        }
        else{
            inputdata+= events.target.innerHTML;
            input.value = inputdata
        }
    })
})