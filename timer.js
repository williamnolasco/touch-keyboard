var myTimer;

   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 0;

     function myClock() {
       document.getElementById("demo").innerHTML = ++c;
       if (c == 1000) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }

   function stopTimer() {

   }
