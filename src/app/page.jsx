import Banner from "@/components/Banner";
import CourseCard from "@/components/CourseCard";
import CourseSection from "@/components/CourseSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <CourseSection></CourseSection>
      <Testimonials></Testimonials>
      <Banner></Banner>
    </>
  );
}
