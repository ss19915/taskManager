import React from 'react';
import { Status } from './constants';
import { Paper, Button } from '@react-web-app/theme';
import { ErrorMenuLabels } from './constants';
import T from 'prop-types';

class ErrorMenu extends React.PureComponent {
    static propTypes = {
        retry: T.func,
        status: T.oneOf(Object.values(Status)),
        error: T.object,
    };

    state = {
        showError: false,
    };

    toggleShowError = () => this.setState((prevState) => ({ showError: !prevState.showError }));

    render() {
        const {
            retry,
            status,
            error,
        } = this.props;

        return (
            <React.Fragment>
                <Button
                    onClick={retry}
                    disabled={status === Status.LOADING}
                >
                    {ErrorMenuLabels.RETRY}
                </Button>
                <Button onClick={this.toggleShowError}>
                    {this.state.showError ? ErrorMenuLabels.HIDE_ERROR : ErrorMenuLabels.SHOW_ERROR}
                </Button>

                {this.state.showError &&
                    <Paper css={(theme) => ({ color: theme.warningColor })}>
                        {`Error: ${JSON.stringify(error)}`}
                    </Paper>
                }
            </React.Fragment>
        );
    }
}

export default ErrorMenu;