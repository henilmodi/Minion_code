var btntranslate =document.querySelector("#btntranslate");
var txtinput= document.querySelector("#txtinput");
console.log(txtinput);
var outputDiv= document.querySelector("#output");

//outputDiv.innerText= "Shyamal Prajapati"
// console.log(outputDiv);
// function clickHandler() {
//     console.log("clicked button!");
//     console.log("input",txtinput.value);   
// };

function ClickHandler() {
    outputDiv.innerText="Translated:" + txtinput.value;
};
btntranslate.addEventListener("click",clickHandler)
  

    // var username= prompt("Give me your username")

// //processing
// var welcome="Welcome\n" + username;
// alert("This is working " + welcome);
