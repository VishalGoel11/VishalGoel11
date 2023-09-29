const ex = document.getElementById('ex');
const ab = document.getElementById('ab');
 const pr = document.getElementById('pr');
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