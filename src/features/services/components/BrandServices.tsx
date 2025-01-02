import { services } from "../constants";
import Service from "./Service";

function BrandServices() {
  return (
    <section>
      <div className="container mx-auto mt-24 px-6 md:mt-28">
        <h1 className="text-center text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center">
          We provide versatile Web3 services to help you navigate and succeed in
          the decentralized space.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-y-8 md:mt-6 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
          {services.map((service) => (
            <Service {...service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandServices;
