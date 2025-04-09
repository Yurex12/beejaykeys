import LinkButton from "@/components/LinkButton";
import { ReactNode } from "react";

export default function BrandServicesContainer({
  children,
}: {
  children: ReactNode;
}) {
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
          {children}
        </div>

        {/* Button */}
        <div className="mt-10">
          <LinkButton name="Get started" to="/contact-me" />
        </div>
      </div>
    </section>
  );
}
