import { ReactNode } from "react";

export default function FaqsContainer({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className="container mx-auto my-4 px-6 md:mt-10">
        <h1 className="text-center text-xl font-extrabold text-gray-600">
          Frequently asked questions
        </h1>

        {children}
      </div>
    </section>
  );
}
