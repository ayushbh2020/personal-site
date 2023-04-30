import OverviewCard from "@/components/OverviewCard";
import Image from "next/image";
import { projects } from "@/constants/home";

interface Project {
  title: string;
  description: string[];
  type: string;
  screenshot: string;
  reverse?: boolean;
  link: string;
}

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-screen-lg px-4">
      <div className="flex flex-col items-center mb-8 md:mb-24">
        <div className="mx-20 md:m-0">
          <Image
            src="/profile.jpg"
            alt="profile pic"
            width={270}
            height={270}
            className="rounded-full border-black border-4 "
          />
        </div>
        <h3 className="text-center mt-8 px-6">
          I’m Ayush! I’m a builder, software engineer and bagel enthusiast studying
          management engineering at the University of Waterloo{" "}
        </h3>
      </div>
      {projects.map((project: Project, index: number) => (
        <OverviewCard
          key={index}
          title={project.title}
          description={project.description}
          type={project.type}
          screenshot={project.screenshot}
          reverse={project.reverse}
          link={project.link}
        />
      ))}
    </main>
  );
}
