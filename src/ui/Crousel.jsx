import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Crousel({
  children,
  autoPlay = true,
  itemClass,
  slidesToSlide = 1,
  responsive,
  className,
  showDots = false,
  renderDotsOutside = false,
  dotListClass = "",
  removeArrowOnDeviceType = ["tablet", "mobile"],
}) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={autoPlay}
      // autoPlaySpeed={1000}
      customTransition="all 1s"
      transitionDuration={1000}
      centerMode={false}
      className={`${className} Container flex w-[90%]`}
      dotListClass={dotListClass}
      draggable
      focusOnSelect={false}
      infinite
      itemClass={itemClass}
      // centerMode={true}
      keyBoardControl={true}
      minimumTouchDrag={0}
      pauseOnHover={true}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={renderDotsOutside}
      removeArrowOnDeviceType={removeArrowOnDeviceType}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={showDots}
      sliderClass=""
      slidesToSlide={slidesToSlide}
      swipeable
    >
      {children}
    </Carousel>
  );
}
export default Crousel;
