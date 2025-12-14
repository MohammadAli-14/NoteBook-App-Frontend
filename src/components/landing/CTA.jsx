import { Link } from "react-router";
import { Star, Users, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <span className="text-gray-300">Rated 4.9/5 by writers worldwide</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Share Your Story?
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of writers who use NoteBoard to publish their thoughts, 
          share knowledge, and connect with readers around the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link 
            to="/app"
            className="btn btn-primary btn-lg px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <span>Start Publishing Free</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <Users className="h-5 w-5" />
          <span>Join 10,000+ writers already publishing on NoteBoard</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;