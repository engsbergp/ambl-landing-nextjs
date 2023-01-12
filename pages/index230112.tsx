import type { NextPage } from "next";
import { Parallax } from "react-scroll-parallax";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { useEffect, useState, useRef } from "react";

const Home: NextPage = () => {
  // let yOffset: number;
  // let opacityRange: number;

  // const [scrolling, setScrolling] = useState(false);
  // const [cardHeight, setCardHeight] = useState(0);
  // const [scrollY, setScrollY] = useState(0);
  // const [initialCardPosition, setInitialCardPosition] = useState();
  // const [cardOpacity, setCardOpacity] = useState(0);

  // const cardRef = useRef(null);

  // const [ref, inView, entry] = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });

  // //collect scrolling information
  // useEffect(() => {
  //   function onScroll() {
  //     let currentPosition = window.pageYOffset;
  //     if (currentPosition > scrollY) {
  //       setScrolling(false);
  //     } else {
  //       setScrolling(true);
  //     }
  //     setScrollY(currentPosition <= 0 ? 0 : currentPosition);
  //   }
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // });

  // //get card position
  // useEffect(() => {
  //   setInitialCardPosition(window.pageYOffset);
  // }, [inView]);

  // //get card height
  // useEffect(() => {
  //   setCardHeight(cardRef.current.getBouningClientRect());
  // }, []);

  // // change the opacity for the card
  // useEffect(() => {
  //   if (!inView) return;
  //   else {
  //     let opacityMap = (cardHeight + scrollY) / initialCardPosition;
  //     setCardOpacity(opacityMap);
  //   }
  // }, [scrollY]);

  // //log the variables
  // useEffect(() => {
  //   // console.log(`scrolling ${scrolling}`);
  //   console.log(`cardHeight ${cardHeight}`);
  //   console.log(`cardOpacity ${cardOpacity}`);
  // }, [scrollY]);

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

      <div className="flex flex-col items-center justify-center pb-20">
        <img
          className="rounded-lg drop-shadow-md"
          src="/landing_animation.gif"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-10 mb-10">
        <p className="text-5xl text-slate-50 font-light">Share who you are</p>
        <p className="p-text px-36">
          Showcase your artwork, memories, and favorite content in the way YOU
          want them seen. Playlyst lets you cast from your device to any smart
          TV.
          {/* AnyCast is an NFT aggrigator, gathering collections of digital artwork
          from across the entire web3 ecosystem. The NFT community is rapidly
          growing in different spaces and blockchains, and AnyCast is proud to
          sit between such an immersive and engaging group of artists,
          collectors, curators, and brands. */}
        </p>
      </div>
      <div className="flex w-full items-center justify-center mb-5">
        <img className="h-[500px]" src="./phone-preview.png" />
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 mb-5">
        <p className="text-5xl text-slate-50 font-light">Any device.</p>
        <p className="p-text px-36">
          We connect artists, collectors, curators, and brands
        </p>
      </div>
      {/* <div>
        <div
          // ref={ref}
          // style={{ opacity: cardOpacity }}
          className="flex content-center justify-center grid gap-6 px-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mb-20"
        >
          <Parallax speed={5}>
            <div>
              <Card></Card>
            </div>
          </Parallax>
          <Parallax speed={5}>
            <div>
              <Card></Card>
            </div>
          </Parallax>
          <Parallax speed={5}>
            <div>
              <Card></Card>
            </div>
          </Parallax>
          <Parallax speed={5}>
            <div>
              <Card></Card>
            </div>
          </Parallax>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center space-y-10 relative">
        <div className="curve1"></div>
      </div>

      <div className="bg-slate-50 h-96 flex flex-col items-center justify-center space-y-10">
        <p className="text-5xl text-black-50 font-light">
          Built on Web3. Built for Web2
        </p>
        <p className="text-lg text-black-50 font-light px-36">
          Collectable entertainment is the future. AnyCast takes the frustration
          out of the blockchain, and gives users an immediate visual experience.
          We invite anyone to enjoy digital artwork from artists across the
          world.
        </p>
      </div>

      <div className="pb-44 flex flex-col items-center justify-center space-y-10">
        <p className="text-5xl text-slate-50 font-light">Real NFT Utility</p>
        <p className="p-text">
          Show artwork on any device. No expensive frames.
        </p>
        <p className="p-text">
          Show artwork on any device. No expensive frames.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
