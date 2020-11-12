import {apiFactory} from "./api-factory/api-config";



const authenApiConfig = {
    hostURL: `${process.env.API_URI}/api`,


};

const guessApiConfig = {
    hostURL: `${process.env.API_URI}/api`
};





export const authenApi = apiFactory.createApi(authenApiConfig);

export const guessApi = apiFactory.createApi(guessApiConfig);

