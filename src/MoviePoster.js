import React from 'react';
import PropTypes from 'prop-types';

export const MoviePoster = (props) => {
    return (
        <img src={props.link} alt="Movie Poster"/>
    );
};

MoviePoster.propTypes = {
    link: PropTypes.string
};