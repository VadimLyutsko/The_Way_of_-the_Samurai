import React from 'react';
import style from './MyPosts.module.css';
import SuperButton from '../../../SuperComponents/SuperButton/SuperButton';

type MyPostType = {
    postsElements: JSX.Element[]
    updatePostText: (newPostElement: string) => void
    addNewPost: (text: string) => void
    deletePost: () => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostType> = (props
) => {

    const {postsElements, newPostText, addNewPost, deletePost, updatePostText} = props;   // Destructuring for convenience


    const addMyPost = () => {
        newPostElement.current?.value ? addNewPost(newPostText) : alert('Введите хоть что-нибудь...');
    };

    const deleteMyPost = () => {
        deletePost();
    };

    const onMyPostChange = () => {
        newPostElement.current?.value && updatePostText(newPostElement.current?.value);
    };

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div className={style.postsBlock}>
            <h3> My posts</h3>
            <div>
                < >
                    <textarea
                        className={style.myPostsTextArea}
                        ref={newPostElement}
                        placeholder="Type some text"
                        onChange={onMyPostChange}
                        value={newPostText}/>
                </>
                <div className={style.myPostsButtonContainer}>
                    <SuperButton
                        type={'Goodness'}
                        title={'Add post'}
                        callBack={addMyPost}
                    />

                    <SuperButton
                        type={'Evil'}
                        title={'Delete post'}
                        callBack={deleteMyPost}
                    />

                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    );
};