import React from 'react';
import CardWithDataSource from '../CardWithDataSource';
import DashBoard from './DashBoard';
import { getAllTasks } from '@task-manager/api';
import { connect } from 'react-redux';
import { saveAllTask } from '../../actions';
import { withRouter } from 'react-router-dom';

const DashBoardContext = (props) => {
    const { allTasks, saveAllTask } = props;
    let skipApiCall = true;

    const processResponse = (allTasks) => {
        saveAllTask(allTasks);
        return;
    };

    if(allTasks === null){
        skipApiCall = false;
    }
    
    return (
        <CardWithDataSource
            apiCallMethod={getAllTasks}
            processResponse={processResponse}
            skip={skipApiCall}
        >
            <DashBoard
                allTasks={allTasks}
            />
        </CardWithDataSource>
    );
};

const mapStateToProps = (state) => ({
    allTasks: state.allTasks,
});

const mapDispatchToProps = (dispatch) => ({
    saveAllTask: (allTasks) => dispatch(saveAllTask(allTasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashBoardContext));