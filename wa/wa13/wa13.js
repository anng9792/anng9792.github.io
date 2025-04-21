// Problem 1: Create JSON for each employee
const employeesP1 = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
  ];
  
  console.log("// Problem 1: Create JSON for each employee");
  console.log(employeesP1);
  
  // Problem 2: Create JSON for company
  const companyP2 = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [...employeesP1.map(emp => ({ ...emp }))] // fresh copy
  };
  
  console.log("// Problem 2: Create JSON for company");
  console.log(companyP2);
  
  // Problem 3: Add Anna
  const companyP3 = {
    ...companyP2,
    employees: [...companyP2.employees.map(emp => ({ ...emp }))] // fresh copy again
  };
  
  const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  
  companyP3.employees.push(anna);
  
  console.log("// Problem 3: Add Anna");
  console.log(companyP3);
  
  // Problem 4: Calculate total salary
  let totalSalary = 0;
  for (let i = 0; i < companyP3.employees.length; i++) {
    totalSalary += companyP3.employees[i].salary;
  }
  
  console.log("// Problem 4: Calculate total salary");
  console.log("Total salary of all employees:", totalSalary);
  
  // Problem 5: Apply raises
  const companyP5 = {
    ...companyP3,
    employees: companyP3.employees.map(emp => {
      let updatedEmp = { ...emp };
      if (updatedEmp.raiseEligible) {
        updatedEmp.salary = updatedEmp.salary * 1.10;
        updatedEmp.raiseEligible = false;
      }
      return updatedEmp;
    })
  };
  
  console.log("// Problem 5: Apply raises");
  console.log(companyP5);
  
  // Problem 6: Add work-from-home status
  const wfhEmployees = ['Anna', 'Sam'];
  
  const companyP6 = {
    ...companyP5,
    employees: companyP5.employees.map(emp => {
      return {
        ...emp,
        wfh: wfhEmployees.includes(emp.firstName)
      };
    })
  };
  
  console.log("// Problem 6: Add work-from-home status");
  console.log(companyP6);
  