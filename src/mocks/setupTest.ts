import '@testing-library/jest-dom';
import server from './server';

global.alert = jest.fn();
window.alert = jest.fn();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
