import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/constants/experience";

export default function Experience() {
  return (
    <main className="flex flex-col max-w-screen-lg w-full my-14">
      <h1 className="text-left ">Experience</h1>
      {experience.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          company={experience.company}
          date={experience.date}
          location={experience.location}
          website={experience.website}
          companyDescription={experience.companyDescription}
          accomplishments={experience.accomplishments}
          stack={experience.stack}
        />
      ))}
    </main>
  );
}
