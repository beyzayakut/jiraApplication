import {useState} from 'react';

function TaskCreate({onCreate}){
    const [title,setTitle]= useState('');
    const [taskDesc,setTaskDesc]= useState('');

    const handleChange=(event)=>{
        setTitle(event.target.value);
    };
    const handleTaskChange=(event)=>{
        setTaskDesc(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault(); //bu sayede butona tıklandıgına ekran surekli refresh olmaz oylece kalır
        onCreate(title,taskDesc);
        setTitle(''); //text alanı ıcındekileri siler
        setTaskDesc('');
    }
    
    return (
        <div className="task-create">
            <h3>Lütfen Task Giriniz!</h3>
            <form className="task-form">
            <label className="task-label">Başlık</label>
            <input value={title} onChange={handleChange} className="task-input"/>
            <label className="task-label">Task Giriniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5} />
            <button className="task-button" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>
    );
}

export default TaskCreate;