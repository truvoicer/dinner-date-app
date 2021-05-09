import React from 'react';
import {getComponent} from "../../../library/helpers/page-helper";

const FullWidthSection = ({children, className, wrapperClassName, header = null, extra}) => {
    return (
        <>
            <section className={className}>
                <div className="container">
                    {getComponent({component: header})}
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
