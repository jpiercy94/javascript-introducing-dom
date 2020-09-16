//console.info("Hello this is from a js file")
//console.dir(document)

document.getElementById("myHeading").innerHTML = "Jeremy's website"

document.querySelector("a").setAttribute("href","http://www.googe.co.uk")

document.querySelector("nav ul li").setAttribute("class", "currentPage")

document.getElementById("myTestEvent").addEventListener("click", function(){
    console.info("I was clicked - ouch")
})