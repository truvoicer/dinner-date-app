import React from 'react';

const AlbumsMediaBlock = () => {
    return (
        <>
            <div className="media-title">
                <h3>Album Lists</h3>
            </div>
            <div className="media-content">
                <ul className="media-upload">
                    <li className="upload-now">
                        <div className="custom-upload">
                            <div className="file-btn">
                                <i className="icofont-upload-alt"/>
                                New Album
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="album text-center">
                            <div className="album-thumb">
                                <a href="#">
                                    <img src="/images/member/02.jpg" alt="album"/>
                                </a>
                            </div>
                            <div className="album-content">
                                <h6>Private</h6>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="load-btn">
                    <a href="#" className="lab-btn">
                        Load More
                        <i className="icofont-spinner"/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default AlbumsMediaBlock;
