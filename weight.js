const newButton = document.createElement("button");
const clearButton = document.createElement("button");
newButton.setAttribute("class", "button");
clearButton.setAttribute("class", "button");

newButton.innerText = "Convert";
newButton.style.backgroundColor = "blue";
clearButton.innerText = "Clear";
clearButton.style.backgroundColor = "red";

newButton.addEventListener("click", get);

let box = document.querySelector(".outerBox");
box.append(newButton);

let kgInput = document.querySelector(".kg");
let pdInput = document.querySelector(".pd");
let ocInput = document.querySelector(".oc");
kgInput.value = 0;
pdInput.value = 0;
ocInput.value = 0;

function get(){
    if (kgInput.value == 0 && pdInput.value == 0 && ocInput.value == 0){
        alert("You must first enter any value!!!.");
    }
    else {
        if(kgInput.value > 0 ){
            pdInput.value = kgInput.value*2.20462;
            ocInput.value = kgInput.value*35.274;
        }
        else if (kgInput.value == 0 && pdInput.value > 0){
            kgInput.value = pdInput.value*0.453592;
            ocInput.value = pdInput.value*16;
        }
        else {
            kgInput.value = ocInput.value*0.0283495;
            pdInput.value = ocInput.value*0.0625;
        }
        box.append(clearButton);
        clearButton.addEventListener("click", () => {
            kgInput.value = 0;
            pdInput.value = 0;
            ocInput.value = 0;
            clearButton.remove();
        });
    }
}
