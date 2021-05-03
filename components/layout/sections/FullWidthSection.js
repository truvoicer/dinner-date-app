import React from 'react';

const FullWidthSection = ({children, className, wrapperClassName, header = null, extra}) => {
    return (
        <>
            <section className={className}>
                <div className="container">
                    {header}
                    <div className={`${wrapperClassName || "section-wrapper"}`}>
                        {children}
                    </div>
                    {extra}
                </div>
            </section>
        </>
    );
};

export default FullWidthSection;
