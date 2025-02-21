import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <section>
      <div className="container mx-auto mt-24 space-y-5 px-6 sm:mt-28 md:mt-32">
        {/* Heading */}
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl lg:text-4xl xl:text-5xl">
            About Me
          </h1>
          <div className="h-[2px] flex-1 rounded-full bg-gray-400"></div>
        </div>

        {/* content */}
        <div className="flex flex-col items-center gap-y-8 md:flex-row-reverse md:gap-x-20 md:gap-y-0">
          {/* Image */}
          <div className="md:basis-1/2">
            <img
              src="c.jpg"
              alt=""
              className="w-full rounded-md object-cover object-top md:h-[400px]"
            />
          </div>

          {/* Who am I */}

          <div className="space-y-6 md:basis-1/2">
            <h1 className="text-xl font-extrabold text-green-500">
              Who am I ?
            </h1>
            <p>
              I’m a Web3 enthusiast and content creator passionate about
              educating and engaging communities in the blockchain space.
              Through content writing, thread creation, and community
              moderation, I aim to make Web3 accessible and exciting for
              everyone.
            </p>

            <p>
              Whether you need a content creator, community moderator, or
              ambassador for your Web3 project, I’d love to help bring your
              vision to life.
            </p>
            <Button className="bg-green-500 hover:bg-green-600">
              <Link to="/contact-me"> Let’s Collaborate</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
