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
        pauseOnHover: false,
    };
    return (
        <div style={{ width: '1450px',borderRadius: '10px', margin:'auto' }}>
            <Slider  {...settings}>
                <div >
                    {/* <h3 style={{color: 'white',textAlign: 'center'}}>1</h3> */}
                    <img style={{ width: '100%', height: '400px', borderRadius: '10px' }} src="https://bizman.com.vn/storage/post/thumbnails/pano-quang-cao-b3c0c80a-45b6-4bd5-820a-54817f87dc72.jpg" alt="" />
                </div>
                <div>
                    <img style={{ width: '100%', height: '400px', borderRadius: '10px' }} src="https://inbienquangcao.vn/wp-content/uploads/2020/01/Kha%CC%81i-nie%CC%A3%CC%82m-bie%CC%82%CC%89n-qua%CC%89ng-ca%CC%81o-pano-ta%CC%82%CC%81m-lo%CC%9B%CC%81n-ngoa%CC%80i-tro%CC%9B%CC%80i.jpg" alt="" />
                </div>
                <div>
                    <img style={{ width: '100%', height: '400px', borderRadius: '10px' }} src="https://kynguyengroup.com/wp-content/uploads/2017/09/d26976b9d8e420ba79f5.jpg" alt="" />
                </div>
                <div>
                    <img style={{ width: '100%', height: '400px', borderRadius: '10px' }} src="http://cdn-gd-v1.webbnc.net/useruploads/userfiles//506940/images/kich-thuoc-bien-quang-cao-ngoai-troi-3.jpg" alt="" />
                </div>
                <div>
                    <img style={{ width: '100%', height: '400px', borderRadius: '10px' }} src="https://showroomdecor.com.vn/wp-content/uploads/2022/05/bien-quang-cao-dung-0.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default BannerSlide