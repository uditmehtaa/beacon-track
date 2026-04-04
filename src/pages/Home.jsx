import CTA from "./CTA";
import Features from "./Features";
import Hero from "./Hero";
import Solutions from "./Solution";
import Whybeakontrack from "./Whybeacontrack";
import { useEffect } from "react";

export default function Home() {
  return (
     useEffect(() => {
        window.scrollTo(0, 0); 
      }, []),
    <>
          <Hero />
          <Features/>
          <Solutions />
          <Whybeakontrack />
          <CTA/>
          </>
  )
}