import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Card from "../components/card";

import { useState } from "react";

import data from "../public/data.json";

export default function Home() {
  const [timeFrame, setTimeFrame] = useState("daily");

  function handleOnClick (e) {
    setTimeFrame(e.target.value);
  }

  return (
    <div className="bg-very-dark-blue text-white font-rubik font-normal">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />

        <title>Frontend Mentor | Time tracking dashboard</title>
      </Head>

      <main className="pt-20 px-6 dt:grid dt:grid-cols-4 dt:grid-rows-3 dt:gap-8">
        <div className="bg-dark-blue mb-6 dt:mb-0 rounded-lg dt:row-span-2">
          <div className="">
            <header className="bg-blue p-2 px-8 dt:px-8 dt:pt-9 dt:pb-20 flex flex-row dt:flex-col gap-4 justify-start items-center dt:items-start rounded-lg">
              <div className="p-0.5 bg-white w-16 h-16 rounded-cr dt:mb-10 mb-0">
                <Image
                  src="/images/image-jeremy.png"
                  alt="jeremy avator"
                  layout="responsive"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <span className="block text-pale-blue">Report for</span>
                <span className="text-base dt:text-2xl font-light">
                  <span className="dt:block">Jeremy</span> Robson
                </span>
              </div>
            </header>
          </div>
          <form className="py-7 dt:py-0 px-0 dt:px-8 flex dt:flex-col justify-around dt:justify-between items-start text-lg text-pale-blue">
            <button className="focus:text-white" type="button" value="daily" onClick={handleOnClick}>
              Daily
            </button>
            <button className="focus:text-white" type="button" value="weekly" onClick={handleOnClick}>
              Weekly
            </button>
            <button className="focus:text-white" type="button" value="monthly" onClick={handleOnClick}>
              Monthly
            </button>
          </form>
        </div>

        {data.map((item, index) => (
          <Card key={index} data={item} timeFrame={timeFrame} />
        ))}
      </main>

      <footer className="flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
