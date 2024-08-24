import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider/AuthProvider';

const useAuth = () => {

    const authData = useContext(AuthContext)
    return authData;
};

export default useAuth;