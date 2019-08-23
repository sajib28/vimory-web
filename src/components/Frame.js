import React, { Component } from 'react'
import mobileFrameImage from '../assets/img/frame-img.png';
class Frame extends Component {
    render() {
        return (
            <section id="frame">
                <div id="frameBg" className="photo-area">
                    <div class="pic-overlay"></div>
                    <div class="container">
                        <div className="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <div class="title-inner">
                                    <h2>Frame</h2>
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
                                    <h3>Frame</h3>
                                    <p>Frame your captive looping film with a specified and colorful looking frame. Choose the frame (birthdays, weddings, friendship, seasonal, traveling or others) from Vimory that fits perfectly for your story or film and makes it interesting.</p>
                                </div>
                                <div class="col-md-5">
                                    <div className="mobile-frame">
                                        <img src={mobileFrameImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End Frame Section
        )
    }
}
export default Frame;