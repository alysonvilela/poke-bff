import axios, { AxiosInstance } from "axios";
import { envs } from "../../shared/config/envs";

export class HttpClientSingleton {
    public request!: AxiosInstance
    private static instance: HttpClientSingleton | null = null;
    private constructor() {}


    public static getInstance(): HttpClientSingleton {
        if (!this.instance) {
            this.instance = new HttpClientSingleton();
            this.instance.request = axios.create({
                baseURL: "https://pokeapi.co",
            })
        }
        return this.instance;
    }
}