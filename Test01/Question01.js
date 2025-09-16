import("./big_test_data.json", { with: { type: "json" } });

const fs = require("fs");
const { type } = require("os");
const rw = fs.readFileSync("big_test_data.json");
const data = JSON.parse(rw);

function searchMembers(members, employeeId) {
  for (let i = 0; i < members.length; ++i) {
    if (members[i].id == employeeId) {
      let str = [members[i].id];
      return str;
    }
  }
  return false;
}

function searchTeams(teams, employeeId) {
  for (let i = 0; i < teams.length; ++i) {
    let str = searchMembers(teams[i].members, employeeId);
    if (str) {
      str.push(teams[i].id);
      return str;
    }
  }
  return false;
}

function searchDepartments(departments, employeeId) {
  for (let i = 0; i < departments.length; ++i) {
    let str = searchTeams(departments[i].teams, employeeId);
    if (str) {
      str.push(departments[i].id);
      return str;
    }
  }
  return false;
}

function SearchCompanies(comp, employeeId) {
  for (let i = 0; i < comp.length; ++i) {
    let str = searchDepartments(comp[i].departments, employeeId);
    if (str) {
      str.push(comp[i].id);
      return str;
    }
  }
  return false;
}

function getEmployeePath(data, employeeId) {
  const comp = data.companies;
  let compName = SearchCompanies(comp, employeeId);
  return compName;
} 

const info = getEmployeePath(data, "comp-1-dept-1-team-1-emp-1");
if (info) {
  const str = `Company ID: ${info[3]},\nDepartment ID: ${info[2]},\nTeam ID: ${info[1]},\nEmployee ID: ${info[0]}`;
  console.log(str);
} else {
  console.log("Not Found");
}
