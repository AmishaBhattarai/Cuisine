import React from "react";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  Autoplay,
  EffectCards,
} from "swiper/modules";

export default function Carousel() {
  const images = [
    {
      src: "https://th.bing.com/th/id/R.d119f29bacb5400b452bf38009df2b2a?rik=mr1p4qy847YTRw&pid=ImgRaw&r=0",
      off: "First order 20% off",
    },
    {
      src: "https://www.thebalancesmb.com/thmb/uxKwFVNp-6WM4q7NrqVzUsS6CW4=/3300x2096/filters:fill(auto,1)/cropped-image-of-hand-taking-food-912173760-5be8229146e0fb00268b3863.jpg",
      off: "30% off Burger",
    },
    {
      src: "https://th.bing.com/th/id/R.ace369c9b83e75ae7a0d66bc2ed40155?rik=afQ2MFQm48N9IA&riu=http%3a%2f%2ftopreviewtracking.com%2fwp-content%2fuploads%2f2015%2f04%2fDollarphotoclub_61600915.jpg&ehk=sb6bI%2bwAnNxYoJ47Rmu%2bGeqjU7Qsvz71aI7aabEClR0%3d&risl=1&pid=ImgRaw&r=0",
      off: "60% off Pizza",
    },

    {
      src: "https://th.bing.com/th/id/R.346dbb0f197b700a2d2bee708ddb747a?rik=A4cHs8Lj8BVSeQ&riu=http%3a%2f%2fi1.nyt.com%2fimages%2f2015%2f12%2f16%2fdining%2f16TOPDISHES-slide-F26S%2f16TOPDISHES-slide-F26S-superJumbo.jpg&ehk=zrvQpjYRLA9Xe6yMP%2bAXXw%2f71j%2beNO62fFHziJYWn50%3d&risl=&pid=ImgRaw&r=0",
      off: "20% off Biryani",
    },
    {
      src: "https://th.bing.com/th/id/OIP.69rjb8RK6Ll76DPMqvgc7gHaFj?rs=1&pid=ImgDetMain",
      off: "40% off Sandwich",
    },
  ];
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect={"cards"}
      grabCursor={true}
      modules={[Autoplay, EffectCards]}
      className="mySwiper h-full"
    >
      {images.map((m, i) => (
        <SwiperSlide key={i}>
          <img
            className="bg-cover h-full"
            src={m.src}
            alt={i}
          />
          <figure className="bg-red-500 h-16 w-32 absolute text-sm right-4 top-4 pl-4 rounded-full text-white font-semibold p-2 grid items-center">
            <span>{m.off}</span>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
