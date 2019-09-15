import React from 'react';
import { Paper } from '@task-manager/theme';
import T from 'prop-types';

const Compact = (props) => {
    const {
        children,
        compact,
        label
    } = props;

    if (compact) {
        return (children);
    }

    else if (label) {
        return (
            <Paper>
                <Paper>
                    {label}
                    <Paper>
                        {children}
                    </Paper>
                </Paper>
            </Paper>
        );
    }

    return (
        <Paper>
            <Paper>
                {children}
            </Paper>
        </Paper>
    );
};

Compact.propTypes = {
    children: T.node,
    compact: T.bool,
    label: T.node,
};

export default Compact;
