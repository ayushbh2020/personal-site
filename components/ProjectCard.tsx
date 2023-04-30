import Link from "next/link";

const ProjectCard = (props: any) => {
  const { company, description, website, contributions, tech } = props;
  return (
    <div className="my-8">
      <div className="flex my-3">
        <Link href={website} target="_blank">
          <h3 className="underline"> {company} </h3>
        </Link>
      </div>
      <p className="my-3 whitespace-pre-wrap">{description}</p>
      <div className="my-3">
        <p>Key Contributions:</p>
        <ul className="list-disc">
          {contributions.map((contribution: string, index: string) => (
            <li key={index}>
              <p>{contribution}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <p>APIs and Technologies </p>
        <ul className="list-disc">
          {tech.map((techItem: string, index: string) => (
            <li key={index}>
              <p>{techItem}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
