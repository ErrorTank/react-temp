import React from 'react';
import {testApi} from "../api/common/test";
import {authenCache} from "../lib/cache/common/authentication";
import {useAuthen} from "./hooks/use-authen";

export const App = () => {
    let {isAuthen} = useAuthen();
    console.log(isAuthen)
    const login = () => {
        testApi.login()
            .then(({token}) => authenCache.setAuthen(token));
    }
    const signOut = () => {
        authenCache.clearAuthen();
    }
    return (
        <div>
            {isAuthen ? (
                <button onClick={signOut}>Sign out</button>
            ) : (
                <button onClick={login}>Login</button>
            )}

        </div>
    );
};
