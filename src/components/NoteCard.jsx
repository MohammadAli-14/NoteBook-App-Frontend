import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // Prevent navigation when deleting
    e.stopPropagation(); // Stop event from bubbling

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D] hover:scale-105">
      
      {/* Main content area - Click to view/edit */}
      <Link 
        to={`/app/note/${note._id}`}
        className="card-body flex-1 hover:bg-base-200 transition-colors cursor-pointer"
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="card-title text-base-content flex-1">{note.title}</h3>
          <div className="flex items-center gap-1 text-base-content/40">
            <PenSquareIcon className="size-4" />
            <span className="text-xs">Click to edit</span>
          </div>
        </div>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
      </Link>

      {/* Actions footer - Only Delete button now */}
      <div className="flex justify-between items-center p-4 border-t border-base-300 bg-base-200">
        <span className="text-sm text-base-content/60">
          {formatDate(new Date(note.createdAt))}
        </span>
        <div className="flex items-center gap-2">
          {/* Only Delete button remains */}
          <button
            className="btn btn-ghost btn-xs text-error hover:bg-error hover:text-error-content transition-colors"
            onClick={(e) => handleDelete(e, note._id)}
            title="Delete note"
          >
            <Trash2Icon className="size-4" />
            <span className="ml-1 hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NoteCard;