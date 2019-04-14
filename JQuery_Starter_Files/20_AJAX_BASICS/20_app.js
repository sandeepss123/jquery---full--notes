let tableBody = $('#table-body');

// JQuery AJAX
$('#jquery-ajax').click(function() {
    $.ajax({
        url : 'https://gist.githubusercontent.com/sandeepss123/c24f8028966e5957dae24dfc9d00628b/raw/dfbd3ae3d866b9dd2ed262027f0410392d66a94b/sandeep.json',
        method : 'GET',
        success : function(data) {
            processData(data);
        }
    });
});

// Javascript AJAX
$('#js-ajax').click(function () {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://gist.githubusercontent.com/sandeepss123/c24f8028966e5957dae24dfc9d00628b/raw/dfbd3ae3d866b9dd2ed262027f0410392d66a94b/sandeep.json',true);

    // Send the Request
    http.send();

    // if Server is ready with response
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            let theData = http.responseText;
                processData(theData);
        }
    };
});

// Process the data
let processData = (theData) => {
    let employees = JSON.parse(theData);
    displayEmployees(employees);
};

// display Employees
let displayEmployees = (employees) => {
    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr class="bg-success text-white">
                        <td>${employee.id}</td>
                        <td><img src="../img/image1.jpeg" class="img-fluid img-thumbnail" width="100" height="100"></td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.contry}</td>
                        <td>${employee.city}</td>
                        <td>${employee.state}</td>
                      </tr>`;
    });
    tableBody.empty().append(tableRows);
};