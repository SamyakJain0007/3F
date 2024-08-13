let Input=document.querySelector("#inp");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
        item.innerText=inp.value;
        let delbtn=document.createElement("button");
        delbtn.innerText="delete";
        delbtn.classList.add("delete");
        item.appendChild(delbtn);
        ul.appendChild(item);
        inp.value="";
    })

let delBtns=document.querySelectorAll("#delete");
for(dbutton of delBtns){
    dbutton.addEventListener("click",function(){
    let par=this.parentElement;
    par.remove();
    })
}