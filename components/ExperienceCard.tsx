import Link from "next/link";

const ExperienceCard = (props: any) => {
  const {
    title,
    company,
    date,
    location,
    companyDescription,
    website,
    accomplishments,
    stack,
  } = props;
  return (
    <div className="my-8">
      <div className="flex my-3">
        <h3 className="mr-1">
          {title}, {"\u00A0"}
          <Link href={website} target="_blank">
            <span className="underline">{company}</span>
          </Link>
        </h3>
      </div>
      <div className="flex">
        <h5 className="mr-2">
          {date}
          {"\u00A0"} · {"\u00A0"} {location}
        </h5>
      </div>
      <p className="my-3 whitespace-pre-wrap">{companyDescription}</p>
      <div className="my-3">
        <p>Accomplishments:</p>
        <div className="ml-4">
          <ul className="list-disc">
            {accomplishments.map((accomplishment: string, index: string) => (
              <li key={index}>
                <p>{accomplishment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-3">
        <p> Stack and processes:</p>
        <div className="ml-4">
          <ul className="list-disc">
            {stack.map((stackItem: string, index: string) => (
              <li key={index}>
                <p>{stackItem}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
