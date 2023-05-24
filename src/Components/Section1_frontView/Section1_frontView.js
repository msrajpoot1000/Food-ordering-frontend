import React from 'react';
import slide1 from '../../images/slide-01.jpg';
import slide2 from '../../images/slide-02.jpg';
import slide3 from '../../images/slide-03.jpg';
import '.././overAllCss.css';
import Carousel from 'react-bootstrap/Carousel';
import './Section1_frontView.css';

const Section1_frontView = () => {
    return (
        <div>
            <section className="section1">
                <div className="container-fluid banner_spc_hide">
                    <div className="row">
                        <div className="col-sm-4 p-0">
                            <div className="banner-left">
                                <h4>KlassyCafe</h4>
                                <h6>THE BEST EXPERIENCE</h6>
                                <a href="">Make A Reservation</a>
                            </div>
                        </div>
                        <div className="col-sm-8 p-0 carousel">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={slide1} className="d-block " height="100%"></img>
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={slide2} className="d-block " height="100%"></img>
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={slide3} className="d-block " height="100%"></img>
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Section1_frontView;