var a=document.querySelector(".click")
var b=document.querySelector(".side")
var c=document.querySelector(".X")
a.addEventListener("click",function()
{
    b.style.right="0%"
})
c.addEventListener("click",function()
{
    b.style.right="-50%"
})

var search=document.getElementById("search")
var container=document.getElementById("container")
var div=container.querySelectorAll("div")
var item=container.querySelectorAll(".item")

search.addEventListener("keyup",function()
{
    var entered = event.target.value.toUpperCase()
    for(count=0;count<div.length;count++)
    {
        if(item[count].textContent.toUpperCase().indexOf(entered)<0)
        {
            div[count].style.display="none"
        }
        else{
            div[count].style.display="flex"
        }
    }
})