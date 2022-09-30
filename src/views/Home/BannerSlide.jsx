import React from 'react'
import Slider from 'react-slick';

function BannerSlide() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    return (
        <div style={{ width: '1200px' }}>
            <Slider  {...settings}>
                <div >
                    {/* <h3 style={{color: 'white',textAlign: 'center'}}>1</h3> */}
                    <img style={{ width: '100%',height: '400px' }} src="https://wallpaperaccess.com/full/5923902.jpg" alt="" />
                </div>
                <div>
                <img style={{ width: '100%',height: '400px' }} src="https://wallpaperaccess.com/full/3358359.jpg" alt="" />
                </div>
                <div>
                <img style={{ width: '100%',height: '400px' }} src="https://i.pinimg.com/originals/ef/37/81/ef37815019ae52354c7c5772f4e886d6.png" alt="" />
                </div>
                <div>
                <img style={{ width: '100%',height: '400px' }} src="https://w0.peakpx.com/wallpaper/373/646/HD-wallpaper-lo-fi-sunset-chill-nature-relax.jpg" alt="" />
                </div>
                <div>
                <img style={{ width: '100%',height: '400px' }} src="https://i.pinimg.com/originals/26/6f/17/266f1731e0b4060fea5265efe6fa6d55.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default BannerSlide