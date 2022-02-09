document.getElementById("btn").onclick = () => {
    window.scrollTo(0,0);
}

var container = document.getElementById("container");
var j = 0;
function loadText(numText = 21){
var i = 0;


while(i < numText)
{
    const text = document.createElement("p");
    text.innerText = `Employee No` + " - " +` ${j}`;
    container.append(text);
    i++;
    j++;
}
}

loadText();

window.addEventListener("scroll", () => {
if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)
{
    j = j + 21;
    loadText();
}
})
