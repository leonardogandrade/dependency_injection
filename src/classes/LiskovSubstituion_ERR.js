class Developer {
    constructor(username) {
        this.username = username;
    }

    deployT2Micro() {
        console.log('deploys an EC2 T2 Micro.');
    }
}

class DeveloperI extends Developer {
    constructor(username) {
        super(username);
    }

    deployT2Large() {
        console.log('deploys an EC2 T2 large.');
    }
}

class Techlead extends Developer {
    constructor(username) {
        super(username);
    }

    deployC5Large() {
        console.log('deploys C5 Extra Large.');
    }
}

const devI = new DeveloperI();
devI.deployT2Micro();

const tech = new Techlead();
tech.deployC5Large();