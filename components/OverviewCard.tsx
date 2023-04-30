import Image from "next/image";
import Link from "next/link";

const OverviewCard = (props: any) => {
  const { title, description, type, screenshot, reverse, link } = props;
  return (
    <div className="flex items-center mb-12 flex-col md:flex-row">
      <div
        className={`flex-1 flex flex-col mt-4 md:mt-0  ${
          reverse ? "order-2 lg:ml-20" : "order-1 lg:mr-20"
        } `}
      >
        <div className="flex flex-row items-center mb-6 justify-center md:justify-start">
          <Link href={link} target="_blank">
            <h3 className="underline mr-4">{title}</h3>
          </Link>
          <div className=" bg-navy h-8 px-4 items-center justify-center flex">
            <p className=" text-white text-xs">
              {type == "project" ? "PROJECT" : "INTERNSHIP"}
            </p>
          </div>
        </div>

        <div className="whitespace-pre-wrap text-center md:text-left  mx-8 md:mx-0">
          {description.map((paragraph: string) => (
            <p className="mb-4"> {paragraph}</p>
          ))}
        </div>
        <Link href="/projects" className="justify-center flex md:justify-start">
          <button className="bg-navy text-white h-12 px-3 flex justify-center items-center mt-4 button">
            View My {type == "project" ? "Projects" : "Experience"}
          </button>
        </Link>
      </div>
      <div
        className={`flex flex-1 items-center justify-center  relative m-8 md:m-0  ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={screenshot}
          alt="profile pic"
          width={550}
          height={100}
          className="border-black border-4 object-cover"
        />
      </div>
    </div>
  );
};

export default OverviewCard;
