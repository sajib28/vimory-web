import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SliderCom extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section id="feedback">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <Slider {...settings}>
                            <div>
                                <h3>Saul Goodman 1</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                            </div>
                            <div>
                                <h3>Saul Goodman 2</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                            </div>
                            <div>
                                <h3>Saul Goodman 3</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        );

    }
}
export default SliderCom;