const http = require('supertest');
const server = require('../src/server');

const userPayload = {
    "username": "leo",
    "password": "@A123456"
}

const mockDatabase = {
    async insert() {
        return {
            'mokedMsg': 'It is all mocked.'
        }
    }
}

describe('Http tests', () => {
    let request;

    beforeAll(() => {
        const app = server(mockDatabase);
        request = http.agent(app);
    });



    it('should return 200 when POST create new user', async () => {
        const result = await request.post('/user').send(userPayload);
        console.log(result)
        expect(result.statusCode).toBe(200);
    })
})