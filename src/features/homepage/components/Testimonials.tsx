import { useTestimonials } from "@/features/AdminTestimonials/hooks/useTestimonials";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  const { testimonials, error, isLoading } = useTestimonials();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  if (!testimonials?.length) return <p>No data found</p>;

  return (
    <section>
      <div className="container mx-auto mt-20 px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-8">
          <h1 className="text-xl font-extrabold capitalize text-gray-800 sm:text-3xl md:text-left lg:text-4xl xl:text-5xl">
            Testimonials
          </h1>
          <div className="hidden h-[2px] flex-1 rounded-full bg-gray-700 md:block"></div>
          <p>See why so many choose Beejay keys.</p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView={1.2}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          loop={false}
          className="mx-auto mt-2 flex items-center justify-center py-4 md:mt-5"
          breakpoints={{
            768: {
              slidesPerView: 2.2,
            },
            969: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial._id}
              className="swiper-slide h-auto space-y-4 rounded-md border border-gray-200 p-5"
            >
              {/* heading */}
              <div className="flex items-center gap-x-4">
                <span
                  className={`rounded-full px-4 py-2 text-white ${testimonial.color === "red" && "bg-red-700"} ${testimonial.color === "gray" && "bg-gray-700"} ${testimonial.color === "yellow" && "bg-yellow-700"}`}
                >
                  {testimonial.name.charAt(0)}
                </span>
                <p className="text-md font-extrabold text-gray-800">
                  {testimonial.name}
                </p>
              </div>
              {/* content */}
              <p className="text-xs md:text-sm">{testimonial.review}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination container below the slider */}
        <div className="custom-pagination mt-4 text-center"></div>
      </div>
    </section>
  );
}

export default Testimonials;
