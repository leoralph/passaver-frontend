import axios from "axios";
import api from "./api";

const authService = {
    async login(data) {
        await axios.get(import.meta.env.VITE_SANCTUM_CSRF_URL, { withCredentials: true });

        return api.post("/login", data);
    },
    getUser() {
        return api.get("/auth/user");
    },
};

export default authService;
