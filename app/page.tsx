import Image from "next/image";
import { Seymour_One } from "next/font/google";
import globe from "@/app/assets/vectors/globge.svg";
import Link from "next/link";
import Authorization from "@/components/HOC/Auth";

//fonts
const seymour_One = Seymour_One({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <Authorization>
      <main className="h-full">
        <header className="mt-10 px-4 sm:px-10  text-white text-2xl sm:text-3xl flex justify-end font-bold">
          <Link
            href={"/"}
            className={`${seymour_One.className} bg-white text-black rounded-full  flex items-center justify-center sm:w-[70px] sm:h-[70px] h-[50px] w-[50px] `}
          >
            S
          </Link>
        </header>

        <section className="w-full p-4 h-full justify-center items-center flex relative flex-col">
          <Image
            src={globe}
            alt="globe"
            className="absolute w-[1000px] opacity-[0.1] mx-auto sm:mt-64"
          />

          <div className="w-full flex flex-col justify-center z-20">
            <h1
              className={
                "text-center mt-20 sm:mt-40 text-2xl sm:text-5xl font-bold sm:font-semibold text-white"
              }
            >
              Check Who Clicks Your Links 🔗
            </h1>
            <p className="text-center leading-7 text-slate-200 max-w-[600px] mt-5 mx-auto">
              Welcome to my URL shortener project! Easily shorten links and
              explore your audience's locations. Optimize your sharing
              experience and have fun tracking clicks. Join me in this journey
              of discovery! 🚀
            </p>

            <Link
              href={"auth/login/?route=login"}
              className="bg-white active:bg-white/75 text-black mx-auto px-9 py-2 mt-5 rounded-lg"
            >
              Login
            </Link>
          </div>
        </section>

        <footer className="absolute w-full bg-white/5 justify-center flex py-5 bottom-0  border-white/20 border-t-[0.5px]">
          {/* <h1
          className={`${seymour_One.className} bg-white text-black rounded-full   h-[35px] flex items-center justify-center w-[34px] `}
        >
          S
        </h1> */}
          <p className="text-white text-white/50">&copy;Strike Urls</p>
        </footer>
      </main>
    </Authorization>
  );
}
