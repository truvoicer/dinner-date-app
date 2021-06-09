import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const GalleryImageThumb = ({src = ""}) => {
    return (
        <div className="gallery-image-thumb">
            <img src={src} alt="img" />
            <div className="gallery-image-thumb--add">
                <a
                    onClick={e => {
                        e.preventDefault();

                    }}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </a>
            </div>
            <div className="gallery-image-thumb--overlay thumb-overlay">
                <div className={"thumb-overlay--header"}>

                </div>
                <div className={"thumb-overlay--footer"}>

                </div>
            </div>
        </div>
    );
};

export default GalleryImageThumb;
