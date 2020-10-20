import axios from "axios";
import { urls } from "../constants";

const { API_URLS } = urls;

export interface PhotoModel {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface TodoModel {
    userId: number,
    id: number,
    title: string,
    completed: boolean  
}

export interface PostModel {
    userId: number,
    id: number,
    title: string,
    body: string
}

class ApiService {
    readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getPhotos = () => {
        const url = this.baseUrl + API_URLS.photos;
        // return fetch(url);
        // we replace fetch with axios here and further
        // instead of return axios(url) we can point the type we expect:
        return axios.get<PhotoModel[]>(url);
    }

    getPosts = () => {
        const url = this.baseUrl + API_URLS.posts;
        return axios(url);
    }

    getTodos = () => {
        const url = this.baseUrl + API_URLS.todos;
        return axios(url);
    }
    
    getPhoto = (id: number) => {
        const url = this.baseUrl + API_URLS.photos + `/${id}`;
        return axios(url);
    }

    getPost = (id: number) => {
        const url = this.baseUrl + API_URLS.posts + `/${id}`;
        return axios(url);
    }

    getTodo = (id: number) => {
        const url = this.baseUrl + API_URLS.todos + `/${id}`;
        return axios(url);
    }
}

export const apiService = new ApiService(API_URLS.base);
