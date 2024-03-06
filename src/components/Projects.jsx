import { useEffect, useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { projectsData } from "./projectsData";

export default function Projects() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setFadeIn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`opacity-0 flex flex-col justify-center items-center m-5 ${fadeIn ? "fadeIn" : ""}`}>
      <h1 className="text-white text-4xl m-3">Here is my projects</h1>
      <Carousel className="rounded-xl w-8/12">
        {projectsData.map((project) => (
          <div className="relative h-full w-full" key={project.name}>
            <img
              width={"800px"}
              height={"200px"}
              src={project.image}
              alt="Project"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {project.description}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    <a href={project.url} target="blank">Try it yourself !</a>
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    <a href={project.github} target="blank">View on Github</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
