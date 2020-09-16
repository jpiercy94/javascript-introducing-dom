//IFEE
(function(){
    // code
    var pricePounds;
    var exchangeRate = 0.87;
    var priceEuros = 0;

    var convertForm = document.getElementById("myForm");
    var msg = document.getElementById("msg");

    convertForm.addEventListener("submit", function(ev)
    {
        ev.preventDefault();
        console.dir(ev);
        pricePounds = parseFloat(document.getElementById("pounds").value);
        console.info(pricePounds);
        if (isNaN(pricePounds))
        {
            msg.innerHTML = "Please use numbers";
            msg.setAttribute("class","error")
        }
        else
        {
            msg.removeAttribute("class")
            priceEuros = (pricePounds * exchangeRate).toFixed(2);  // round to 2 dp
            msg.innerHTML = "&pound" + pricePounds +  " is equal to "+ "&euro" + priceEuros;
            // or = `&euro; ${priceEuros}`
        }
    })

    document.getElementById("pounds").addEventListener("focus", (ev) => {        
        ev.target.value = "";
        // Can use 'this' but not when using arrow function => as context differs.
    })

})();
