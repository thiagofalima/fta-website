import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import Wrapper from "./Wrapper";
// Import Swiper styles

interface IProduct {
  title: string;
  description: string;
  imgPath: string;
}

const Product = ({ title, description, imgPath }: IProduct) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      <img className="product" src={imgPath} />
    </Wrapper>
  );
};

export const Products = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {productsInformation.map(({ title, description, imgPath }) => {
        return (
          <SwiperSlide>
            <Product
              title={title}
              description={description}
              imgPath={imgPath}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const productsInformation = [
  {
    id: 1,
    title: "Automações RPA",
    description: "Automações RPA",
    imgPath: "#",
  },
  {
    id: 2,
    title: "Aplicações Web",
    description: "Aplicações Web",
    imgPath: "#",
  },
  {
    id: 3,
    title: "Sites / E-commerce",
    description: "Sites / E-commerce",
    imgPath: "#",
  },
];
