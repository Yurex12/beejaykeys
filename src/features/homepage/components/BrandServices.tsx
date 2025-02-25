import { Button } from "@/components/ui/button";

import Card from "@/components/Card";

import { services } from "../constants";
import { useEffect } from "react";
import { getService, getServices } from "@/services/apiServices";

function BrandServices() {
  useEffect(() => {
    async function fetctData() {
      try {
        const res = await getServices();
        console.log(res);
        alert(res.message);
      } catch (error) {
        alert(error);
      }
    }

    fetctData();
  }, []);
  return (
    <section>
      <div className="container mx-auto mt-16 px-6 md:mt-20">
        {/* Heading */}
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-xl">
            We provide versatile Web3 services to help you navigate and succeed
            in the decentralized space.
          </p>
        </div>

        {/* services */}
        <div className="mt-4 grid grid-cols-1 gap-y-8 md:mt-6 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
          {services.map((service) => (
            <Card {...service} key={service.title}>
              <ul className="flex flex-1 flex-wrap gap-x-2 gap-y-4">
                {service.roles.map((role) => (
                  <li
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm"
                    key={role}
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <Button className="rounded-md bg-green-500 px-6 py-2 text-sm text-white shadow hover:bg-green-600 md:px-8 md:text-base">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BrandServices;
