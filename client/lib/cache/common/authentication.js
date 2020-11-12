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
    const listeners = [];

    const setAuthen = (authen, options) => {

        cache.set(authen, "k-authen-token", options);
        Promise.all(listeners.map((l) => l(authen)))
    }

    return {
        onChange: (listener) => {
            listeners.push(listener);

            return () => {
                let i = listeners.indexOf(listener);
                listeners.splice(i, 1);
            };
        },
        clearAuthen() {
            setAuthen(null)
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
                        setAuthen(null)
                    });

                }
            });

        },
        getAuthen() {
            return cache.get("k-authen-token")
        },
        setAuthen
    }
})();
