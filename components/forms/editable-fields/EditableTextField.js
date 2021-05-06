import React from 'react';

const EditableTextField = ({children, value, name, className, element}) => {
    return (
        <p className="info-details">{value}</p>
    );
};

export default EditableTextField;
