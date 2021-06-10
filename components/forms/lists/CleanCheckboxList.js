import React, {useEffect, useState} from 'react';

const CleanCheckboxList = ({name, options = [], callback, onClick}) => {
    const [checkboxListValues, setCheckboxListValues] = useState([]);

    useEffect(() => {
        callback(checkboxListValues)
    }, [checkboxListValues]);
    return (
        <div className="clean-checkbox-list">
            {options.map((option, index) => (
                <React.Fragment key={index}>
                    <input
                        id={index.toString()}
                        type="checkbox"
                        value={option.value}
                        onClick={(e) => {
                            onClick(option.value)
                            setCheckboxListValues(checkboxListValues => {
                                let cloneArray = [...checkboxListValues];
                                const findIndex = cloneArray.findIndex(item => option.value);
                                if (findIndex === -1) {
                                    cloneArray.push(option.value);
                                } else {
                                    cloneArray.splice(findIndex, 1);
                                }
                                return cloneArray;
                            })
                        }}
                    />
                    <label htmlFor={index.toString()}>{option.label}</label>
                </React.Fragment>
            ))}
        </div>
    );
};

export default CleanCheckboxList;
