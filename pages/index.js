import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-Very-dark-blue">
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

      <main className="pt-20">
        <div className="bg-blue">
          <div>
            <header>
              <span>
                <Image src="/images/image-jeremy.png" width={64} height={64} />
              </span>
              <h3>Report for</h3>
              <h1>Jeremy Robson</h1>
            </header>
          </div>
          <div className="">
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
          </div>
        </div>
        <div>
          <div>Work</div>
          <div></div>
        </div>
        5hrs Previous - 7hrs 32hrs Previous - 36hrs 103hrs Previous - 128hrs
        Play 1hr Previous - 2hrs 10hrs Previous - 8hrs 23hrs Previous - 29hrs
        Study 0hrs Previous - 1hr 4hrs Previous - 7hrs 13hrs Previous - 19hrs
        Exercise 1hr Previous - 1hr 4hrs Previous - 5hrs 11hrs Previous - 18hrs
        Social 1hr Previous - 3hrs 5hrs Previous - 10hrs 21hrs Previous - 23hrs
        Self Care 0hrs Previous - 1hr 2hrs Previous - 2hrs 7hrs Previous - 11hrs
      </main>

      <footer className="">
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
