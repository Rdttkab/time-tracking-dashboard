import Image from "next/image";

const Card = ({ data, timeFrame }) => {
  const bgColorMap = {
    Work: "bg-light-red-work",
    Play: "bg-soft-blue-play",
    Study: "bg-light-red-study",
    Exercise: "bg-lime-green-exercise",
    Social: "bg-violet-social",
    "Self Care": "bg-soft-orange-self-care",
  };

  return (
    <div
      className={`${
        bgColorMap[data.title]
      } mb-6 sm:mb-0 rounded-xl flex flex-col`}
    >
      <div className="h-10 rounded-xl flex justify-end pr-6 grow-0 shrink basis-auto">
        <Image
          src={`/images/icon-${data.title
            .toLowerCase()
            .split(" ")
            .join("-")}.svg`}
          alt={`${data.title} logo`}
          width={60}
          height={200}
        />
      </div>

      <div className="rounded-xl bg-dark-blue py-8 px-6 grow shrink basis-auto hover:cursor-fancy hover:bg-desaturated-blue">
        <div className="flex justify-between items-center">
          <span className="text-lg font-normal">{data.title}</span>
          <span>
            <svg className="fill-pale-blue hover:fill-white hover:cursor-fancy" width="24" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              />
            </svg>
          </span>
        </div>

        <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start mt-10">
          <span className="text-4xl font-light">
            {data.timeframes[timeFrame]["current"]}hrs
          </span>
          <span className="text-xs font-normal text-pale-blue mt-2">
            Last Week - {data.timeframes[timeFrame]["previous"]}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
