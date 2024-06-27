import axios, { AxiosInstance } from "axios";

export class HttpClientSingleton {
    public request!: AxiosInstance
    private static instance: HttpClientSingleton | null = null;
    private constructor() {}


    public static getInstance(): HttpClientSingleton {
        if (!this.instance) {
            this.instance = new HttpClientSingleton();
            this.instance.request = axios
        }
        return this.instance;
    }

    public setBaseUrl(baseUrl: string) {
        this.request = axios.create({
            baseURL: baseUrl
        })
    }
}