import {Cache} from "../cache"
import Cookies from "js-cookie";
import {testApi} from "../../../api/common/test";

const cookiesEngine = {
    getItem: Cookies.get,
    setItem: Cookies.set,
    removeItem: Cookies.remove
};


export const authenCache = (() => {
    const cache = new Cache(cookiesEngine);
    return {
        clearAuthen() {
            cache.set(null, "k-authen-token");
        },
        loadAuthen() {
            return new Promise((resolve, reject) => {
                let authen = cache.get("k-authen-token");
                if (!authen) {
                    reject();
                } else {
                    testApi.authenticatedUser().then((user) => {
                        if (!user) {
                            reject();
                        } else {
                            return resolve();
                        }
                    }).catch(err => {
                        cache.set(null, "k-authen-token");
                    });

                }
            });

        },
        getAuthen() {
            return cache.get("k-authen-token")
        },
        setAuthen(authen, options) {

            cache.set(authen, "k-authen-token", options);
        }
    }
})();
