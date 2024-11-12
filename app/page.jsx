import Hero from '@/components/home/Hero';
import Influencer from '@/components/home/Influencer';
import Monetization from '@/components/home/Monetization';
import Started from '@/components/home/Started';
import Tab from '@/components/home/Tab';
import Tourism from '@/components/home/Tourism';
import Faq from '@/components/home/Faq';
import React from 'react'

const Home = () => {
  return (
   <>
    <Hero />
    <Tab />
    <Tourism />
    <Monetization />
    <Influencer />
    <Started />
    <Faq />
   </>
  );
};

export default Home;

