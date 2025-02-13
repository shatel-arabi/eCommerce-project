import React from 'react';
import { AuthContext } from '../../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user && user.uid){
        
    }
};

export default PrivateRoute;