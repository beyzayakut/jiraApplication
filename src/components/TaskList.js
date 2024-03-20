import TaskShow from './TaskShow';
import { useContext} from 'react';
import TasksContext from '../context/task';


function TaskList() {
  const {tasks}=useContext(TasksContext)
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow key={index} task={task}/>;
      })}
    </div>
  );
}

export default TaskList;