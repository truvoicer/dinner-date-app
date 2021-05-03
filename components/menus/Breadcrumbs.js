import React from 'react';

const Breadcrumbs = () => {
    return (
        <ol className="breadcrumb">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li className="active">Login</li>
        </ol>
    );
};

export default Breadcrumbs;
