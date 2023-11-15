const ApiRoot = import.meta.env.VITE_API_URL;

export const LOGIN = `${ApiRoot}/login`;

export const SIGNUP = `${ApiRoot}/singup`;

export const CREATE_TODO = `${ApiRoot}/todo/list/`;

export const GET_TODO = `${ApiRoot}/todo/list/`;

export const CHANGE_STATE = `${ApiRoot}/todo/list`;
// export const CHANGE_STATE = `http://localhost:4321/todo/list`;

export const DELETE_TODO = `${ApiRoot}/todo/list`;
