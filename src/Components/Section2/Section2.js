import React from "react";
import aboutThumb1 from '../../images/about-thumb-01.jpg';
import aboutThumb2 from '../../images/about-thumb-02.jpg';
import aboutThumb3 from '../../images/about-thumb-03.jpg';
import videoBack from '../../images/about-video-bg.jpg';
import '.././overAllCss.css';
const Section2 = () => {
  return (
    <div>
      <section class="section2">
        <div class="section2_inside container">
          <div class="section2_content_block1">

            <div class="about_content_block1_item1">
              ---ABOUT US
            </div>
            <div class="section2_content_block1_item2">
              <div> WE LEAVE DELICIOUS</div>
              <div> MEMORRY FOR YOU </div>
            </div>
            <div class="section2_content_block1_item3">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nihil nostrum praesentium similique
                provident doloremque. Officia consequuntur doloribus quidem omnis eius aliquam voluptate magni
              </div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo consequuntur fuga tempore, laudantium
              </div>
            </div>
            <div class="section2_content_block1_item4">
              <div class="section2_content_block1_item4_img1">
                <img src={aboutThumb1} alt=""></img>
              </div>
              <div class="section2_content_block1_item4_img1">
                <img src={aboutThumb2} alt=""></img>
              </div>
              <div class="section2_content_block1_item4_img1">
                <img src={aboutThumb3} alt=""></img>
              </div>


            </div>
          </div>
          <div class="section2_picture_block2">
            <img width='100%' src={videoBack} alt=""></img>

          </div>

        </div>
      </section>



    </div>
  )
}
export default Section2;