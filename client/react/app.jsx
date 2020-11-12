import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {testApi} from "../api/common/test";
import {authenCache} from "../lib/cache/common/authentication";
import {useAuthen} from "./hooks/use-authen";
import {Chep} from "./routes/chep";

export const App = () => {

    let [ok, setOk] = useState(0);
    let [e, sete] = useState('');
    let {isAuthen} = useAuthen();

    let yy = useRef(null);
    useEffect(() => {

        yy.current = setInterval(() => console.log("ooo"),1000)
        return () => {
            console.log("ttty")
            clearInterval(cc)
        };
    }, []);
    console.log(yy)
    const login = () => {
        testApi.login()
            .then(({token}) => authenCache.setAuthen(token));
    }
    const signOut = () => {
        authenCache.clearAuthen();
    }






    const baba = useCallback((i) => {
        console.log("câcc")
        return 2 + i;
    }, [])
    const lala = useMemo(() => {
        console.log("te")
        return baba(ok)
    }, [ok])

    return (
        <div>
            {isAuthen ? (
                <>
                    <button onClick={() => setOk(ok + 1)}>{ok}</button>
                    <input type={'text'} value={e} onChange={(v) => sete(v.target.value)}/>
                    <button onClick={signOut}>Sign out</button>
                </>

            ) : (
                <button onClick={login}>Login</button>
            )}
            <Chep hehe={baba}/>
        </div>
    );
};
