import React from 'react';

const SearchMembersBoxWidget = () => {
    return (
        <div className="widget search-widget">
            <div className="widget-inner">
                <div className="widget-title">
                    <h5>Filter Search Member</h5>
                </div>
                <div className="widget-content">
                    <p>Serious Dating With TuruLav Your Perfect
                        Match is Just a Click Away.</p>
                    <form action="/" className="banner-form">
                        <div className="gender">
                            <div className="custom-select right w-100">
                                <select className="">
                                    <option value="0">I am a</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="person">
                            <div className="custom-select right w-100">
                                <select className="">
                                    <option value="0">Looking for</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="age">
                            <div
                                className="right d-flex justify-content-between w-100">
                                <div className="custom-select">
                                    <select>
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
                                    <select>
                                        <option value="1">36</option>
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
                            <div className="custom-select right w-100">
                                <select className="">
                                    <option value="0">Choose Your Country
                                    </option>
                                    <option value="1">USA</option>
                                    <option value="2">UK</option>
                                    <option value="3">Spain</option>
                                    <option value="4">Brazil</option>
                                    <option value="5">France</option>
                                    <option value="6">Newzeland</option>
                                    <option value="7">Australia</option>
                                    <option value="8">Bangladesh</option>
                                    <option value="9">Turki</option>
                                    <option value="10">Chine</option>
                                    <option value="11">India</option>
                                    <option value="12">Canada</option>
                                </select>
                            </div>
                        </div>
                        <div className="interest">
                            <div className="custom-select right w-100">
                                <select className="">
                                    <option value="0">Your Interests
                                    </option>
                                    <option value="1">Gaming</option>
                                    <option value="2">Fishing</option>
                                    <option value="3">Skydriving</option>
                                    <option value="4">Swimming</option>
                                    <option value="5">Racing</option>
                                    <option value="6">Hangout</option>
                                    <option value="7">Tranvelling</option>
                                    <option value="8">Camping</option>
                                    <option value="9">Touring</option>
                                    <option value="10">Acting</option>
                                    <option value="11">Dancing</option>
                                    <option value="12">Singing</option>
                                </select>
                            </div>
                        </div>
                        <button className="">Find Your Partner</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchMembersBoxWidget;
