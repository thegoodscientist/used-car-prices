import Image from "next/image";
import { Carousel } from "flowbite-react";

export type imagesInSlider = {
  img: string;
};

export default function CarouselComponent({
  data,
}: {
  data: imagesInSlider[];
}) {
  return (
    <section className="px-1 mx-auto pt-20 pb-8 relative bg-white bg-cover">
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden rounded-lg">
          <Carousel slideInterval={5000}>
            {data.map((item: imagesInSlider, index: number) => {
              return (
                <div
                  className="duration-700 ease-in-out flex-col py-8"
                  data-carousel-item
                  key={index}
                >
                  <div className="relative w-full h-20 mr-4">
                    <Image
                      src={item.img}
                      alt="..."
                      className="object-cover"
                      fill
                      rel="preload"
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
