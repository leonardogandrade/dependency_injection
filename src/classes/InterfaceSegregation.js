class User {
    constructor(username) {
        this.username = username;
    }
}

class Techlead extends User {
    constructor(username) {
        super(username);
    }
}

class Developer extends User {
    constructor(username) {
        super(username);
    }
}

const GrantOptions = {
    aprovePR() {
        console.log('Grant access aprove PR.')
    },

    mergeRepo() {
        console.log('Grant acces to merge repo')
    }
}

Object.assign(Techlead.prototype, GrantOptions);

const leo = new Techlead();
const joao = new User();

try {
    j
} catch (err) {
    console.log("Error implementing inteface.")
}