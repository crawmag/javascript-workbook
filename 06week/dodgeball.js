//const assert = require("assert");

// defines constant array of person objects
const arrOfPeople = [
  {
    id: 2,
    name: "Trevor Noah",
    age: 35,
    skillSet: "Disc Jockey",
    placeBorn: "Johannesburg, South Africa"
  },
  {
    id: 3,
    name: "Dwayne Johnson",
    age: 45,
    skillSet: "Wrestling",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 4,
    name: "Kevin Hart",
    age: 40,
    skillSet: "Prankster",
    placeBorn: "Philadelphia, Pennsylvania"
  },
  {
    id: 5,
    name: "Taika Waititi",
    age: 44,
    skillSet: "Acting",
    placeBorn: "Wellington, New Zealand"
  },
  {
    id: 6,
    name: "Jemaine Clement",
    age: 45,
    skillSet: "Singing",
    placeBorn: "Masterton, New Zealand"
  },
  {
    id: 7,
    name: "Jim Carey",
    age: 57,
    skillSet: "Painting",
    placeBorn: "Vancouver, Canada"
  },
  {
    id: 8,
    name: "Noel Felding",
    age: 40,
    skillSet: "Dancing",
    placeBorn: "London, England"
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

// constructs the player object
class player {
  constructor(person, canThrow, canDodge, isHealthy) {
    for (var [key, value] of Object.entries(person)) {
      console.log("key", key, "value", value);
      this[key] = value;
    }

    this.canThrowBall = canThrow;
    this.canDodgeBall = canDodge;
    this.isHealthy = isHealthy;
  }
}

// constructs the blueTeammate object
class blueTeammate {
  constructor(person) {
    for (var [key, value] of Object.entries(person)) {
      this[key] = value;
    }
    this.teamColor = "blue";
    this.mascot = "Dancing Squids";
  }
}

// constructs the redTeammate object
class redTeammate {
  constructor(person) {
    for (var [key, value] of Object.entries(person)) {
      this[key] = value;
    }
    this.teamColor = "red";
    this.mascot = "Jumping Unicorns";
  }
}

// lists the array of person objects in arrOfPeople
const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.forEach(person => {
    const li = document.createElement("li");
    li.setAttribute("id", person.id);
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
  var clickedButton = event.target;
  var clickedDiv = clickedButton.parentElement;
  clickedDiv.removeChild(clickedButton);
};

// takes a person object and instantiates a player object from the person
const makePlayer = (person, browser = true) => {
  let _player = new player(person, 1, 1, 1, 1, 1);
  arrOfPeople.splice(arrOfPeople.indexOf(person), 1);
  listOfPlayers.push(_player);
  if (browser) {
    var clickedButton = event.target;
    var clickedDiv = clickedButton.parentElement;
    var newList = clickedDiv.parentElement;
    newList.removeChild(clickedDiv);
    listPlayerChoices();
  }
  return _player;
};

// lists the players to be added to a team
const listPlayerChoices = () => {
  const playersElement = document.getElementById("players");
  while (playersElement.firstChild) {
    playersElement.removeChild(playersElement.firstChild);
  }

  listOfPlayers.forEach(person => {
    const li = document.createElement("li");
    const buttonOne = document.createElement("button");
    const buttonTwo = document.createElement("button");
    buttonOne.innerHTML = "Blue Team";
    buttonTwo.innerHTML = "Red Team";
    buttonOne.addEventListener("click", function() {
      addPlayerToTeam(person, "blue");
    });
    li.appendChild(buttonOne);
    li.appendChild(buttonTwo);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    playersElement.append(li);
    buttonTwo.addEventListener("click", function() {
      addPlayerToTeam(person, "red");
    });
    li.appendChild(buttonOne);
    li.appendChild(buttonTwo);
    playersElement.append(li);
  });
};

// adds player to specific team
const addPlayerToTeam = (player, color, browser = true) => {
  if (color === "blue") {
    let bluePlayer = new blueTeammate(player);
    blueTeam.push(bluePlayer);
    if (browser) {
      listTeamMembers("blue", blueTeam);
    }
    return bluePlayer;
  } else if (color === "red") {
    let redPlayer = new redTeammate(player);
    redTeam.push(redPlayer);
    if (browser) {
      listTeamMembers("red", redTeam);
    }
    return redPlayer;
  }
  console.log("blueTeam:", blueTeam, "- redTeam:", redTeam);
};

const listTeamMembers = (color, team) => {
  const teamElement = document.getElementById(color);
  while (teamElement.firstChild) {
    teamElement.removeChild(teamElement.firstChild);
  }
  team.forEach(player => {
    const li = document.createElement("li");
    li.setAttribute("id", player.id);
    li.appendChild(
      document.createTextNode(player.name + " - " + player.skillSet)
    );
    teamElement.append(li);
  });
  listOfPlayers.splice(listOfPlayers.indexOf(player), 1);
  var clickedButton = event.target;
  var clickedDiv = clickedButton.parentElement;
  var newList = clickedDiv.parentElement;
  newList.removeChild(clickedDiv);
};
