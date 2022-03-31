import React, { useEffect } from 'react'
import { signinRedirectCallback } from '../../utils';

const Callback: React.FC = () => {
    useEffect(() => {
        signinRedirectCallback().then(user => {
            window.location.href = "/"
        }).catch(error => console.log(error))
    }, []);

    return (
        <div>Authentification callback processing...</div>
    )
}

export default Callback