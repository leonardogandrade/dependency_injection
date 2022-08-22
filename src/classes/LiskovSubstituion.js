class Developer {
    constructor(username) {
        this.username = username;
    }

    deployEc2() {
        console.log('deploys an EC2 resource in AWS.');
    }
}

class DeveloperI extends Developer {
    constructor(username) {
        super(username);
    }

    deployEc2() {
        console.log('deploys a T2 Micro.');
    }
}

class Techlead extends Developer {
    constructor(username) {
        super(username);
    }

    deployEc2() {
        console.log('deploys C5 Extra Large.');
    }
}

// const tech = new Techlead();
// tech.deployEc2();

const devI = new DeveloperI();
devI.deployEc2();