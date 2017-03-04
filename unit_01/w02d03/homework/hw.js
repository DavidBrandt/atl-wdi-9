// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    Stopwatch.millisecs += 10;
    ViewEngine.updateTimeDisplay();
    if (Stopwatch.millisecs === 1000) {
      Stopwatch.millisecs = 0;
      Stopwatch.secs += 1;
    }
    if (Stopwatch.secs === 60) {
      Stopwatch.secs = 0;
      Stopwatch.mins += 1;
    }
//    console.log('10 millisecs added');
  },
  reset: function(){
    // Your Code Here
    Stopwatch.mins = 0;
    Stopwatch.secs = 0;
    Stopwatch.millisecs = 0;
    ViewEngine.updateTimeDisplay();
  },
  start: function(){
//    console.log('start function fired');
    Stopwatch.isRunning = true;
    Stopwatch.tickClock();// Your Code Here
  },
  stop: function(){
    // Your Code Here
    Stopwatch.isRunning = false;
  },
  lap: function(){
    // Your Code Here
    Stopwatch.laps.push(document.getElementById('time-display').innerHTML);
    ViewEngine.updateLapListDisplay();
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
    $('#millisecs').text(Stopwatch.millisecs);
    $('#secs').text(Stopwatch.secs);
    $('#mins').text(Stopwatch.mins);
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
    $('#lap-list').append("<li>" + Stopwatch.laps[Stopwatch.laps.length - 1] + "</li>");
  }
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
//    console.log('send time to UI');
  },
  handleClickStart: function() {
    console.log('handleClickStart fired');
    if (Stopwatch.isRunning === true) {
      console.log('Stopwatch is currently running.')
    }
    else {
      Stopwatch.start();

    }
  },

  handleClickStopReset: function() {
    if(Stopwatch.isRunning === true) {
      Stopwatch.stop();
    }
    else {
      Stopwatch.reset();
    }
},

  handleClickLap: function() {
    if (Stopwatch.isRunning === true) {
      Stopwatch.lap();
    }
    else {
      console.log("No lap to display.")
    }
  }
};

window.onload = function(){
  $('#start').on('click', AppController.handleClickStart);
  $('#lap').on('click', AppController.handleClickLap);
  $('#stop').on('click', AppController.handleClickStopReset);

  // Attach AppController methods to the DOM as event handlers here.
};
