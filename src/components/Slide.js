import React, { Component } from 'react';

//import mobileFrame from '../assets/img/mobile-frame.png';
//import mobileFrameSlide from '../assets/img/mobile-frame-slide.png';
class Slide extends Component {
    
    render() {
        return (
            <section id="Slide">
                <div id="SlideBg" className="photo-area">
                    <div class="pic-overlay"></div>
                    <div class="container">
                        <div className="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <div class="title-inner">
                                    <h2>Slide</h2>
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
                                <div class="col-md-7">
                                    <h3 className="wow slideInLeft">Slide</h3>
                                    <p>Vimory understands your need for animation slides to create looping slideshow video moments. Select a video animation slide that suits your needs and the story you want to give an impact.Try it now and share it with your friends.</p>
                                </div>
                                <div class="col-md-5">
                                    <div className="mobile-frame">
                                        <img src="" alt="" />
                                        <div className="mobile-frame-content">
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Effect Section
        )
    }
}
export default Slide;