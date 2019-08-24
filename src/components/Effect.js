import React, { Component } from 'react';
//import mobileFrame from '../assets/img/mobile-frame.png';
//import mobileFrameEffect from '../assets/img/mobile-frame-effect.png';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
class Effect extends Component {
    render() {
        const displayTab =
            <Tabs defaultIndex={2} onSelect={index => console.log(index)}>
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
                    <div className="pic-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <div className="title-inner">
                                        <h2>Effect</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-area">
                    <div className="container">
                        <div className="row">
                            <div className="photo-content">
                                <div className="col-md-5">
                                    <div className="mobile-frame">
                                        <img src="" alt="" />
                                        <div className="mobile-frame-content">
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h3>Effect</h3>
                                    <p>Vimory grasps the sense of your own expectations and has a variety of Particle Effects for you to choose to make your video more lucrative. We've created lots of particle effects so you can show off what you can do with your photos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {displayTab}
                                <div className="solar-system">
<div id="sun"></div>
<div className="orbit mercury-orbit"></div>
<div className="mercury-spin">
<div id="mercury"></div>
</div>
<div className="orbit venus-orbit"></div>
<div className="venus-spin">
<div id="venus"></div>
</div>
<div className="orbit earth-orbit"></div>
<div className="earth-spin">
<div className="orbit moon-orbit"></div>
<div className="moon-spin">
<div id="moon"></div>
</div>
</div>
<div className="orbit mars-orbit"></div>
<div className="mars-spin">
<div id="mars"></div>
</div>
</div>
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