import React from 'react';

const MusicMediaBlock = () => {
    const MEDIA_CATEGORIES = [
        "media_audio",
    ];
    return (
        <>
            <div className="media-title">
                <h3>All Music</h3>
            </div>
            <div className="media-content">
                <ul className="media-upload">
                    <li className="upload-now">
                        <div className="custom-upload">
                            <div className="file-btn">
                                <i className="icofont-upload-alt"/>
                                Upload
                            </div>
                            <input type="file"/>
                        </div>
                    </li>
                </ul>
                <div className="row">
                    <div className="col">
                        <p>
                            <i className="icofont-worried"/>
                            Sorry !! There's no media found for the request !!
                        </p>
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

export default MusicMediaBlock;
