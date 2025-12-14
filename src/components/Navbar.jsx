import { Link } from "react-router";
import { PlusIcon, Home } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          {/* App Logo - Links to App Home */}
          <Link to="/app" className="flex items-center space-x-2">
            <Home className="h-4 w-4 text-primary" />
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">NoteBoard</h1>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Landing Page Navigation */}
            <Link 
              to="/" 
              className="btn btn-ghost btn-sm text-primary hover:bg-primary hover:text-primary-content transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Landing Page</span>
            </Link>
            
            {/* Create New Note - Only in Navbar */}
            <Link to={"/app/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;