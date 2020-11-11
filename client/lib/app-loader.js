import {authenCache} from "./cache/common/authentication";
import {authenApi} from "../api/api";

export const appLoader = {
    init() {
        authenApi.addHeader("Authorization", () => {
            let token = authenCache.getAuthen();
            return token ? `Bearer ${token}` : null;
        });

        return authenCache.loadAuthen().then(result => {

            return Promise.resolve();
        }).catch(err => Promise.resolve())


    }
};
