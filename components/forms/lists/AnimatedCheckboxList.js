import React, {useEffect, useState} from 'react';

const AnimatedCheckboxList = ({name, options = [], callback}) => {
    const [checkboxListValues, setCheckboxListValues] = useState([]);

    useEffect(() => {
        callback(checkboxListValues)
    }, [checkboxListValues]);

    return (
        <>
            <svg
                viewBox="0 0 0 0"
                style={{
                    position: "absolute",
                    zIndex: -1,
                    opacity: 0
                }}
            >
                <defs>
                    <linearGradient id="animatedCheckboxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
                        <stop offset="0%" stopColor="#27FDC7"/>
                        <stop offset="100%" stopColor="#0FC0F5"/>
                    </linearGradient>

                    <linearGradient id="animatedCheckboxLineGradient">
                        <stop offset="0%" stopColor="#0FC0F5"/>
                        <stop offset="100%" stopColor="#27FDC7"/>
                    </linearGradient>

                    <path id="animated-checkbox-list--item__line" stroke="url(#animatedCheckboxLineGradient)" d="M21 12.3h168v0.1z"/>
                    <path id="animated-checkbox-list--item__box" stroke="url(#animatedCheckboxGradient)"
                          d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"/>
                    <path id="animated-checkbox-list--item__check" stroke="url(#animatedCheckboxGradient)" d="M10 13l2 2 5-5"/>
                    <circle id="animated-checkbox-list--item__circle" cx="13.5" cy="12.5" r="10"/>
                </defs>
            </svg>


            <div className="animated-checkbox-list">
                {options.map((option, index) => (
                    <label className="animated-checkbox-list--item" key={index}>
                        <input
                            className="animated-checkbox-list--item__state"
                            type="checkbox"
                            value={option.value}
                            onClick={(e) => {
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
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 200 25"
                             className="animated-checkbox-list--item__icon">
                            <use xlinkHref="#animated-checkbox-list--item__line" className="animated-checkbox-list--item__line"/>
                            <use xlinkHref="#animated-checkbox-list--item__box" className="animated-checkbox-list--item__box"/>
                            <use xlinkHref="#animated-checkbox-list--item__check" className="animated-checkbox-list--item__check"/>
                            <use xlinkHref="#animated-checkbox-list--item__circle"
                                 className="animated-checkbox-list--item__circle"/>
                        </svg>

                        <div className="animated-checkbox-list--item__text">{option.label}</div>

                    </label>
                ))}
            </div>
        </>
    );
};

export default AnimatedCheckboxList;
