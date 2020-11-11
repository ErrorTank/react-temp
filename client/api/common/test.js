
import {authenApi, offlineApi} from "../api";


export const testApi = {
    login(){
        return offlineApi.post("/login", null)
    },
    authenticatedUser(){
        return authenApi.get("/auth")
    }
};
