import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Card from "../components/card";
import data from "../public/data.json";
import { useState } from "react";

export default function Home() {
  const [timeFrame, setTimeFrame] = useState("weekly");

  function handleOnClick(e) {
    setTimeFrame(e.target.value.toLowerCase());
  }

  return (
    <div className="bg-very-dark-blue text-white font-rubik font-normal px-6 lg:px-40 pt-20">
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

      <main className="sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:gap-8 mb-6">
        <div className="bg-dark-blue mb-6 sm:mb-0 rounded-lg sm:row-span-2">
          <div className="flex flex-col h-full">
            <header className="bg-blue p-8 sm:px-8 sm:pt-9 sm:pb-20 flex flex-row sm:flex-col gap-4 justify-start items-center sm:items-start rounded-lg grow-0 shrink basis-auto">
              <div className="p-0.5 bg-white w-16 h-16 rounded-cr sm:mb-10 mb-0">
                <Image
                  src="/images/image-jeremy.png"
                  alt="jeremy avator"
                  layout="responsive"
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <span className="block text-pale-blue text-sm sm:text-xs">
                  Report for
                </span>
                <span className="text-2xl md:text-4xl font-light">
                  <span className="sm:block">Jeremy</span> Robson
                </span>
              </div>
            </header>

            <div className="py-7 sm:py-0 px-0 sm:px-8 flex sm:flex-col justify-evenly items-start content-evenl text-pale-blue grow shrink basis-auto">
              <input
                className="focus:text-white hover:text-white hover:cursor-fancy"
                type="button"
                onClick={handleOnClick}
                value="Daily"
              />
              <input
                className={`focus:text-white hover:text-white hover:cursor-fancy ${timeFrame === 'weekly' ? 'text-white': ''}`}
                type="button"
                onClick={handleOnClick}
                value="Weekly"
              />
              <input
                className="focus:text-white hover:text-white hover:cursor-fancy"
                type="button"
                onClick={handleOnClick}
                value="Monthly"
              />
            </div>
          </div>
        </div>

        {data.map((item, index) => (
          <Card key={index} data={item} timeFrame={timeFrame} />
        ))}
      </main>

      <footer className="flex justify-center items-center py-6">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
