import React from 'react';
import {connect} from 'react-redux';
import {UserType} from '../../redux/Types';
import {
    follow,
    getUsers,
    setCurrentPage,
    setFetchingPreloader,
    setTotalUserCount,
    setUsers,
    unfollow,
} from '../../redux/users-Reducer';
import {StateType} from '../../redux/redux-store';
import {Users} from './Users/Users';

type UsersContainerType = {
    users: UserType[]
    setTotalUserCount: (totalUsersCount: number) => void
    setFetchingPreloader: (isFetching: boolean) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (users: UserType[]) => void
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    pageSize: number
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    currentPageHAndler = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    };

    render() {
        return (
            <Users
                currentPageHAndler={this.currentPageHAndler}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}


let mapStateToProps = (state: StateType) => {
    return {
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        pageSize: state.userPage.pageSize,
        users: state.userPage.UsersData,
    };
};

export default connect(mapStateToProps, {
    setFetchingPreloader,
    setTotalUserCount,
    setCurrentPage,
    getUsers,
    setUsers,
    unfollow,
    follow
})(UsersContainer);