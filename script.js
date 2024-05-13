let inputEle = document.querySelector(".input-ele");
let notifyBtn = document.querySelector(".btn");
let errorMsg = document.querySelector(".error");
notifyBtn.addEventListener("click",getNotify);
function getNotify(e){
    e.preventDefault();
    let inputVal = inputEle.value;
    if (inputEle.value === ""){
       errorMsg.innerHTML = "Provide email address";
       inputEle.classList.add("error-input");
       inputEle.classList.remove("input-ele");
       errorMsg.innerHTML = "";
    }
    else if (!isEmail(inputVal)){
       errorMsg.innerHTML = "Provide correct email address";
       inputEle.classList.add("error-input");
       inputEle.classList.remove("input-ele");
       errorMsg.innerHTML = "";
    }
    else{
        errorMsg.innerHTML = "";
        inputEle.classList.remove("error-input");
        inputEle.classList.add("input-ele");
    }
}


function isEmail(inputVal){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(inputVal);
}