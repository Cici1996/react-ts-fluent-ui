import React, { useEffect } from 'react'
import { userManager } from '../../utils';

const Callback: React.FC = () => {
    useEffect(() => {
        userManager
            .signinRedirectCallback()
            .then(user => {
                console.log(user)
                window.location.href = "/"
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>Authentification callback processing...</div>
    )
}

export default Callback