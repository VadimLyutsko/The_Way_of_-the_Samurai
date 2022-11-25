import React from 'react';
import {UserType} from '../../../redux/Types';
import styles from './Users.module.css';

type UsersType = {
    users: UserType[]
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersType> = ({users, setUsers, unFollowUser, followUser}) => {

    if (users.length === 0) {
        setUsers([
            {
                id: '1',
                name: 'Vadim',
                location: {country: 'Belarus', city: 'Kopyl'},
                follow: true,
                userPhoto: 'https://yt3.ggpht.com/ytc/AKedOLRAVID-MTG8mna_7U1E4o2_3GANNg6fVfKKGp5r=s900-c-k-c0x00ffffff-no-rj'
            },
            {
                id: '2',
                name: 'Vadim',
                location: {country: 'Belarus', city: 'Kopyl'},
                follow: true,
                userPhoto: 'https://yt3.ggpht.com/ytc/AKedOLRAVID-MTG8mna_7U1E4o2_3GANNg6fVfKKGp5r=s900-c-k-c0x00ffffff-no-rj'
            },
            {
                id: '3',
                name: 'Vadim',
                location: {country: 'Belarus', city: 'Kopyl'},
                follow: true,
                userPhoto: 'https://yt3.ggpht.com/ytc/AKedOLRAVID-MTG8mna_7U1E4o2_3GANNg6fVfKKGp5r=s900-c-k-c0x00ffffff-no-rj'
            }
        ]);
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>

                    <div>
                        <div className={styles.userPhoto}>
                            <img src={user.userPhoto} alt=""/>
                        </div>

                        <div>{user.name}</div>

                        <span>{`From: ${user.location.country}, ${user.location.city}`}</span>

                        <div>{user.follow ?
                            <button onClick={() => {
                                unFollowUser(user.id);
                            }}>unfollow</button> :
                            <button onClick={() => {
                                followUser(user.id);
                            }}>follow</button>}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};