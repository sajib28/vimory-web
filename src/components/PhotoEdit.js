import React, { Component } from 'react'
import mobileFrame from '../assets/img/mobile-frame.png';
import mobileFrameEffect from '../assets/img/mobile-frame-photo-edit.png';
class PhotoEdit extends Component {
    render() {
        return (
            <section id="photoEdit">
                <div id="photoEditBg" className="photo-area">
                    <div class="pic-overlay"></div>
                    <div class="container">
                        <div className="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <div class="title-inner">
                                    <h2>Photo Edit</h2>
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
                                            <img src={mobileFrameEffect} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <h3>Photo Edit</h3>
                                    <p>Try professional photo editing tools to edit single or multiple photos for adjustments, beautify or an ideal photogenic outlook.</p>
                                    <ul>
                                        <li><i class="far fa-clone"></i>Modern photo cropping tools allow you to crop your photo more easily.</li>
                                        <li><i class="far fa-clone"></i>Express the moment with emoji and do more with it.</li>
                                        <li><i class="far fa-clone"></i>So many options like Exposure, Brightness, Contrast, Saturation,Warmth, highlights that give you a professional photo editing experience.</li>
                                        <li><i class="far fa-clone"></i>Vimory gives you the power  to focus on a specific area of your photo.</li>
                                        <li><i class="far fa-clone"></i>So many filters to enhance your look.</li>
                                    </ul>
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
export default PhotoEdit;