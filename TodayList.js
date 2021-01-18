let list=document.getElementById("list")
let input=document.getElementById("input")
let i=1;
let minTextLength=3;
let dateObj = new Date();
let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
let date = ('0' + dateObj.getDate()).slice(-2);
let year = dateObj.getFullYear();
let shortDate = year + '/' + month + '/' + date;

function textFilter(x){
    if(x){

        if(x.length >= minTextLength){

            return x;
        }else{
            alert("MIN text length is 3.");
            return false;
        }
    }else{
        alert("Input text empty.")
        return false;
        }
    }
function addList(){
    //get
    let inputText = textFilter(input.value);
    
    //set
    if(inputText){
    showList(inputText);
    input.value = "";
   }
}
function showList(text){
list.innerHTML += `
  <li class="list-item" id="list${i}">
    <span id="listText${i}">${text}</span><br>
    <p class="date" id="date${i}"><small>${shortDate}</small></p>
    <button class="btn del-btn" onclick='delList(${i})' ><i class="far fa-trash-alt"></i></button>
    <button class="btn edit-btn" onclick='editList(${i})'><i class="fas fa-edit"></i></button>           
    </li>
  `;
  i++;
}

function delList(listId){
  let current=document.getElementById(`list${listId}`);
  let curText=document.getElementById(`listText${listId}`).innerHTML;
  let delConfirm=confirm(`Are you sure to delete list "${curText}".`);
  
  if(delConfirm){
    list.removeChild(current);
  }else{
      console.log(`delete cancel.`);
  }
}

function editList(listId){
let current = document.getElementById(`listText${listId}`);
let newText = prompt("Say Something",current.innerHTML);

if(textFilter(newText)){
    current.innerHTML = newText;
}

} 