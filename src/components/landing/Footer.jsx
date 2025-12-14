import { NotebookPen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-300 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <NotebookPen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary font-mono">NoteBoard</span>
          </div>

          {/* Simple message */}
          <div className="text-center md:text-right">
            <p className="text-base-content/70 mb-2">
              Your modern platform for sharing thoughts with the world
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-2 text-sm text-base-content/50">
              <span>Made By Mohammed Ali with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for the writing community</span>
            </div>
          </div>
        </div>

        <div className="border-t border-base-content/10 mt-8 pt-8 text-center">
          <p className="text-base-content/50 text-sm">
            © 2025 NoteBoard. Open source project for writers and thinkers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;