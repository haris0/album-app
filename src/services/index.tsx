import axios from "axios";

export const albums:string = "albums"
export const users:string = "users"
export const photo:string = "photos"

export const HTTP = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 3000,
});