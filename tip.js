   function tip() {
       let amt = document.getElementById("amount").value;
       let tipAmount = document.getElementById("tip").value;
       let total = document.getElementById("total")
       let t = amt - tipAmount;
       document.getElementById("total").value = t;
   }