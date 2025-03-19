
let inputToDo = document.getElementById("inputToDo");
let convertButton = document.getElementById("jsonbtn");
let jsonText = document.getElementById("jsontext")

// let storeList = []



let count = 0;


convertButton.addEventListener("click", function(){
     
    //  storeList.push(inputToDo.value);

     localStorage.setItem(`inputList${count}`,inputToDo.value);

     console.log(localStorage.getItem(localStorage.key(0)));
     console.log(localStorage.length);
     count++
    
})


