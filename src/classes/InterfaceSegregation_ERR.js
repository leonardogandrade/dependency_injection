class User {
    constructor(username) {
        this.username = username;
    }
}

class Techlead extends User {
    constructor(username) {
        super(username);
    }

    aprovePR() {
        console.log('Grant access aprove PR.')
    }

    mergeRepo() {
        console.log('Grant acces to merge repo')
    }
}

class Developer extends User {
    constructor(username) {
        super(username);
    }

    aprovePR() {
        console.log(null)
    }

    mergeRepo() {
        console.log(null)
    }
}

const leo = new Developer();
leo.aprovePR();