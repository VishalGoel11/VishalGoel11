const ex = document.getElementById('ex');
const ab = document.getElementById('ab');
 const pr = document.getElementById('pr');
 const icon = document.getElementById('line3');
 const cross = document.getElementById('cross');
 cross.style.display="none";
 let a=1;
 cross.addEventListener("click",()=>{
    if(a===0){
        icon.style.display="flex"
        cross.style.display="none"
        a=1;
    }
 })
 icon.addEventListener("click",()=>{
    if(a===1){
        icon.style.display="none"
        cross.style.display="flex"
        a=0;
    }
 })
//  class="flex flex-wrap md:justify-between"  id="ab" style="text-align: center;"
if(innerWidth<='700'){

pr.style.flexDirection="column";
ab.style.flexDirection="column";
ex.style.flexDirection="column";

}
window.onload = () => {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
};

function message(){
    alert("This part is under devlopment")
}