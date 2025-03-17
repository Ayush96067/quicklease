import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Crousel({ children, autoPlay = true, itemClass, slidesToSlide = 1 }) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={autoPlay}
      // autoPlaySpeed={1000}
      customTransition="all 1s"
      transitionDuration={1000}
      centerMode={false}
      className="Container flex w-[90%]"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass={itemClass}
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover={true}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={slidesToSlide}
      swipeable
    >
      {children}
    </Carousel>
  );
}
export default Crousel;
