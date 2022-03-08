import axios from "axios";

const base_url = "http://localhost:5000/api/";

const url = `${base_url}posts`;

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
