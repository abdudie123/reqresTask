import { loginUser } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
const axios = require('axios');

const mock = new MockAdapter(axios);

describe('api service', () => {
  it('loginUser makes a successful request', async () => {
    const responseData = { token: 'mockToken' };
    mock.onPost('/login').reply(200, responseData);

    const response = await loginUser('george.bluth@reqres.in', 'password');
    expect(response.data).toEqual(responseData);
  });

  it('loginUser handles errors properly', async () => {
    const errorMessage = 'Unauthorized';
    mock.onPost('/login').reply(401, errorMessage);

    await expect(loginUser('test@example.com', 'password')).rejects.toThrow(errorMessage);
  });
});
