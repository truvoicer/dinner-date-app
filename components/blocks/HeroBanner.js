import React from 'react';
import FullWidthSection from "../layout/sections/FullWidthSection";

const HeroBanner = () => {

    const getShapes = () => {
        return (
            <div className="all-shapes">
                <img src="/images/banner/banner-shapes/01.png" alt="shape" className="banner-shape shape-1"/>
                <img src="/images/banner/banner-shapes/02.png" alt="shape" className="banner-shape shape-2"/>
                <img src="/images/banner/banner-shapes/03.png" alt="shape" className="banner-shape shape-3"/>
                <img src="/images/banner/banner-shapes/04.png" alt="shape" className="banner-shape shape-4"/>
                <img src="/images/banner/banner-shapes/05.png" alt="shape" className="banner-shape shape-5"/>
                <img src="/images/banner/banner-shapes/06.png" alt="shape" className="banner-shape shape-6"/>
                <img src="/images/banner/banner-shapes/07.png" alt="shape" className="banner-shape shape-7"/>
                <img src="/images/banner/banner-shapes/08.png" alt="shape" className="banner-shape shape-8"/>
            </div>
        );
    }

    return (
        <FullWidthSection className={"banner-section"} extra={getShapes()}>
            <div className="row align-items-end">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <div className="intro-form">
                            <div className="intro-form-inner">
                                <h3>Introducing TuruLav</h3>
                                <p>
                                    Serious Dating With
                                    <strong>TuruLav </strong> Your Perfect Match is Just a Click Away.
                                </p>
                                <form action="/" className="banner-form">
                                    <div className="gender">
                                        <label htmlFor="gender" className="left">I am a </label>
                                        <div className="custom-select right">
                                            <select name="gender" id="gender" className="">
                                                <option value="0">Select Gender</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="person">
                                        <label htmlFor="gender-two" className="left">Looking for</label>
                                        <div className="custom-select right">
                                            <select name="gender" id="gender-two" className="">
                                                <option value="0">Select Gender</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="age">
                                        <label htmlFor="age" className="left">Age</label>
                                        <div className="right d-flex justify-content-between">
                                            <div className="custom-select">
                                                <select name="age-start" id="age">
                                                    <option value="1">18</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>

                                            <div className="custom-select">
                                                <select name="age-end" id="age-two">
                                                    <option value="1">18+</option>
                                                    <option value="2">19</option>
                                                    <option value="3">20</option>
                                                    <option value="4">21</option>
                                                    <option value="5">22</option>
                                                    <option value="6">23</option>
                                                    <option value="7">24</option>
                                                    <option value="8">25</option>
                                                    <option value="9">26</option>
                                                    <option value="10">27</option>
                                                    <option value="11">28</option>
                                                    <option value="13">29</option>
                                                    <option value="14">30</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="city">
                                        <label htmlFor="city" className="left">City</label>
                                        <input className="right" type="text" id="city"
                                               placeholder="Your City Name.."/>
                                    </div>
                                    <button className="">Find Your Partner</button>

                                </form>
                                <ul className="social-list">
                                    <li className="google"><a href="#">
                                        <img src="/images/banner/google.png" alt="img"/>
                                        <span>Continue with google</span>
                                    </a></li>
                                    <li className="facebook"><a href="
                                        #">
                                        <i className="icofont-facebook"/>
                                    </a></li>
                                    <li className="twitter"><a href="
                                        #">
                                        <i className="icofont-twitter"/>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-thumb">
                        <img src="/images/banner/01.png" alt="img"/>
                    </div>
                </div>
            </div>
        </FullWidthSection>
    );
};

export default HeroBanner;
