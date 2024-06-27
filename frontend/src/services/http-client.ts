import axios from "axios";
import { envs } from "../shared/config/envs";

export const api = axios.create({
    baseURL: envs.NEXT_PUBLIC_BACKEND_BASE_URL
})

