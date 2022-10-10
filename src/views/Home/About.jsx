import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './About.css'

function About() {


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div className="timeline">
            <h1 className="timeline-title">
                About Us
            </h1>
            {/*<div class="gradient3"></div>*/}
            <div className="container clearfix">
                <div className="secondaryContainer clearfix">
                    <div className="diamondImgHolderLeft">
                        <div className="diamond">
                            <img src="http://www.unicornfeminism.com/images/Ada_Lovelace_portrait.jpg" alt="Ada Lovelace: superwoman" className="timelineImageLeft" />
                        </div>
                    </div>
                    <div className="timelineTextRight">
                        <h3>Ada Lovelace</h3>
                        <p>Not only was Ada Lovelace the first ever female programmer - she was the first programmer in general. As a mathematician and writer, her notes on Charles Babbage's "mechanical general purpose computer" are now recognised as the first computerised algorithm.</p>
                    </div>
                    <div className="middleLine" />
                    <div className="horizLeft1" />
                    <div className="horizRight1" />
                    <div className="horizLeft2" />
                    <div className="diamondImgHolderRight">
                        <div className="diamond">
                            <img src="http://unicornfeminism.com/images/rosie_riviter.jpg" alt="Rosie the Riviter" className="timelineImageRight" />
                        </div>
                    </div>
                    <div className="timelineTextLeft">
                        <h3>We can do it!</h3>
                        <p>World War II saw a surge of women working in technology and trade driven roles made famous by Rosie the Riveter. However, this was a short-lived phenomenon. After the war most women returned to their previous roles as homemakers.</p>
                    </div>
                    <div className="diamondImgHolderLeft">
                        <div className="diamond">
                            <img src="http://unicornfeminism.com/images/kathleen_hanna.jpg" alt="Kathleen Hanna: Riot Grrl" className="timelineImageLeft" />
                        </div>
                    </div>
                    <div className="timelineTextRight">
                        <h3>The Beginnings of Cyberfeminism</h3>
                        <p>While Kathleen Hanna was forming the foundations of the Riot Grrl scene in the mid-90s, a Cyberfeminist subculture was forming online. Developed by  feminist scholars and researchers, Cyberfeminism grew out of a need for women to define how the internet and digital spaces affect gender biases.</p>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default About