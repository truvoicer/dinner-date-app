import React from 'react';

const AllMediaBlock = () => {
    return (
        <>
        <div className="media-title">
            <h3>Album Lists</h3>
        </div>
        <div className="media-content">
        <ul className="media-upload">
            <li className="upload-now">
                <div className="custom-upload">
                    <div className="file-btn"><i
                        className="icofont-upload-alt"></i>
                        Upload
                    </div>
                    <input type="file" />
                </div>
            </li>
        </ul>
        <div className="row g-4">
            <div className="col-lg-4 col-sm-6">
                <div className="album text-center">
                    <div className="album-thumb">
                        <a href="#">
                            <img src="assets/images/member/02.jpg"
                                 alt="album" />
                        </a>
                    </div>
                    <div className="album-content">
                        <h6>Private</h6>

                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="album text-center">
                    <div className="album-thumb">
                        <a href="#">
                            <img src="assets/images/member/03.jpg"
                                 alt="album" />
                        </a>
                    </div>
                    <div className="album-content">
                        <h6>Crush</h6>

                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="album text-center">
                    <div className="album-thumb">
                        <a href="#">
                            <img src="assets/images/member/06.jpg"
                                 alt="album" />
                        </a>
                    </div>
                    <div className="album-content">
                        <h6>Public</h6>

                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
                <div className="album text-center">
                    <div className="album-thumb">
                        <a href="#">
                            <img src="assets/images/member/08.jpg"
                                 alt="album" />
                        </a>
                    </div>
                    <div className="album-content">
                        <h6>Favorite</h6>

                    </div>
                </div>
            </div>

        </div>
        <div className="load-btn">
            <a href="#" className="lab-btn">Load More<i
                className="icofont-spinner"></i></a>
        </div>
    </div>
            </>
    );
};

export default AllMediaBlock;
