import React, {useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './About.css'
import axios from "axios";
import {API} from "../../utils/const";

function About() {

    return (
        <div className="bodyAbout">
        <div className="timeline">
            <h1 className="timeline-title">
            Về chúng tôi
            </h1>
            <div className="container clearfix">
                <div className="secondaryContainer clearfix">
                    <div className="diamondImgHolderLeft">
                        <div className="diamond">
                            <img  style={{transform: 'rotate(-0deg)'}} src="https://st2.depositphotos.com/3591429/10464/i/950/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg" alt="Ada Lovelace: superwoman" className="timelineImageLeft" />
                        </div>
                    </div>
                    <div className="timelineTextRight">
                        <h3>Chúng tôi là ai?</h3>
                        <p>ACN là agency chuyên về Digital Marketing có văn phòng đặt tại Buôn Ma Thuột. Sứ mệnh của chúng tôi là cung cấp các giải pháp Digital Marketing phù hợp nhất nhằm giúp cho hoạt động kinh doanh của doanh nghiệp đạt được hiệu quả.</p>
                    </div>
                    <div className="middleLine" />
                    <div className="horizLeft1" />
                    <div className="horizRight1" />
                    <div className="horizLeft2" />
                    <div className="diamondImgHolderRight">
                        <div className="diamond">
                            <img style={{transform: 'rotate(-0deg)'}} src="https://img.freepik.com/premium-photo/about-us-multicolor-inscription-white-brick-wall-with-doodle-icons-around-about-us-concept-modern-style-illustration-with-doodle-design-icons-about-us-white-brickwall-background_226262-1853.jpg?w=2000" alt="Rosie the Riviter" className="timelineImageRight" />
                        </div>
                    </div>
                    <div className="timelineTextLeft">
                        <h3>GIẢI PHÁP HIỆU QUẢ</h3>
                        <p>Với đội ngũ chuyên nghiệp, đầy năng lượng và có tâm, ACN cung cấp các giải pháp hiệu quả từ chiến lược truyền thông, sáng tạo nội dung, thiết kế hình ảnh đến các công cụ truyền thông như website, landing page, quảng cáo tối ưu chi phí… </p>
                    </div>
                    <div className="diamondImgHolderLeft">
                        <div className="diamond">
                            <img style={{transform: 'rotate(-0deg)'}} src="https://www.impactplus.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="Kathleen Hanna: Riot Grrl" className="timelineImageLeft" />
                        </div>
                    </div>
                    <div className="timelineTextRight">
                        <h3>ĐỒNG HÀNH PHÁT TRIỂN</h3>
                        <p>Với các doanh nghiệp vừa và nhỏ, thì làm sao để chiến lược thực thi có ngân sách hợp lý, nhưng vẫn hài hòa với xu thế và thị trường là bài toán khó, đòi hỏi rất nhiều chất xám, thời gian công sức. Thấu hiểu điều ấy, ACN cung cấp các giải pháp website và marketing, đồng hành cùng doanh nghiệp trong việc tối ưu nguồn nhân lực, giảm thiểu chi phí vận hành.</p>
                    </div>
                </div>
            </div>
        </div>

        </div>


    )
}

export default About