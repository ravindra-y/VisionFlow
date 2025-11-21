import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import DashboardFeatures from "../components/DashboardFeatures/DashboardFeatures";
import ExploreChhattisgarh from "../components/ExploreChhattisgarh/ExploreChhattisgarh";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ExploreChhattisgarh />
      <Features />
      <DashboardFeatures />
    </>
  );
};

export default HomePage;
