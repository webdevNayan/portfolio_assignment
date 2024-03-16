import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../src/Redux/userSlice'; 
import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  const dispatch = useDispatch();

  // Dispatch the action when the component mounts
  useEffect(() => {
    dispatch(fetchUser('65b3a22c01d900e96c4219ae'));
  }, [dispatch]);

  return (
    <Layout>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners />
      {/* /PARTNERS */}
      {/* NEWS */}
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
