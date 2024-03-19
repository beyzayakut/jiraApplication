import { useState } from 'react';
import TaskCreate from './TaskCreate';

function TaskShow({task, onDelete ,onUpdate}) {
    const [showEdit,setShowEdit]=useState(false)
    const [editedTask, setEditedTask] = useState(task); // Mevcut görevin düzenlenmiş kopyasını saklayacağız

    const handleDeleteClick=()=>{
        onDelete(task.id);
    };
    const handleEditClick=()=>{
        console.log(showEdit);
        setShowEdit(!showEdit);
    };

    const handleUpdate = () => {
        onUpdate(editedTask); // Düzenlenmiş görevi güncelleme işlevine geçirin
        setShowEdit(false); // Düzenleme modunu kapat
    };

    const handleChange = (event) => {
        // inputların değişikliklerini takip eden bir fonksiyon
        const { name, value } = event.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    return (
    <div className="task-show">
        {showEdit ? (
           <div>
            <TaskCreate task={editedTask} onCreate={handleUpdate} taskformUpdate={true} />
            <button onClick={handleEditClick}>İptal</button>
           </div>
    ) : (
        <div>
            <h3 className="task-title">Göreviniz</h3>
            <p>{task.title}</p>
            <h3 className="task-title">Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <div>
                <button className="task-delete" onClick={handleDeleteClick}>Sil</button>
                <button className="task-edit" onClick={handleEditClick}>Güncelle</button>
            </div>
        </div>
    )}
    </div>
);
}

export default TaskShow;