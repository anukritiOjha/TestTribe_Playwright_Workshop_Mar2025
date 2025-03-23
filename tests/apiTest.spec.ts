import { test, expect } from '@playwright/test';

test('Get user Details using GET API', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    const responseJson = await response.json();
    // console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(responseJson.support.url).toBe('https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral');
    expect(responseJson.data[0].email).toBe('michael.lawson@reqres.in')
})

test('Create User using POST API', async ({ request }) => {
    var requestBody = {
        "name": "morpheus",
        "job": "leader"
    }

    const response = await request.post('https://reqres.in/api/users',
        {
            data:requestBody,
            headers: {"ACCEPT":"application/JSON"}
        }
    );
    const responseJson = await response.json();
    // console.log(responseJson);
    expect(response.status()).toBe(201);
    expect(responseJson.name).toBe(requestBody.name);
    expect(responseJson.job).toBe(requestBody.job);
});

test('Update User using PUT API', async ({ request }) => {
    var requestBody = {
        "name": "vignesh",
        "job": "trainer"
    }

    const response = await request.put('https://reqres.in/api/users/2',
        {
            data:requestBody,
            headers: {"ACCEPT":"application/JSON"}
        }
    );
    const responseJson = await response.json();
    // console.log(responseJson);
    expect(response.status()).toBe(200);
    expect(responseJson.name).toBe(requestBody.name);
    expect(responseJson.job).toBe(requestBody.job);
});

test('Delete User using DELETE API', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});