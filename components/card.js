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
    <div className={`${bgColorMap[data.title]} mb-6 dt:m-0 rounded-lg`}>
      <div className="h-10 rounded-t-lg flex justify-end pr-6">
        <Image
          src={`/images/icon-${data.title
            .toLowerCase()
            .split(" ")
            .join("-")}.svg`}
          alt="Vercel Logo"
          width={60}
          height={200}
        />
      </div>

      <div className="rounded-lg bg-dark-blue py-8 px-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">{data.title}</span>
          <span className="">
            <Image
              src="/images/icon-ellipsis.svg"
              alt="Vercel Logo"
              width={24}
              height={6}
            />
          </span>
        </div>

        <div className="flex flex-row dt:flex-col justify-between items-center dt:items-start mt-4">
          <span className="text-2xl font-light">
            {data.timeframes[timeFrame]["current"]}hrs
          </span>
          <span className="text-xs font-normal text-pale-blue">
            Last Week - {data.timeframes[timeFrame]["previous"]}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
