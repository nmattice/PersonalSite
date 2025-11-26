import { useSelector, useDispatch } from "react-redux";
import TextInput from "./components/TextInput";
import Task from "./components/Task";
import { add, remove, toggleComplete, edit, selectCompletedTasks, selectIncompleteTasks } from "./todoSlice";
import type { RootState } from "./redux/store";

const App = () => {
  const completedTasks = useSelector((state: RootState) => selectCompletedTasks(state));
  const incompleteTasks = useSelector((state: RootState) => selectIncompleteTasks(state));
  const dispatch = useDispatch();

  const handleTaskSubmit = (name: string) => dispatch(add(name));
  const handleDelete = (id: number) => dispatch(remove(id));
  const handleToggleComplete = (id: number) => dispatch(toggleComplete(id));
  const handleEdit = (id: number, title: string) => dispatch(edit({ id, title }));

  return (
    <>
      <header className="flex bg-gray-800 justify-center p-4 text-white text-xl font-semibold">
        Task Tracker
      </header>
      <main className="flex flex-col bg-gray-100 min-h-screen">
        <TextInput placeholder="Enter Task Here" handleSubmit={handleTaskSubmit} />
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-gray-700 text-lg">Incomplete ({incompleteTasks.length})</h2>
            {incompleteTasks.map((toDo) => (
              <Task {...toDo} onToggleComplete={handleToggleComplete} onDelete={handleDelete} onEdit={handleEdit} key={toDo.id} />
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-gray-700 text-lg">Complete ({completedTasks.length})</h2>
            {completedTasks.map((toDo) => (
              <Task {...toDo} onToggleComplete={handleToggleComplete} onDelete={handleDelete} onEdit={handleEdit} key={toDo.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
};

export default App
