import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Import the Hero component
import heroImage from "./assets/hero-background.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#292B3A]">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Designings That Tell Your Story"
        subtitle="Branding, web design, and digital experiences"
        ctaText="What We Do"
        ctaLink="/services"
        backgroundImage={heroImage}
      />

      {/* You can add other sections here, like Services or Portfolio */}
    </div>
  );
}

export default App;
