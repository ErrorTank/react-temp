import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {testApi} from "../api/common/test";
import {authenCache} from "../lib/cache/common/authentication";
import {useAuthen} from "./hooks/use-authen";
import {Chep} from "./routes/chep";

export const App = () => {

    let [ok, setOk] = useState(0);
    let [e, sete] = useState('');
    let {isAuthen} = useAuthen();

    let yy = useRef();
    useEffect(() => {
        let cc = null;
        let  i =0;
        const id = setInterval(() => {
            i++;
            yy.current = i;

        }, 1000);

        // We need the interval id to be accessible from the whole component.
        // If we stored the id in a state variable, the component would be re-rendered
        // after the state update so a new interval will be created (this effect is triggered
        // after every re-render) leading us to the infinite loop hell.
        cc = id;

        return () => {
            console.log("ttty")
            clearInterval(cc)
        };
    }, []);

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
