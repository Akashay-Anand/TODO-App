import { LOGIN, SIGNUP, CREATE_TODO, GET_TODO, CHANGE_STATE, DELETE_TODO } from './apiConstant';
import axios from 'axios';

const info = localStorage.getItem('user');
const user = JSON.parse(info);
const headers = {}
if (user) {
  // headers = ...user;
  headers['x-auth-token'] = user.token;
  // headers.uid = user.uid;
  // console.log(headers);
}


export async function login(data) {
  return axios.post(LOGIN, data);
}
export async function signup(data) {
  return axios.post(SIGNUP, data);
}

export async function addTodo(data) {
  data.uid = user.uid;
  return axios.post(CREATE_TODO, data, { headers });
}
export async function getTodoList() {
  // data.uid = user.uid;
  return axios.get(GET_TODO, { headers });
}

export async function toggleState(data) {
  // const APIurl = `${CHANGE_STATE}/${data}`;
  // console.log(APIurl);
  // console.log(data);
  // console.log("url: ",APIurl);
  // console.log(headers);
  try{
    return axios.patch(CHANGE_STATE,data ,{ headers });
  }catch(err){
    console.log(err);
  }
}

export async function deleteTodo(data){
  return axios.delete(CHANGE_STATE,data, { headers });
}


