var allKeys = document.querySelectorAll(".key");
var completeText = "";
var charTemp = "";
var timer = 0;

function getKey(val) {
  return function() {
    // console.log("entre a :" + val);
    startTimer();
    charTemp = allKeys[val].getElementsByTagName('p')[0].innerHTML;
    // console.log(charTemp);
    // document.getElementById("word").value = document.querySelector(".key").innerHTML;
  };
}

function getOutput(val) {
  return function() {
    // console.log("sali de :" + val);
    var timerTemp = timer;
    stopTimer();

    console.log(timerTemp);
    if (timerTemp > 50) {
      completeText = completeText + charTemp;
      console.log("complete: " + completeText);
      document.getElementById("word").value = completeText;
    }



  };
}


for (var i = 0; i < allKeys.length; i++) {
    allKeys[i].addEventListener('mouseover', getKey(i));
    allKeys[i].addEventListener('mouseout', getOutput(i));
}

function startTimer() {
  myTimer = setInterval(myClock, 1);

  function myClock() {
    ++timer;
    // document.getElementById("word").value = timer;
  }
}

function stopTimer() {
  clearInterval(myTimer);
  timer = 0;
}






// document.querySelectorAll(".key").addEventListener("click", function(){
//     document.getElementById("word").value = document.querySelector(".key").innerHTML;
// });
