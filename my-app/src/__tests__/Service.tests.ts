import { loginUser } from '../services/api';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginUser', () => {
  it('should call login API and return data', async () => {
    const data = { token: '12345' };
    mockedAxios.post.mockResolvedValue({ data });

    const result = await loginUser('test@example.com', 'password');
    expect(result.data).toEqual(data);
  });
});