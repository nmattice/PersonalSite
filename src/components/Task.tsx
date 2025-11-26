import { useState } from "react";
import { CheckBoxOutlineBlank, Edit, CheckBox, Delete } from "@mui/icons-material";
import TextInput from "./TextInput";
import { type ToDo } from "../models/models";

type TaskProps = ToDo & {
    onDelete?: (id: number) => void,
    onToggleComplete: (id: number) => void,
    onEdit?: (id: number, newTitle: string) => void,
}

const Task = ({ title, id, isComplete, onDelete, onToggleComplete, onEdit }: TaskProps) => {
    const [editMode, setEditMode] = useState(false);

    const handleEditSubmit = (newTitle: string) => {
        if (newTitle && onEdit) {
            onEdit(id, newTitle);
            setEditMode(false);
        }
    };


  return (
    <div className={`flex justify-between m-2 p-2 ${isComplete ? 'bg-green-300 line-through' : 'bg-amber-300'}`}>
        {editMode ? (
            <TextInput initialValue={title} handleSubmit={handleEditSubmit} />
        ) : (
            <div className="flex items-center ml-1">{title}</div>
        )}
        
        <div className="flex gap-1">
            {onEdit && (
                <button onClick={() => setEditMode(!editMode)} className="hover:opacity-70">
                    <Edit />    
                </button>
            )}
            {onDelete && (
                <button onClick={() => onDelete(id)} className="hover:opacity-70">
                    <Delete />
                </button>
            )}
            <button onClick={() => onToggleComplete(id)} className="hover:opacity-70">
                {isComplete ? <CheckBox /> : <CheckBoxOutlineBlank />}
            </button>
        </div>
    </div>
  )
};

export default Task;
