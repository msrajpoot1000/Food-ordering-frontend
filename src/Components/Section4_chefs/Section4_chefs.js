import React from "react";
import '../overAllCss.css'
import chef1 from "../../images/chefs-01.jpg";
import chef2 from "../../images/chefs-02.jpg";
import chef3 from "../../images/chefs-03.jpg";

const Section4_chefs = () => {
    return (
        <div>
            <div class="section4">
                <div class="section4_inside container">
                    <div id="section4_block1" class="section4_block">
                        Chiefs
                    </div>
                    <div id="section4_block2" class="section4_block">
                        <h3>We offer the best</h3>
                        <h3>ingredient for you</h3>
                    </div>



                    <div id="section4_block3" class="section4_block">
                        <div id="block1" class="block">
                            <div id="item11" class="item">
                                <img src={chef1} alt=""></img>
                            </div>
                            <div id="item11" class="item">
                                <div class="name">
                                    Randy Walker
                                </div>
                                <div class="work">
                                    pastry chief
                                </div>
                            </div>
                        </div>

                        <div id="block2" class="block">
                            <div id="item11" class="item">
                                <img src={chef2} alt=""></img>
                            </div>
                            <div id="item11" class="item">
                                <div class="name">
                                    Randy Walker
                                </div>
                                <div class="work">
                                    Cookie Chief
                                </div>
                            </div>
                        </div>

                        <div id="block3" class="block">
                            <div id="item11" class="item">
                                <img src={chef3} alt=""></img>
                            </div>
                            <div id="item11" class="item">
                                <div class="name">
                                    Peter Perkon
                                </div>
                                <div class="work">
                                    Pencake
                                </div>
                            </div>
                        </div>



                    </div>



                </div>
            </div>






        </div>
    )
}
export default Section4_chefs;