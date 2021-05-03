import React from 'react';
import Breadcrumbs from "../menus/Breadcrumbs";

const PageHeaderBlock = ({title}) => {
    return (
        <section className="page-header-section style-1" style={{background: "url(/images/page-header.jpg"}}>
            <div className="container">
                <div className="page-header-content">
                    <div className="page-header-inner">
                        <div className="page-title">
                            <h2>{title}</h2>
                        </div>
                        <Breadcrumbs />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeaderBlock;
