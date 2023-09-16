const ex = document.getElementById('ex');
const ab = document.getElementById('ab');
 const pr = document.getElementById('pr');
 const html = document.getElementById('html');
 const js = document.getElementById('js');
 const java = document.getElementById('java');
//  class="flex flex-wrap md:justify-between"  id="ab" style="text-align: center;"
if(innerWidth<='700'){
console.log(innerWidth)
ex.style.display="block";
ex.style.margin="100px";
ab.style.display="block";
ab.style.margin="100px";
pr.style.display="block";
pr.style.margin="100px";

pr.style.textAlign="center";
ex.style.textAlign="center";
ex.style.textAlign="center";

js.style.display="block";
js.style.width="100%"
js.style.backgroundColor="rgb(19, 13, 193)"
js.style.borderRadius="20px"
js.style.marginBottom="10px"

java.style.display="block";
java.style.width="100%"
java.style.backgroundColor="rgb(29, 13, 193)"
java.style.borderRadius="20px"
js.style.marginBottom="10px"

html.style.display="block";
html.style.width="100%"
html.style.backgroundColor="rgb(19, 13, 193)"
html.style.borderRadius="20px"
js.style.marginBottom="10px"

}
window.onload = () => {
    const button = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
};