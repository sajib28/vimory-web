import React, { Component } from 'react';
//import mobileFrame from '../assets/img/mobile-frame.png';
//import mobileFrameEffect from '../assets/img/mobile-frame-effect.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
class Effect extends Component {
    render() {
        const displayTab =
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <div className="tab-content">
                    <TabPanel>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</TabPanel>
                    <TabPanel>Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.</TabPanel>
                </div>
            </Tabs>
        return (
            // Start Effect Section
            <section id="effect" >
                <div id="effectBg" className="photo-area">
                    <div class="pic-overlay"></div>
                    <div class="container">
                        <div className="row">
                            <div class="col-md-12">
                                <div class="title">
                                    <div class="title-inner">
                                        <h2>Effect</h2>
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
                                        <img src="" alt="" />
                                        <div className="mobile-frame-content">
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <h3>Effect</h3>
                                    <p>Vimory grasps the sense of your own expectations and has a variety of Particle Effects for you to choose to make your video more lucrative. We've created lots of particle effects so you can show off what you can do with your photos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-12">
                                {displayTab}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            // End Effect Section
        );
    }
}
export default Effect;