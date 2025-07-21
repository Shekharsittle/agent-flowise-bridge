import { SplitSection } from "@/components/SplitSection";
import agentLibraryImage from "@/assets/agent-library-bg.jpg";
import flowiseImage from "@/assets/flowise-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 z-30 p-8">
        <img 
          src="/lovable-uploads/42c5ce1b-be12-49f4-955e-f5bdbdc66211.png" 
          alt="relAI Logo" 
          className="h-32 w-auto object-contain filter drop-shadow-lg"
        />
      </header>

      {/* Split Screen Layout */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section - Flowise */}
        <SplitSection
          title="Flowise"
          description="Build and deploy powerful AI workflows with our visual node-based editor. Create complex automation with ease."
          image={flowiseImage}
          href="http://172.174.203.38:8128/"
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
