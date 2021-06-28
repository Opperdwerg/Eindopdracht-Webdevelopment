function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ":");
  return str.join(".");
}

class Timer {
    constructor () {
      this.isRunning = false;
      this.startTime = 0;
      this.overallTime = 0;
    }
  
    _getTimeElapsedSinceLastStart () {
      if (!this.startTime) {
        return 0;
      }
    
      return Date.now() - this.startTime;
    }
  
    start () {
      if (this.isRunning) {
        return console.error('Timer is already running');
      }
  
      this.isRunning = true;
  
      this.startTime = Date.now();
    }
  
    win () {
      if (!this.isRunning) {
        return console.error('Timer is already stopped');
      }
  

      this.isRunning = false;
      var nieuwetijd = this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();

      var newLi = document.createElement("LI")
      var formattijd = separator(nieuwetijd);

      if (formattijd < 1000){
        formattijd = "0:" + formattijd;
      }

      var stringformattijd = formattijd.toString();
      var textnode = document.createTextNode(stringformattijd);
      newLi.appendChild(textnode);
      var list = document.getElementById("highhighscore");
      list.insertBefore(newLi, list.childNodes[0]);
      alert("You win!");
    }
  
    reset () {
      this.overallTime = 0;
  
      if (this.isRunning) {
        this.startTime = Date.now();
        this.isRunning = false;
        return;
      }
  
      this.startTime = 0;
    }
  
    getTime () {
      if (!this.startTime) {
        return 0;
      }
  
      if (this.isRunning) {
        return this.overallTime + this._getTimeElapsedSinceLastStart();
      }
  
      return this.overallTime;
    }

    subtractTime () {
      if (this.isRunning = true) {
        this.overallTime = this.overallTime - 750;
      }
    }

  }

   var timer = new Timer();

  setInterval(() => {
    var timeInMilliSeconds = timer.getTime();
    var format = separator(timeInMilliSeconds);
    if (format == 0 && timer.isRunning == false){
      document.getElementById('timer').innerText = "00:000";
    }else{
        document.getElementById('timer').innerText = format;
      }
    
  })

function gameOver(){
  alert("Game Over!");
  timer.reset();
}

function veranderKleur(vakjenummer){
  if (vakjenummer ==1){
    document.getElementById("vakje1").className = "no_entry";
  }
  if (vakjenummer ==2){
    document.getElementById("vakje2").className = "no_entry";
  }
  if (vakjenummer ==3){
    document.getElementById("vakje3").className = "no_entry";
  }
  if (vakjenummer ==4){
    document.getElementById("vakje4").className = "no_entry";
  }
  if (vakjenummer ==5){
    document.getElementById("vakje5").className = "no_entry";
  }
  if (vakjenummer ==6){
    document.getElementById("vakje6").className = "no_entry";
  }
  if (vakjenummer ==7){
    document.getElementById("vakje7").className = "no_entry";
  }
  if (vakjenummer ==8){
    document.getElementById("vakje8").className = "no_entry";
  }
  if (vakjenummer ==9){
    document.getElementById("vakje9").className = "no_entry";
  }
  if (vakjenummer ==10){
    document.getElementById("vakje10").className = "no_entry";
  }
  if (vakjenummer ==11){
    document.getElementById("vakje11").className = "no_entry";
  }
  if (vakjenummer ==12){
    document.getElementById("vakje12").className = "no_entry";
  }
  if (vakjenummer ==13){
    document.getElementById("vakje13").className = "no_entry";
  }
  if (vakjenummer ==14){
    document.getElementById("vakje14").className = "no_entry";
  }
  if (vakjenummer ==15){
    document.getElementById("vakje15").className = "no_entry";
  }
  if (vakjenummer ==16){
    document.getElementById("vakje16").className = "no_entry";
  }
  if (vakjenummer ==17){
    document.getElementById("vakje17").className = "no_entry";
  }
}



function reload(){
  window.location = window.location;
}