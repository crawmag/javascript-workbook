"use strict";

let assert = require("assert");

let jobTypes = {
  pilot: "MAV",
  mechanic: "Repair Ship",
  commander: "Main Ship",
  programmer: "Any Ship!"
};
//have a crew member class that has name, job, and special skill
//should have method called enterShip()
//this method should take in a ship as input

//class representing ship should have name, type, and ability, crew array
// ship constructor should set array called crew to be any empty array
//ship should have a method called missionStatement() which should return "Can't perform mission yet" if it
//has no crew. this method should return the ships ability if there is at least one crew memeber

// Your code here
class CrewMember {
  constructor(name, job, specialSkill) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
  }
  enterShip(Ship) {
    Ship.crew.push(this);
    this.ship = Ship;
  }
}

class Ship {
  constructor(name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
  missionStatement() {
    let emptyShipMessage = "Can't perform a mission yet!";
    if (this.crew == undefined || this.crew.length == 0) {
      return emptyShipMessage;
    } else {
      return this.ability;
    }
  }
}

//tests
if (typeof describe === "function") {
  describe("CrewMember", function() {
    it("should have a name, a job, a specialSkill and ship upon instantiation", function() {
      var crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      assert.equal(crewMember1.name, "Rick Martinez");
      assert.equal(crewMember1.job, "pilot");
      assert.equal(crewMember1.specialSkill, "chemistry");
      assert.equal(crewMember1.ship, null);
    });

    it("can enter a ship", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe("Ship", function() {
    it("should have a name, a type, an ability and an empty crew upon instantiation", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      assert.equal(mav.name, "Mars Ascent Vehicle");
      assert.equal(mav.type, "MAV");
      assert.equal(mav.ability, "Ascend into low orbit");
      assert.equal(mav.crew.length, 0);
    });

    it("can return a mission statement correctly", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      let hermes = new Ship(
        "Hermes",
        "Main Ship",
        "Interplanetary Space Travel"
      );
      let crewMember2 = new CrewMember(
        "Commander Lewis",
        "commander",
        "geology"
      );
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
