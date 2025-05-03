const btnMain = document.getElementById('btn-main');
const input = document.getElementById('input-box');
const taskMainDiv = document.getElementById('task-list');

let editingTaskP = null;

btnMain.addEventListener('click', function(){
    const inputBox = input.value.trim();
    if(!inputBox) return;  

    if(editingTaskP){
        editingTaskP.innerText = inputBox;
        editingTaskP = null;
        btnMain.innerText = 'Add';
        input.value = '';
        return;
    }

    // Create Task Div 
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-container');

    // Create Task Paragraph
    const taskP = document.createElement('p');
    taskP.classList.add('task-p');
    taskP.innerText = inputBox;
    taskDiv.appendChild(taskP)

    // Create Edit Button
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn')
    taskDiv.appendChild(editBtn)

    editBtn.addEventListener('click', function(){
        input.value = taskP.innerText;
        btnMain.innerText = 'Update';
        editingTaskP = taskP;
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.classList.add('remove-btn')
    taskDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(){
        taskMainDiv.removeChild(taskDiv)
    })

    taskMainDiv.appendChild(taskDiv);
    input.value = '';
    
});