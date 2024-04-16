const link = new URL(window.location.href);
const id = link.searchParams.get("id");
console.log(id);

openview(id);

function openview(id) {

    fetch(`http://localhost:3000/employees/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'apllication/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            document.getElementById("view_select").innerHTML = data.salutation
            document.getElementById('view_firstname').innerHTML = data.firstName
            document.getElementById('view_lastname').innerHTML = data.lastName
            document.getElementById('view_email').innerHTML = data.email
            document.getElementById('view_gender').innerHTML = data.gender
            document.getElementById('view_phone').innerHTML = data.phone
            document.getElementById('view_Username').innerHTML = data.username
            document.getElementById('view_age').innerHTML = data.password
            document.getElementById('view_Qualifications').innerHTML = data.qualifications
            document.getElementById('view_address').innerHTML = data.address
            document.getElementById('view_country').innerHTML = data.country
            document.getElementById('view_state').innerHTML = data.state
            document.getElementById('view_city').innerHTML = data.city
            document.getElementById('view_pin').innerHTML = data.pin
            document.getElementById('view_dob').innerHTML = data.dob




        })
}





function overla() {
    let variable = document.getElementById('newEmployee')
    variable.style.visibility = "hidden";
    let back = document.getElementById('overlay')
    back.style.display = "none";
    let closedlt = document.getElementById('deleat_emplayee')
    closedlt.style.visibility = "hidden";

}


function closetag() {
    let variable = document.getElementById('newEmployee')
    variable.style.visibility = "hidden";
    let back = document.getElementById('overlay')
    back.style.display = "none";

}








// view => edit



function viewopenedit(id) {
    let variable = document.getElementById('newEmployee')
    variable.style.visibility = "visible";
    let back = document.getElementById('overlay')
    back.style.display = "unset";
}
let submit = document.getElementById('view_id')
submit.addEventListener("click", () => {
    editGet(id);
})




function editGet(id) {
    console.log(id);

    fetch(`http://localhost:3000/employees/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'apllication/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            document.getElementById("add_select").value = data.salutation
            document.getElementById('add_firstName').value = data.firstName
            document.getElementById('add_secondName').value = data.lastName
            document.getElementById('add_email').value = data.email
            document.getElementById('add_number').value = data.phone
            document.querySelector(`input[name="add_gender"][value='${data.gender}']`).checked = true;
            document.getElementById('add_username').value = data.username
            document.getElementById('add_password').value = data.password
            document.getElementById('add_qualification').value = data.qualifications
            document.getElementById('add_address').value = data.address
            document.getElementById('add_country').value = data.country
            document.getElementById('add_State').value = data.state
            document.getElementById('add_city').value = data.city
            document.getElementById('add_pin').value = data.pin


            var originalDate = data.dob;
            var parts = originalDate.split("-");
            var reversedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
            console.log(reversedDate);
            document.getElementById('add_dob').value = reversedDate


            let submit = document.getElementById('save_change')
            submit.addEventListener("click", () => {
                saveChanges(id);
            })
        })
}

function saveChanges(id) {
    const salutation = document.getElementById("add_select").value;
    const firstName = document.getElementById('add_firstName').value;
    const lastName = document.getElementById('add_secondName').value;
    const email = document.getElementById('add_email').value;
    const phone = document.getElementById('add_number').value;
    const dob = document.getElementById('add_dob').value;
    const gender = document.querySelector('input[name="add_gender"]:checked').value;
    const username = document.getElementById('add_username').value;
    const password = document.getElementById('add_password').value;
    const qualifications = document.getElementById('add_qualification').value;
    const address = document.getElementById('add_address').value;
    const country = document.getElementById('add_country').value;
    const state = document.getElementById('add_State').value;
    const city = document.getElementById('add_city').value;
    const pin = document.getElementById('add_pin').value;


    var originalDate = dob;
    var parts = originalDate.split("-");
    var reversedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
    console.log(reversedDate);


    const newData = {
        salutation,
        firstName,
        phone,
        gender,
        username,
        dob: reversedDate,
        lastName,
        email,
        password,
        qualifications,
        address,
        country,
        state,
        city,
        pin,
    }
    console.log(newData);


    fetch(`http://localhost:3000/employees/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("Data posted successfully", data);
        })


}




// view => delete



function canceldelete() {
    let variable = document.getElementById('deleat_emplayee')
    variable.style.visibility = "hidden";
    let back = document.getElementById('overlay')
    back.style.display = "none";

}

let DLT = document.getElementById('delete')
DLT.addEventListener("click", () => {
    confirmDelete(id);
})


function opendelete(id) {
    let variable = document.getElementById('deleat_emplayee')
    variable.style.visibility = "visible";
    let back = document.getElementById('overlay')
    back.style.display = "unset";

}
function confirmDelete(id) {
    fetch(`http://localhost:3000/employees/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'apllication/json',
        }
    })
        .then((response) => {
            return response.json
        })
        .then((data) => {
            console.log("delete");
        })
}



