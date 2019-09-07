import React from 'react';
import T from 'prop-types';

const childWithProps = (child, props, key) => {
    if (typeof (child) === 'string' | typeof (child) === 'number') {
        return child;
    }

    return React.cloneElement(child, { key: key, ...props });
}

const ShowChildren = (props) => {
    const {
        children,
        childrenProps
    } = props;

    if (!children) {
        return null;
    }

    if (Array.isArray(children)) {
        return (children.map((child, index) => childWithProps(child, childrenProps, index)));
    }

    return childWithProps(children, childrenProps);
};

ShowChildren.propTypes = {
    children: T.node,
    childrenProps: T.object,
};

export default ShowChildren;