import CourseSection from "@/components/CourseSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <CourseSection></CourseSection>
      <Testimonials></Testimonials>
      <Instructor></Instructor>
    </>
  );
}
