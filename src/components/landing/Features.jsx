import { Globe, Edit3, Trash2, Eye, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Edit3 className="h-8 w-8 text-primary" />,
      title: "Write & Publish",
      description: "Create beautiful notes and publish them as blog posts instantly. Your thoughts deserve a beautiful home."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Share with World",
      description: "Make your notes public and share them with anyone. Perfect for blogging, documentation, or personal journals."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "View Anytime",
      description: "Access your published notes from any device, anywhere. Your content is always available when inspiration strikes."
    },
    {
      icon: <Trash2 className="h-8 w-8 text-primary" />,
      title: "Full Control",
      description: "Edit or delete your published notes anytime. You have complete control over your content and its visibility."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Private",
      description: "Choose what to publish and what to keep private. Your unpublished notes remain securely in your personal space."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Built for speed with modern technology. Create, publish, and manage your notes in real-time without delays."
    }
  ];

  return (
    <section className="py-20 bg-base-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Share Your Thoughts
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A modern platform designed for writers, thinkers, and creators who want to share their ideas with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card bg-base-100 hover:shadow-lg transition-all duration-300 border-t-4 border-solid border-primary"
            >
              <div className="card-body">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="card-title text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-base-content/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;