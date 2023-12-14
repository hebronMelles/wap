
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('btnRegisterPatient');
    registerButton.addEventListener('click', registerPatient);
  
    const showElderlyCheckbox = document.getElementById('chkElderlyPatients');
    showElderlyCheckbox.addEventListener('change', filterPatients);
  
    const showOutPatientsCheckbox = document.getElementById('chkShowOutPatients');
    showOutPatientsCheckbox.addEventListener('change', filterPatients);
  });
  
  function registerPatient(event) {
    event.preventDefault(); 
    
    const patientIdNumber = document.getElementById('patientIdNumber').value;
    const firstName = document.getElementById('firstName').value;
    const middleInitials = document.getElementById('middleInitials').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const department = document.getElementById('ddlDepartment').value;
    const isOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked').value;
  
    
    const tableBody = document.getElementById('tbodyPatientsList');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${patientIdNumber}</td>
                        <td>${firstName}</td>
                        <td>${middleInitials}</td>
                        <td>${lastName}</td>
                        <td>${dateOfBirth}</td>
                        <td>${department}</td>
                        <td>${isOutPatient}</td>`;
  
    
    document.getElementById('patientForm').reset();
  }
  
  function filterPatients() {
    const showElderly = document.getElementById('chkElderlyPatients').checked;
    const showOutPatients = document.getElementById('chkShowOutPatients').checked;
  
    const tableRows = document.getElementById('tbodyPatientsList').querySelectorAll('tr');
  
    tableRows.forEach(row => {
      const dateOfBirth = row.cells[4].textContent;
      const isOutPatient = row.cells[6].textContent === 'Yes';
  
      const isElderly = calculateAge(dateOfBirth) >= 65;
  
      if ((showElderly && !isElderly) || (showOutPatients && !isOutPatient)) {
        row.style.display = 'none';
      } else {
        row.style.display = 'table-row';
      }
    });
  }
  
  function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const today = new Date();
  
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    return age;
  }
  