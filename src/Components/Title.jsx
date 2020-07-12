import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
    return (
        <h1>{props.title}</h1>
    )
}

export default Title;

Title.prototype = {
    title: PropTypes.string.isRequired
}