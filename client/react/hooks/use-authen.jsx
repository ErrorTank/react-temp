import React, {useEffect, useState} from 'react';
import {authenCache} from "../../lib/cache/common/authentication";

export const useAuthen = () => {
    const [isAuthen, setIsAuthen] = useState(!!authenCache.getAuthen());
    useEffect(() => {
        return authenCache.onChange((authen) => {
            setIsAuthen(!!authen)
        })
    }, [])
    return {
        isAuthen
    };
};

