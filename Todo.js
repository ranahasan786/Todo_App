
let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {

    if (inputs.value == "") {
        alert("Please Enter Task")
    } else {
        let newElem = document.createElement("ul");


        newElem.innerHTML = `
${inputs.value} 
<i class="far fa-edit edit"></i>
<i class="far fa-trash-alt delete"></i>`;

        text.appendChild(newElem); //! creat element

        inputs.value = "";  //! input none



        newElem.querySelector(".delete").addEventListener("click", remove);


        newElem.querySelector(".edit").addEventListener("click", edit);

        function remove() {
            newElem.remove();
        }

        function edit() {
            inputs.value = newElem.firstChild.textContent.trim(); // Set input to current task

        };
    }
}

