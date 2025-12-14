import { Link } from "react-router";
import { NotebookPen, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <NotebookPen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary font-mono">NoteBoard</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/app"
              className="btn btn-primary px-6 py-2 flex items-center space-x-2"
            >
              <span>Go to App</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Publish Your Thoughts, 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Share Your World
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            NoteBoard is your modern platform for creating, publishing, and managing notes. 
            Transform your thoughts into beautiful blog-style posts that you can share with the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/app"
              className="btn btn-primary btn-lg px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Writing Now
            </Link>
            <Link 
              to="/app"
              className="btn btn-outline btn-lg px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              View Public Notes
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;