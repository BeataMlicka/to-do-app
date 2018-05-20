function Player(name, age, discipline) {
    this.name = name;
    this.age = age;
    this.discipline = discipline;
}

Player.prototype.identify = function() {
    console.log(`Hello, I'm ${this.name}. I'm ${this.age} and I play ${this.discipline}`);
};

function BasketballPlayer(name, age, discipline, team, position) {
    Player.call(this, name, age, discipline);
    this.team = team;
    this.position = position;
}

BasketballPlayer.prototype = Object.create(Player.prototype);

BasketballPlayer.prototype.sayHi = function() {
    console.log(`${this.identify()} My team is called ${this.team} and I play as ${this.position}`);
};

const lebron = new BasketballPlayer('Lebron James', 32, 'Basketball', 'Cleveland Cavaliers', 'Power forward');
lebron.sayHi();