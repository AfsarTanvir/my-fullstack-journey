import { readFileSync } from "fs";
const rw = readFileSync("big_test_data.json");
const data = JSON.parse(rw);

function searchSubtasks(tasks01) {
    let sum = 0;
    for (let i = 0; i < tasks01.length; ++i) {
        sum += tasks01[i].estimateHours + searchSubtasks(tasks01[i].subtasks);
    }
    return sum;
}

function searchTasks(tasks) {
    let sum = 0;
    for (let i = 0; i < tasks.length; ++i) {
        sum += searchSubtasks(tasks[i].subtasks);
    }
    return sum;
}

function searchProjects(projects, Id) {
    let sumOfTime = 0;
    for (let i = 0; i < projects.length; ++i) {
        if (projects[i].id === Id) {
            return searchTasks(projects[i].tasks);
        }
    }
    return sumOfTime;
}

function searchTeams(teams, Id) {
    let sum = 0;
    for (let i = 0; i < teams.length; ++i) {
        sum = searchProjects(teams[i].projects, Id);
        if (sum) 
            return sum;
    }
    return 0;
}

function searchDepartments(departments, Id) {
    let sum = 0;
    for (let i = 0; i < departments.length; ++i) {
        sum = searchTeams(departments[i].teams, Id);
        if (sum) 
            return sum;
    }
    return 0;
}

function SearchCompanies(comp, Id) {
    let sum = 0;
    for (let i = 0; i < comp.length; ++i) {
        sum = searchDepartments(comp[i].departments, Id);
        if (sum) 
            return sum;
    }
    return 0;
}

function sumEstimatedHoursForProject(data, projectId) {
    let comp = data.companies;
    return SearchCompanies(comp, projectId);
}
const sum4 = sumEstimatedHoursForProject(data, "comp-1-dept-1-team-1-proj-3");
console.log(sum4);

const sum1 = sumEstimatedHoursForProject(data, "comp-3-dept-1-team-1-proj-1");
console.log(sum1);
const sum = sumEstimatedHoursForProject(data, "comp-1-dept-1-team-1-proj-3");
console.log(sum);
const sum3 = sumEstimatedHoursForProject(data, "comp-2-dept-1-team-1-proj-1");
console.log(sum3);
