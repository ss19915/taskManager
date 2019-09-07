import React from 'react';
import _ from 'lodash';
import { Status } from './constants';
import ErrorMenu from './ErrorMenu';
import Loader from './Loader';
import Compact from './Compact';
import ShowChildren from './ShowChildren';
import T from 'prop-types';

//[Note]: compact hides label too

class CardWithDataSource extends React.PureComponent {
    static propTypes = {
        payload: T.oneOfType([T.object, T.string, T.number]),
        apiCallMethod: T.func,
        processResponse: T.func,
        skip: T.bool,//skip API Call
        compact: T.bool,// removed outer border and makes component small
        label: T.node,//card header
    };

    constructor(props) {
        super(props);

        const {
            payload,
        } = props;

        this.state = {
            payload,
            status: Status.LOADED,
            apiResponse: {},
            error: '',
        };
    }

    callAPI = () => {
        const { apiCallMethod, processResponse = (r) => r, skip } = this.props;

        if (skip) {
            return;
        }

        const { payload } = this.state;

        const onSuccess = ({ data }) => this.setState({
            apiResponse: processResponse(data),
            status: Status.LOADED
        });

        const onError = ({ response }) => this.setState({
            error: response,
            status: Status.ERROR,
        });

        this.setState({ status: Status.LOADING });
        apiCallMethod(payload).then(onSuccess).catch(onError);
    };

    componentDidMount() {
        this.callAPI();
    }

    componentDidUpdate() {
        if (!_.isEqual(this.props.payload, this.state.payload)) {
            this.setState({ payload: this.props.payload }, this.callAPI);
        }
    }

    retry = () => {
        this.callAPI();
    };

    render() {
        const { children, compact, label } = this.props;
        const { status, apiResponse, error } = this.state;

        return (
            <Compact label={label} compact={compact}>
                {status === Status.LOADED &&
                    <ShowChildren
                        children={children}
                        childrenProps={apiResponse}
                    />
                }

                {status === Status.LOADING && <Loader compact={!compact} />}

                {status === Status.ERROR &&
                    <ErrorMenu
                        retry={this.retry}
                        status={status}
                        error={error}
                    />
                }
            </Compact>
        );
    }
}

export default CardWithDataSource;
