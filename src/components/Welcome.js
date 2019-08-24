import React, { Component } from 'react';
import Header from './Header';
import appleStore from '../assets/img/apple-app-store.png';
import googlePlay from '../assets/img/apple-app-store.png';

class Welcome extends Component {
    render() {

        return (
            // Start Intro Section 
            <div>
            <Header/>
            <section id="intro" className="back-img">
                <div className="container">
                    <div className="col-md-8">
                        <div className="title">
                            <div className="title-inner">
                                <h1>Perfect Memory<br />Creator</h1>
                            </div>
                        </div>
                        <p>Fun and fast, Vimory will help your social media posts<br />
                            stand out from the crowd; perfect for Facebook news feed,<br />
                            stories & profile video and Instagram feed & story.</p>

                        <ul>
                            <li><a href="/"><img src={appleStore} alt="Google App" /></a></li>
                            <li><a href="/"><img src={googlePlay} alt="Play Store" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
            // End Intro Section
        );
    }
}
export default Welcome;