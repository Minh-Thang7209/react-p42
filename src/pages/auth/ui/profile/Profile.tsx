import { useContext } from 'react';
import AppContext from '../../../../features/_context/AppContext';
import './Profile.css';

export default function Profile(){
    const {user} = useContext(AppContext);

    return <div className='profile-container'>
        {user?.login}
    </div>
}