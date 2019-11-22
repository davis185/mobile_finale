function generateTask(){
  task_name = document.querySelector("#taskName").value;
  resizable = document.querySelector("#resizable");
  resizable.innerHTML = resizable.innerHTML +
    "<div class='task'>" +
    "<div class='taskName'>" + task_name + "</div>" +
    "<div class='taskDelete' onclick='removeTask(this)'>X</div>" +
    "</div>";
}

function removeTask(x){
  x.innerHTML = "Y";
  resizable = document.querySelector("#resizable");
  tasks = document.querySelectorAll(".taskDelete");
  tasksName = document.querySelectorAll(".taskName");
  resizable.innerHTML = "";
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].innerHTML != "Y"){
      resizable.innerHTML = resizable.innerHTML +
        "<div class='task'>" +
        "<div class='taskName'>" + tasksName[i].innerHTML + "</div>" +
        "<div class='taskDelete' onclick='removeTask(this)'>X</div>" +
        "</div>";
    }
  }
}
