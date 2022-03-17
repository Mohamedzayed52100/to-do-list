let theinput = document.querySelector('.add_task input');
let theAddButton = document.querySelector('.add_task .plus');
let taskscontainer = document.querySelector('.tasks_content');
let tasksCount = document.querySelector('.task_count span');
let tasksComplete = document.querySelector('.task_completed span');

let noTasksMessage = document.querySelector('.tasks_content .notaskmessage');

window.onload = function() {
    theinput.focus();
}
theAddButton.onclick = function() {
    if (theinput.value === '') {
        console.log('no value');

    } else {
        if (document.body.contains(document.querySelector('.noTasksMessage'))) {
            noTasksMessage.remove();
        }
        noTasksMessage.remove();
        let mainSpan = document.createElement('span');
        let deletespan = document.createElement('span');
        let text = document.createTextNode(theinput.value);
        let delete_text = document.createTextNode('Delete');
        mainSpan.appendChild(text);
        mainSpan.className = 'taskbox';
        deletespan.appendChild(delete_text);
        deletespan.className = 'delete';
        mainSpan.appendChild(deletespan);
        taskscontainer.appendChild(mainSpan);
        theinput.value = '';
        theinput.focus();


    }

}




function createnotasks() {
    let msgspan = document.createElement('span');
    let txt = document.createTextNode('no Tasks Message to show');
    msgspan.appendChild(txt);
    mainSpan.className = 'notaskmessage';
    taskscontainer.appendChild(msgspan);
}
document.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        e.target.parentNode.remove();
        console.log(taskscontainer.childElementCount);

        if (taskscontainer.childElementCount == 0) {
            createnotasks();
        }


    }
    if (e.target.classList.contains('taskbox')) {
        e.target.classList.toggle('finished');
    }
    calculateTasks();


});



function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll('.tasks_content .taskbox').length;
    tasksComplete.innerHTML = document.querySelectorAll('.tasks_content .finished').length;

}