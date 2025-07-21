import { SplitSection } from "@/components/SplitSection";
import logo from "@/assets/logo.png";
import agentLibraryImage from "@/assets/agent-library.png";
import flowiseImage from "@/assets/flowise.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="absolute top-0 right-0 z-30 p-6">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-12 w-12 object-contain filter drop-shadow-lg"
        />
      </header>

      {/* Split Screen Layout */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section - Flowise */}
        <SplitSection
          title="Flowise"
          description="Build and deploy powerful AI workflows with our visual node-based editor. Create complex automation with ease."
          image={flowiseImage}
          href="https://flowise.com"
          gradient="flowise"
          className="order-2 lg:order-1"
        />

        {/* Right Section - Agent Library */}
        <SplitSection
          title="Agent Library"
          description="Discover and deploy pre-built AI agents for various tasks. Accelerate your AI implementation journey."
          image={agentLibraryImage}
          href="https://agents.com"
          gradient="agent"
          className="order-1 lg:order-2"
        />
      </div>
    </div>
  );
};

export default Index;
