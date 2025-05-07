import React, { useContext } from 'react';
import { authContext } from '../../Root/Root';

const MyProfile = () => {
    const {handleLogOut} = useContext(authContext);

    handleLogOut()
    return (
        <div>
            profile page
        </div>
    );
};

export default MyProfile;