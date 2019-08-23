import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// import file or image
//import logo from '../../src/assets/images/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollingLock: false
        };
        // example how to bind object in React ES6
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {

        if (window.scrollY > 200) {
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 100) {
            this.setState({
                scrollingLock: false
            });
        }

    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {

        return (
            <nav style=
                {{
                    width: "100%", top: "0px", zIndex: "999", position: this.state.scrollingLock ? "static" : "absolute"
                }}
                className={this.state.scrollingLock ? 'fixedClass navbar navbar-expand-lg navbar-light header-area' : 'absoluteClass navbar navbar-expand-lg navbar-light header-area'}>
                <div className="container">
                    <Link to="/" href="index.html" className="navbar-brand">
                     logo
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                        aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navtogglerItemItem">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0" id="main-menu">
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="intro"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    className="nav-link">Intro
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="template"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    className="nav-link">Template
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="effect"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    className="nav-link">Effect
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="Slide"
                                    spy={true}
                                    smooth={true}
                                    offset={57}
                                    duration={500}
                                    className="nav-link">Slide
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Header;