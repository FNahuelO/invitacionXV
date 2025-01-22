import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import images from "../assets/carousel";

export default function CarouselComponent() {
  return (
    <Carousel className="w-4/5 mx-auto">
      <CarouselContent className="gap-10 mb-10" >
        {images?.map((img, idx) => (
          <CarouselItem key={idx}>
            <div className="rounded-md border-2 border-[#C89A0F] p-2 h-[65vh] w-[80vw] lg:w-[37rem]">
              <div className="bg-white p-2 rounded-md border-2 border-[#C89A0F] h-full">
                <img src={img} className="h-full w-full  object-contain" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
