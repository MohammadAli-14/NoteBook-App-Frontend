import { useState } from "react";
import Navbar from "../../components/Navbar";
import RateLimitedUI from "../../components/RateLimitedUI";
import { useEffect } from "react";
import api from "../../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../../components/NoteCard";
import NotesNotFound from "../../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        console.log("Fetching notes...");
        const res = await api.get("/notes");
        console.log("Notes received:", res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Clean Header Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Notes ({notes.length})
          </h2>
          <p className="text-gray-400">
            Click on any note to view and edit. Use the navbar to create new notes or return to the landing page.
          </p>
        </div>

        {loading && (
          <div className="text-center text-primary py-10">
            <div className="loading loading-spinner loading-lg text-primary"></div>
            <p className="mt-4">Loading your notes...</p>
          </div>
        )}

        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;