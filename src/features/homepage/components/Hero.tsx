import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section>
      <div className="container mx-auto mt-28 flex flex-col-reverse items-center justify-between gap-y-8 md:mt-32 md:flex-row md:px-6">
        {/* left item */}
        <div className="md:basis-1/2">
          <div className="space-y-5">
            <h1 className="space-y-1 text-center text-2xl font-extrabold text-gray-800 sm:text-3xl md:text-left lg:text-4xl xl:text-5xl">
              <span className="block">
                Transforming <span className="text-green-600">Web3</span>
              </span>
              <span className="block">Visions into Reality</span>
            </h1>
            <p className="mx-auto max-w-md px-6 text-center text-sm md:mx-0 md:text-left md:text-base">
              Transform your Web3 project into a market leader with impactful,
              results-driven solutions.
            </p>
            <Button className="mx-auto block rounded-lg bg-green-600 px-6 py-3 text-sm text-white hover:bg-green-700 md:inline-block">
              Let’s Collaborate
            </Button>
          </div>
        </div>
        {/* right item */}

        <div className="px-10 md:basis-1/2">
          <img src="/hero.png" alt="" className="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
