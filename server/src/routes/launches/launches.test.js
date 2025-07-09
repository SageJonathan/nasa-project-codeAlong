const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('respond with 200 succes', async () =>{
        const response = await request(app).get('/launches')
        .expect('Content-Type',/json/)
        .expect(200);
    });
})


describe('Test POST /launches' , () =>{
    const completeLaunchData = {
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            destination: 'Keplaer-186 f',
            launchDate: 'January 8, 2065',
    };
    const uncompleteLaunchData = {
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            destination: 'Keplaer-186 f',
    };
    const invalidDateConpleteLaunchData = {
              mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            destination: 'Keplaer-186 f',
            launchDate: 'xuut',
    }

    test('respond with 201 created', async ()=>{
        const response= await request(app).post('/launches')
        .send(completeLaunchData)
        .expect('Content-Type',/json/)
        .expect(201);

        const requestDate = new Date (completeLaunchData.launchDate).valueOf();
        const responseDate = new Date (response.body.launchDate).valueOf();

        expect(responseDate).toBe(requestDate)
        expect(response.body).toMatchObject(uncompleteLaunchData);


    });
    test ('catch missing reqs',async ()=>{
         const response= await request(app).post('/launches')
        .send(uncompleteLaunchData)
        .expect('Content-Type',/json/)
        .expect(400);

        expect(response.body).toStrictEqual({
               error: 'Missing required launch property',
        });
    });
    test('catch invalid dates,', async () =>{
   const response= await request(app).post('/launches')
        .send(invalidDateConpleteLaunchData)
        .expect('Content-Type',/json/)
        .expect(400);``

        expect(response.body).toStrictEqual({
               error: 'Invalid Date',
        });
    });
})