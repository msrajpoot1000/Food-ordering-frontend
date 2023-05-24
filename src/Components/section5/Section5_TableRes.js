import React from "react";
import '../overAllCss.css'
const Section5_TableRes = () => {
    return (
        <div>
            <div class="section5">
                <div class="section5_inside container">
                    <div id="section5_content_block" class="section5_block5_block">
                        <div class="word_contact">
                            --contact Us
                        </div>
                        <div class="line">
                            <div> Here You Can Make a Reservation</div>
                            <div>Or Walker to our cake</div>
                        </div>
                        <div class="content">
                            <div> Donec pretium est orci ,non voluptate arcu hundrerit a Fusce elelfend</div>
                            <div> riqsie nameei sollicuitidin sed commodo purus porta ut</div>
                        </div>
                        <div class="phone-email">
                            <div class="phone">
                                <div class="word_phone"> Phone Number</div>
                                <div class="phone_numbers">
                                    <div>9001074705</div>
                                    <div>8209171173</div>
                                </div>
                            </div>
                            <div class="email">
                                <div class="word_gmail"> Emails</div>
                                <div class="emails">
                                    <div>msrajpoot1000@gmail.com</div>
                                    <div>mukesh1150930@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="section5_form_block" class="section5_block5_block">
                        <form action="">
                            <div class="form_heading"> Table Reservation</div>
                            <div class="form_block1">
                                <input type="text" placeholder="Your Name"></input>
                                <input type="text" name="" id="" placeholder="Your Email"></input>
                                <input type="phone" placeholder="Phone Number"></input>
                                <input type="Number" placeholder="Number of Guest"></input>
                                <input type="text" placeholder="dd//mm//yy"></input>
                                <input type="text" placeholder="Time"></input>
                            </div>
                            <div class="form_block2">
                                <textarea name="" id="" cols="30" rows="8" placeholder="Message"></textarea>
                            </div>
                            <div class="form_block2">
                                <button>Make A Reservation</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section5_TableRes;