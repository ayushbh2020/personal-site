import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <main className="flex flex-col max-w-screen-lg px-8 w-full my-14">
      <h1 className="text-left ">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          company={project.company}
          website={project.website}
          description={project.description}
          contributions={project.contributions}
          tech={project.tech}
        />
      ))}
    </main>
  );
}
