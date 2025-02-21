import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="mx-auto h-[550px] max-w-[1600px] bg-[url('/hero7.jpg')] bg-cover bg-center md:h-[600px] xl:h-screen">
      <div className="flex h-full items-center justify-center bg-black bg-opacity-30">
        <div className="mt-14 space-y-6 px-4 lg:space-y-10">
          <h1 className="text-center text-2xl font-extrabold text-white sm:space-y-2 sm:text-3xl md:space-y-4 md:text-5xl xl:space-y-6 xl:text-6xl">
            <span className="block">
              Transforming <span className="text-green-400">Web3 Visions</span>
            </span>
            <span className="block"> into Reality.</span>
          </h1>
          <p className="mx-auto max-w-[300px] text-center text-[12px] text-gray-100 md:max-w-sm md:text-sm xl:max-w-[500px] xl:text-base">
            Transform your Web3 project into a market leader with impactful,
            results-driven solutions.
          </p>
          <Button className="mx-auto block rounded-lg bg-green-600 px-6 text-sm text-white hover:bg-green-700">
            Let’s Collaborate
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
