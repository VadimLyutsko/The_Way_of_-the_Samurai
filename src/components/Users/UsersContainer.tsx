import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {ActionType, UserType} from '../../redux/Types';
import {FollowUserAC, SetUserAC, UnFollowUserAC} from '../../redux/users-Reducer';
import {StateType} from '../../redux/redux-store';
import {Users} from './Users/Users';


let mapStateToProps = (state: StateType) => {
    return {
        users: state.userPage.UsersData
    };
};

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        followUser: (userId: number) => {
            dispatch(FollowUserAC(userId));
        },
        unFollowUser: (userId: number) => {
            dispatch(UnFollowUserAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUserAC(users));
        }
    };
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);