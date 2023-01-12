import type { NextPage } from "next";
import { AiFillGithub } from "react-icons/ai";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "animate.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Playlyst</title>
        <link rel="icon" href="/anyCast_favicon.svg" />
      </Head>
      <Header />
      <div className="pt-[35vh] pb-[35vh] ">
        <div className="flex flex-col items-center justify-center space-y-8 animate__animated animate__fadeInUp animate__slow">
          <h2 className="text-5xl text-slate-50 font-light">
            Any Media. Anywhere.
          </h2>
          <h1 className="p-text">Video and Image Playlist Creation Suite</h1>
          <button className="outline  mt-10 outline-amber-500 bg-slate-400/20 text-slate-50 rounded-lg py-2 px-4 transition hover:bg-amber-500 hover:outline-amber-500">
            View App On Expo Store
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 relative">
        <div className="curve1"></div>
      </div>

      <div className="flex flex-col bg-slate-50 items-center justify-center text-center space-y-10 pb-16">
        <div className="flex flex-col items-center justify-center pb-5 mt-10 mb-10">
          <img
            className="rounded-lg drop-shadow-lg"
            src="/landing_animation.gif"
          />
        </div>

        <div className=" flex flex-col items-center justify-center space-y-10">
          <p className="text-5xl text-slate-900 font-light px-8">
            Who you are. Where you are.
          </p>
          <p className="lg:px-48 px-16 text-slate-900">
            Showcase your artwork, memories, and favorite content in the way YOU
            want them seen. Playlyst lets you cast from your device to any smart
            TV.
          </p>
        </div>

        <div className="flex w-full items-center justify-center">
          <img
            // className="sm:h-[300px] lg:h-[500px]"
            className="h-[500px]"
            src="./phone-preview.png"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-10">
          <p className="text-5xl text-black font-light">
            Your device. To your device.
          </p>
          <p className="p-text-black lg:px-48 px-16">
            Playlyst currently supports media directly from your phone, and
            YouTube. Create customizable visual playlists to compliment your
            music on Spotify, YouTube, Tidal, or simply use Playlyst to give
            your day the scenery it needs to succeed.
          </p>
        </div>
      </div>
      {/* ---------------------------------------------- */}

      <div className="flex flex-col items-center justify-center text-center space-y-10 pt-24">
        <p className="text-5xl text-slate-50 font-light">
          Built for Web2. Building for Web3
        </p>
        <p className="text-lg text-slate-50 font-light lg:px-48 px-20">
          Collectable entertainment is the future. Playlyst aims to takes the
          frustration out of the blockchain, and give users an immediate visual
          experience.
        </p>
      </div>

      <div className="pb-24 flex flex-col items-center justify-center space-y-10">
        <button className="flex flex-row items-center justify-center outline mt-10 outline-amber-500 bg-slate-400/20 text-slate-50 rounded-lg py-2 px-4 transition hover:bg-amber-500 hover:outline-amber-500 gap-3">
          <AiFillGithub className="text-2xl" />
          View Open Source Code
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
