import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation } from 'swiper/modules';
import profile from '../assets/profile.jpg';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  const iconData = [
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />,
    <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '50px' }} />
  ];

  return (
    <div className='carousel-container'>
      <Swiper
        modules={[Virtual, Navigation]}
        slidesPerView={8}
        spaceBetween={15}
        navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
        style={{marginTop:'40px'}}
        virtual
      >
        {iconData.map((cardData, index) => (
          <SwiperSlide key={index}>
            {cardData}
            <span>Neelesh</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='arrow-left arrow'>
        <KeyboardArrowLeftIcon />
      </div>
      <div className='arrow-right arrow'>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
};

export default Carousel;



// import React from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, IconButton, Box } from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import profile from '../assets/profile.jpg';

// const iconData = [
//   <img src={profile} alt='profile' width={60} height={60} style={{ borderRadius: '20px' }} />,
//   <img src={profile} alt='profile' width={25} height={25} style={{ borderRadius: '20px' }} />,
//   <img src={profile} alt='profile' width={100} height={100} style={{ borderRadius: '20px' }} />,
//   <img src={profile} alt='profile' width={25} height={25} style={{ borderRadius: '20px' }} />,
//   <img src={profile} alt='profile' width={80} height={80} style={{ borderRadius: '20px' }} />
// ];

// const SmallIconCarousel = () => {
//   return (
//     <Carousel
//       autoPlay={false}
//       navButtonsAlwaysInvisible={true}
//       animation="slide"
//       indicators={false}
//       timeout={500}
//     >
//       {iconData.map((item, index) => (
//         <Paper key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <IconButton color="primary" size="small">
//             {item}
//           </IconButton>
//         </Paper>
//       ))}
//     </Carousel>
//   );
// };

// export default SmallIconCarousel;
