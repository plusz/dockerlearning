import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            To jest OtherPage!
            <Link to="/">Idz z powrotem do homepage</Link>
        </div>
    );
};