import React from 'react';
import {v1} from 'uuid';
import {ActionType, AddNewPostAT, DeletePostTextAT, UpdateNewPostTextAT} from '../index';
import {MessagesDataType} from '../App';

const ADD_NEW_POST = 'ADD-NEW-POST';
const DELETE_LAST_POST = 'DELETE-LAST-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ProfileReducer = (state: MessagesDataType, action: ActionType): MessagesDataType => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: v1(),
                message: action.mewPostMessage,
                likeCount: 0,
                imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
            };
            state.postsData.unshift(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.mewPostText;
            return state;
        }
        case DELETE_LAST_POST: {
            state.postsData.shift();
            return state;
        }
        default:
            return state;
    }
};

export const addNewPostActionCreator = (mewPostMessage: string): AddNewPostAT => {
    return {
        type: ADD_NEW_POST,
        mewPostMessage
    };
};


export const deletePostActionCreator = (): DeletePostTextAT => {
    return {
        type: DELETE_LAST_POST,
    };
};

export const updatePostTextActionCreator = (mewPostText: string): UpdateNewPostTextAT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        mewPostText
    };
};

export default ProfileReducer;