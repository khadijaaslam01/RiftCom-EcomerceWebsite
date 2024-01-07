import React from "react";
import BottomHeader from "../components/header/BottomHeader";
import HeroSection from "../components/Home/HeroSection";
import PopularProduts from "../components/Home/PopularProducts";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <Layout>
      <BottomHeader />
      <HeroSection />
      <PopularProduts />
      <BestSellerProducts />
    </Layout>
  );
};

export default Home;
