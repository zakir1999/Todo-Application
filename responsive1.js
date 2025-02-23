class taskmanger{
    constructor (){
        this.tasks=[];
        this.loadTask();
        this.bindEvents();
    }
    loadTask(){ //load task from local storage.
        const storedTasks=JSON.parse(localStorage.getItem("tasks"))||[];
        this.tasks=storedTasks;
        this.updateStates();
        this.updateTaskList();

    }
    saveTasks(){ //save task into json.
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
    }
    addTasks(){// add new tasks
        const taskinput=document.getElementById("task-input");
        const text=taskinput.value.trim();
        if(text){
            this.tasks.push({text:text,completed:false});
            taskinput.value="";
            this.saveTasks();
            this.updateTaskList();
            this.updateStates();

        }
    }
    toggleTaskComplete(index){ //checkbox tasklist
        this.tasks[index].completed=!this.tasks[index].completed;
        this.updateStates();
        this.updateTaskList();
        this.saveTasks();

    }
    deleteTask(index){ //Delete Task from tasks list.
        this.tasks.splice(index,1);
        this.updateStates();
        this.saveTasks();
        this.updateTaskList();
    }
    editTask(index){ //Edit Task
        const taskInput=document.getElementById("task-input");
        taskInput.value=this.tasks[index].text;
        this.tasks.splice(index,1);
        this.updateStates();
        this.updateTaskList();
        this.saveTasks();
    }
    updateStates(){
        const completedTasks=this.tasks.filter((task)=> task.completed).length;
        const totalTasks=this.tasks.length;
        const progress=totalTasks?(completedTasks/totalTasks)*100:0;
        const progressBar=document.getElementById("progress");
        progressBar.style.width=`${progress}%`;
        document.getElementById("numbers").innerText=`${completedTasks}/${totalTasks}`;
        if(totalTasks && completedTasks === totalTasks){
            this.blast();
            this.tasks=[];
            this.updateTaskList();
            this.updateStates();
            this.saveTasks();
        }
    }
    updateTaskList() {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";
        this.tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <div class="taskItem">
                    <div class="task ${task.completed ? "completed" : ""}">
                        <input type="checkbox" class="checkbox" ${
                            task.completed ? "checked" : ""
                        }/>
                        <p>${task.text}</p>
                    </div>
                    <div class="icons">
                        <img src="./img/edit.png" onclick="taskManager.editTask(${index})"/>
                        <img src="./img/bin.png" onclick="taskManager.deleteTask(${index})"/>
                    </div>
                </div>
            `;
            listItem.querySelector(".checkbox").addEventListener("change", () => this.toggleTaskComplete(index));
            taskList.append(listItem);
        });
    }
    bindEvents(){
        document.getElementById("newTask").addEventListener("click",(e)=>{
            e.preventDefault();
            this.addTasks();
        });
    }
    blast(){
        alert("Congratulation Zakir hossen ! All tasks completed!");
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["star"],
            colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
          };
          
          function shoot() {
            confetti({
              ...defaults,
              particleCount: 40,
              scalar: 1.2,
              shapes: ["star"],
            });
          
            confetti({
              ...defaults,
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
            });
          }
          
          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
    }
    



}