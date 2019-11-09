window.addEventListener("load", function() {
  let liftOff = document.getElementById("takeoff");
  let status = document.getElementById("flightStatus");
  let screen = document.getElementById("shuttleBackground");
  let howHigh = document.getElementById("spaceShuttleHeight");
  let setDown = document.getElementById("landing");
  let abort = document.getElementById("missionAbort");
  let moveU = document.getElementById("up");
  let moveD = document.getElementById("down");
  let moveL = document.getElementById("left");
  let moveR = document.getElementById("right");
  let shape = document.getElementById("rocket");

  function move(what, direction) {
    let compStyles = window.getComputedStyle(shape);
    let topVal1 = compStyles.getPropertyValue(what);
    let topVal2 = parseInt(topVal1, 10);
    if (direction == "up") {
      shape.style.marginTop = topVal2 - 10 + "px";
    } else if (direction == "down") {
      shape.style.marginTop = topVal2 + 10 + "px";
    } else if (direction == "right") {
      shape.style.marginRight = topVal2 - 10 + "px";
    } else if (direction == "left") {
      shape.style.marginLeft = topVal2 - 10 + "px";
    }
  }

  liftOff.addEventListener("click", function() {
    let response = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (response) {
      status.innerHTML = "Shuttle in flight.";
      screen.style.backgroundColor = "blue";
      howHigh.innerHTML = 10000;
    }
  });

  setDown.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    status.innerHTML = "The shuttle has landed.";
    screen.style.backgroundColor = "green";
    howHigh.innerHTML = 0;
  });

  abort.addEventListener("click", function() {
    let response = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (response) {
      status.innerHTML = "Mission Aborted.";
      screen.style.backgroundColor = "green";
      howHigh.innerHTML = 0;
    }
  });

  moveU.addEventListener("click", function() {
    howHigh.innerHTML = 10000;
    move('margin-top', 'up');
  });

  moveD.addEventListener("click", function() {
    howHigh.innerHTML = 0;
    move('margin-top', 'down');
  });

  moveL.addEventListener("click", function() {
    move('margin-left', 'left');
  });

  moveR.addEventListener("click", function() {
    move('margin-right', 'right');
  });
});
