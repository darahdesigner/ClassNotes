let teamOnePoints = document.getElementById("team1points");
let teamTwoPoints = document.getElementById("team2points");
let teamOneAddButton = document.getElementById("teamOneAddButton")
let teamTwoAddButton = document.getElementById("teamTwoAddButton");

function initializePoints (){
    teamOnePoints.innerText = "0";
    teamTwoPoints.innerText = "0";
}

initializePoints();

function teamOneAdd (){
  let points = Number(teamOnePoints.innerText); // convert string to number
  points += 1; //points = points + 1
  teamOnePoints.innerText = points;
  if(teamOneAddButton.style.backgroundColor !== "green"){
    teamOneAddButton.style.backgroundColor =  "green";
  } else {
    teamOneAddButton.style.backgroundColor = "blue";
  }

}

function teamOneSub (){
  let points = Number(teamOnePoints.innerText); // convert string to number
  if(points !==0)
  points -= 1; //points = points - 1

  teamOnePoints.innerText = points;
}

function teamTwoAdd (){
  let points = Number(teamTwoPoints.innerText);
  points += 1;
  teamTwoPoints.innerText = points;
}
let teamTwoAddButton = document.getElementById("teamTwoAddButton");
teamTwoAddButton.addEventListener("click", teamTwoAdd);



teamOneAddButton.addEventListener("click", teamOneAdd)

function teamTwoSub (){
  let points = Number(teamTwoPoints.innerText);
  points-= 1;
  teamTwoPoints.innerText = points;
}
