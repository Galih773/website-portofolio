import React, { useState } from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    const slideStylesWidthBackground = {
      ...slideStyles,
      backgroundImage: `url(${process.env.PUBLIC_URL+slides[currentIndex].url})`,
    };

  return (
    <div className='relative h-[100%] z-[1]' >
      <div>
        <div onClick={goToPrevious} className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-0 text-[45px] text-[#efef0b] z-[1] cursor-pointer'>
          <FaAngleLeft />
        </div>
        <div onClick={goToNext} className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-0 text-[45px] text-[#efef0b] z-[1] cursor-pointer'>
          <FaAngleRight />
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className='flex justify-center'>
        {slides.map((slide, slideIndex) => (
          <div
            className='mb-[3px] cursor-pointer text-[20px] text-white'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider