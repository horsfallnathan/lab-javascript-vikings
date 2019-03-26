// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        // let aSaxon = this.saxonArmy[randomSaxonIndex];
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        // let aViking = this.vikingArmy[randomVikingIndex];
        let returnMessage = this.saxonArmy[randomSaxonIndex].receiveDamage(
            this.vikingArmy[randomVikingIndex].strength
        );
        if (this.saxonArmy[randomSaxonIndex].health < 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return returnMessage;
    }
    // saxonAttack() {
    //     let randomSaxonIndex2 = Math.floor(Math.random() * this.saxonArmy.length);
    //     let randomVikingIndex2 = Math.floor(Math.random() * this.vikingArmy.length);
    //     let returnMessage2 = this.vikingArmy[randomVikingIndex2].receiveDamage(
    //         this.saxonArmy[randomSaxonIndex2].strength
    //     );
    //     if (this.vikingArmy[randomVikingIndex2].health < 0) {
    //         this.vikingArmy.splice(randomVikingIndex2, 1);
    //     }
    //     return returnMessage2;
    // }
    // showStatus() {
    //     if (this.saxonArmy.length === 0) {
    //         return `Vikings have won the war of the century!`;
    //     } else if (this.vikingArmy.length === 0) {
    //         return 'Saxons have fought for their lives and survive another day...';
    //     } else {
    //         return 'Vikings and Saxons are still in the thick of battle';
    //     }
    // }

    saxonAttack() {
        const randVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randViking = this.vikingArmy[randVikingIndex];
        const randSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randSaxon = this.saxonArmy[randSaxonIndex];
        const saxonHit = randViking.receiveDamage(randSaxon.strength);
        if (randViking.health <= 0) {
            this.vikingArmy.splice(randVikingIndex, 1);
        }
        return saxonHit;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!';
        } else if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survive another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}
