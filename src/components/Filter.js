import React, { Component } from 'react'
import mobileFrame from '../assets/img/mobile-frame.png';
import mobileFrameFilter from '../assets/img/mobile-frame-filter.png';
class Filter extends Component {
    render() {
        return (
            <section id="filter">
            <div id="filterBg" className="photo-area">
                <div class="pic-overlay"></div>
                <div class="container">
                    <div className="row">
                        <div class="col-md-12">
                            <div class="title">
                                <div class="title-inner">
                                <h2>Filter</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-area">
                <div class="container">
                    <div className="row">
                        <div className="photo-content">
                            <div class="col-md-5">
                                <div className="mobile-frame">
                                    <img src={mobileFrame} alt="" />
                                    <div className="mobile-frame-content">
                                        <img src={mobileFrameFilter} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h3>Filter</h3>
                                <p>Vimory has clusters for unique & advanced filters to make you more beautiful & manifest video moments an eye-shocking outlook to get more exposure on Facebook & Instagram. Manipulate your photo like the way you want with the help of so many pre-set filter. To make your photo more dramatic try filtering option and see the result.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // End Filter Section
        )
    }
}
export default Filter;