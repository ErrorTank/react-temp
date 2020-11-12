
import {authenApi, guessApi} from "../api";


export const testApi = {
    login(){
        return guessApi.post("/login", null)
    },
    authenticatedUser(){
        return authenApi.get("/auth")
    }
};
