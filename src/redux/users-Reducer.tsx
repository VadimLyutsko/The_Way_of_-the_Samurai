import React from 'react';
import {
    ActionType,
    FollowUserAT,
    InitialUsersReducerType,
    SetCurrentPageAT,
    SetFetchingPreloaderAT,
    SetTotalUserCountAT,
    SetUserAT,
    UnFollowUserAT,
    UserType
} from './Types';


const SET_FETCHING_PRELOADER = 'SET-FETCHING-PRELOADER';
const SET_USER_CURRENT_PAGE = 'SET-USER-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const FOLLOW_USER = 'FOLLOW-USER';
const SET_USER = 'SET-USER';

let initialState = {
    UsersData: [] as UserType[],
    totalUsersCount: 10,
    isFetching: true,
    currentPage: 1,
    pageSize: 10
};

export const UsersReducer = (state: InitialUsersReducerType = initialState, action: ActionType): InitialUsersReducerType => {
    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                UsersData: state.UsersData.map(user => user.id === action.userId ? {...user, followed: true} : user),
            };
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                UsersData: state.UsersData.map(user => user.id === action.userId ? {...user, followed: false} : user)
            };
        }

        case SET_USER: {
            return {
                ...state,
                UsersData: [...action.users]
            };
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        }
        case SET_USER_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_FETCHING_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
};


export const followUser = (userId: number): FollowUserAT => {
    return {
        type: FOLLOW_USER,
        userId
    };
};

export const unFollowUser = (userId: number): UnFollowUserAT => {
    return {
        type: UNFOLLOW_USER,
        userId
    };
};

export const setUsers = (users: UserType[]): SetUserAT => {
    return {
        type: SET_USER,
        users
    };
};

export const setCurrentPage = (currentPage: number): SetCurrentPageAT => {
    return {
        type: SET_USER_CURRENT_PAGE,
        currentPage
    };
};

export const setTotalUserCount = (totalUsersCount: number): SetTotalUserCountAT => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount
    };
};
export const setFetchingPreloader = (isFetching: boolean): SetFetchingPreloaderAT => {
    return {
        type: SET_FETCHING_PRELOADER,
        isFetching
    };
};


export default UsersReducer;