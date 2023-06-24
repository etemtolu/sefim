import Image from 'next/image';
import { Carousel, PrevButton, NextButton } from 'nuka-carousel';

const CustomPrevButton = ({ currentSlide, slideCount, ...props }) => (
  <PrevButton {...props}>
    Custom Previous
  </PrevButton>
);

const CustomNextButton = ({ currentSlide, slideCount, ...props }) => (
  <NextButton {...props}>
    Custom Next
  </NextButton>
);

const CarouselSlider = ({ images }) => {
  const carouselSettings = {
    heightMode: 'first',
    slidesToShow: 1,
    slidesToScroll: 1,
    height: 200,
    prevButtonClassName: 'custom-prev-button',
    nextButtonClassName: 'custom-next-button',
    renderPrevButton: () => <CustomPrevButton />,
    renderNextButton: () => <CustomNextButton />,
  };

  return (
    <Carousel {...carouselSettings}>
      {images.map((image, id) => (
        <Image key={id} src={image} alt={`Slide ${id}`} />
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
