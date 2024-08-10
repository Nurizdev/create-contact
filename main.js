const input=document.querySelector(".input");
const createButton=document.querySelector(".Create");
const readButton=document.querySelector(".read-contact");
const list=document.querySelector(".list");
const delBtn=document.querySelector(".delBtn")




createButton.addEventListener("click",() => {
    const inputValue = input.value;
    localStorage.setItem("todo",inputValue);
  
});''
 
readButton.addEventListener("click", () =>{
 
    list.style.display="block"
   
   
    if(input.value!=="" ){

    
     const block=document.createElement("li") ;
    block.classList.add("block");
    const contact=document.createElement("h1");
contact.classList.add("contact");
contact.innerHTML="Contact" ;
list.append(contact)
    const textBlock=document.createElement("span");
    textBlock.textContent=input.value ;
    block.append(textBlock)
    list.append(block);
    input.value="";
   
   
    console.log(input.value);

  //delete
    const delBtn=document.createElement("button");
     delBtn.classList.add("delBtn");
     delBtn.innerHTML="X"
    
   
     delBtn.addEventListener("click",() => {
    list.removeChild(block);
list.removeChild(contact)
list.style.display="none"

     });
     block.append(delBtn);
   
    
}});










// const input=document.querySelector(".input")
// const btn=document.querySelector(".add")
// const list=document.querySelector(".list")
// const delBtn=document.querySelector(".delBtn")
// const editBtn=document.querySelector(".editBtn")



// btn.addEventListener("click", () =>{
// if(input.value!==""){

//  const todo=document.createElement("li") ;
// todo.classList.add("block");
// const textTodo=document.createElement("span");
// textTodo.textContent=input.value;
// todo.append(textTodo)
// list.append(todo);
// input.value="";
// console.log(input.value);
// const delBtn=document.createElement("button");
//  delBtn.classList.add("delBtn");
//  delBtn.innerHTML="delete";

//  //delete
//  delBtn.addEventListener("click",() => {
// list.removeChild(todo);
//  });
 //  todo.append(delBtn);}})