"use client";

import FeatureComponent from "@/components/FeatureComponent";
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import HeroComponent from "@/components/HeroComponent";
import ProductComponent from "@/components/ProductComponent";
import TestimonialComponent from "@/components/TestimonialComponent";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <FeatureComponent />
      <ProductComponent />
      <TestimonialComponent />
      <FooterComponent />
    </>  
  );
}
