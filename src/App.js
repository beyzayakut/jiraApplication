import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList'; 

function App() {
  const [tasks,setTasks]=useState([])
  const createTask=(title,taskDesc)=>{
    const createdTasks=[
    ...tasks,{ //bu spread operatoru var olan eski taskları alır ve buraya kopyalar bizde bunun üstünden işlem yaparak yeni bir dizi olustururuz.
      id: Math.round(Math.random()*999999), //yeni idler olusturur
      title:title, //buradaki key ve value degerleri aynı oldugu icin sadece title da yazılabilir
      taskDesc:taskDesc
    }
   ];
   setTasks(createdTasks);
  };

const deleteTaskById=(id)=>{ //silme işlemi gerçekleşir
  const afterDeletingTasks= tasks.filter((task)=>{
    return task.id!==id;
  })
  setTasks(afterDeletingTasks);
};

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} /> 
    </div>
  );
}

export default App;
