import React from 'react';
import CardWithDataSource from '../CardWithDataSource';
import DashBoard from './DashBoard';
import { connect } from 'react-redux';
import actions from '../../actions';
import T from 'prop-types';
import { withRouter } from 'react-router-dom';
import { database, auth } from 'firebase/app';

const DashBoardContext = (props) => {
    const { allTasks, saveAllTask } = props;
    const skipApiCall = allTasks === null ? false : true;
    const getAllTasks = () => {
        const promise = new Promise((resolve) => {
            const user = auth().currentUser;

            database().ref(`tasks/${user.uid}/`).on('value', (snapshot) => {
                if (snapshot.val() === null) {
                    saveAllTask(null);
                    resolve('success');
                    return;
                }

                const fetchedAllTasks = Object.values(snapshot.val());
                Object.keys(snapshot.val()).map((id, index) => {
                    fetchedAllTasks[index].id = id;
                });
                saveAllTask(fetchedAllTasks);
                resolve('success');
            });
        });
        return (promise);
    };

    return (
        <CardWithDataSource
            apiCallMethod={getAllTasks}
            skip={skipApiCall}
        >
            <DashBoard
                allTasks={allTasks}
            />
        </CardWithDataSource>
    );
};

DashBoardContext.propTypes = {
    allTasks: T.array,
    saveAllTask: T.func.isRequired,
}

const mapStateToProps = (state) => ({
    allTasks: state.allTasks,
});

const mapDispatchToProps = (dispatch) => ({
    saveAllTask: (allTasks) => dispatch(actions.saveAllTask(allTasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashBoardContext));