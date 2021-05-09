import React from 'react';
import FullWidthSection from "../../layout/sections/FullWidthSection";
import FullWidthListFilter from "../../forms/filters/FullWidthListFilter";

const MemberListBlock = () => {
    return (
        <FullWidthSection
            className={"member-page-section"}
            header={FullWidthListFilter}
            wrapperClassName={"member-wrapper"}
        >
            <>
                <ul className="member-info mb-4">
                    <li className="all-member">
                        <p>All Members </p>
                        <p>20 365 587</p>
                    </li>
                    <li className="member-cat">
                        <div className="custom-select right w-100">
                            <select name="member" id="member-cat" className="">
                                <option value="0">Newest Registerd</option>
                                <option value="1">Oldest</option>
                                <option value="2">Popular</option>
                                <option value="3">Most Active</option>
                            </select>
                        </div>
                    </li>
                </ul>
                <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/01.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Tenma Shyna</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/02.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Maya Statham</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/03.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Cristina Maria</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/04.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Gaurav-Singh</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/05.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Gihan-Fernando</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/06.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/07.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Sweet Admin</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/08.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Gyan-Baffour</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/09.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Zeahra Maria</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/10.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/11.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/12.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/13.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/14.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/15.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/16.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/17.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/18.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/19.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lab-item member-item style-1 style-2">
                            <div className="lab-inner">
                                <div className="lab-thumb">
                                    <img src="/images/member/20.jpg" alt="member-img"/>
                                </div>
                                <div className="lab-content">
                                    <h6><a href="profile.html">Andrea Guido</a></h6>
                                    <p>Active 1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paginations">
                    <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                        <li>
                            <a href="#"><i className="icofont-rounded-double-left"/></a>
                        </li>
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">...</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                        <li>
                            <a href="#"><i className="icofont-rounded-double-right"/></a>
                        </li>
                    </ul>
                </div>
            </>
        </FullWidthSection>
    );
};

export default MemberListBlock;
