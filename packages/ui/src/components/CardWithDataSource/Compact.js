import React from 'react';
import { Paper } from '@react-web-app/theme';
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
            <Paper basic>
                <Paper>
                    {label}
                    <Paper basic>
                        {children}
                    </Paper>
                </Paper>
            </Paper>
        );
    }

    return (
        <Paper basic>
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
