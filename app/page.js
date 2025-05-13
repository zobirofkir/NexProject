"use client";

import FeatureComponent from "@/src/components/FeatureComponent";
import FooterComponent from "@/src/components/FooterComponent";
import HeaderComponent from "@/src/components/HeaderComponent";
import HeroComponent from "@/src/components/HeroComponent";
import ProductComponent from "@/src/components/ProductComponent";
import TestimonialComponent from "@/src/components/TestimonialComponent";
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
