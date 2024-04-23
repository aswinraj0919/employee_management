
// add element


function openForm() {
    let variable = document.getElementById('newEmployee')
    variable.style.visibility = "visible";
    let btn = document.getElementById('add_employee')
    btn.style.display = "unset";
    let head = document.getElementById('add_head')
    head.style.display = "unset";
    let editbtn = document.getElementById('edit_head')
    editbtn.style.display = "none";
    let edithead = document.getElementById('save_change')
    edithead.style.display = "none";
    let back = document.getElementById('overlay')
    back.style.display = "unset";
    let uplod = document.getElementById('upload')
    uplod.style.display = "block";
    let change = document.getElementById('change_avatar')
    change.style.display = "none";
    let cng_btn = document.getElementById('change_btn')
    cng_btn.style.display = "none";

    clearInput()

}

function clearInput() {
    document.getElementById("add_select").value = 'select';
    document.getElementById("add_firstName").value = "";
    document.getElementById("add_secondName").value = "";
    document.getElementById("add_email").value = "";
    document.getElementById("add_number").value = "";
    document.getElementById("add_dob").value = "";
    const radioButtons = document.querySelectorAll('input[name="add_gender"]');
    document.getElementById("add_username").value = "";
    document.getElementById("add_password").value = "";
    document.getElementById("add_qualification").value = "";
    document.getElementById("add_address").value = "";
    document.getElementById("add_country").value = "select";
    document.getElementById("add_State").value = "select";
    document.getElementById("add_city").value = "";
    document.getElementById("add_pin").value = "";

    radioButtons.forEach(function (radioButton) {
        radioButton.checked = false;
    });

    document.getElementById("erroradd_dob").textContent = "";
    document.getElementById("erroradd_gender").textContent = "";
    document.getElementById("erroradd_number").textContent = "";
    document.getElementById("erroradd_email").textContent = "";
    document.getElementById("erroradd_firstName").textContent = "";
    document.getElementById("erroradd_secondName").textContent = "";
    document.getElementById("erroradd_password").textContent = "";
    document.getElementById("erroradd_select").textContent = "";
    document.getElementById("erroradd_username").textContent = "";
    document.getElementById("erroradd_address").textContent = "";
    document.getElementById("erroradd_qualification").textContent = "";
    document.getElementById("erroradd_country").textContent = "";
    document.getElementById("erroradd_State").textContent = "";
    document.getElementById("erroradd_city").textContent = "";
    document.getElementById("erroradd_pin").textContent = "";

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
    let uplod = document.getElementById('upload')
    uplod.style.display = "none";

}

const finishValidation = document.getElementById('add_employee')
finishValidation.addEventListener('click', () => {
    const validations = addFormValidation()
    
})



function addEmployee() {
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
    postData(newData);



}

document.getElementById('imgInput').addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const imageSrc = e.target.result;
            const imageElement = document.createElement('img');
            imageElement.src = imageSrc;

            const add_avatar = document.getElementById('add_avatar');
            add_avatar.innerHTML = ''; // Clear previous image, if any
            add_avatar.appendChild(imageElement);
        }

        reader.readAsDataURL(file);
    }
    let uplod = document.getElementById('upload')
    uplod.style.display = "none";
    let div_add_img = document.getElementById('div_add_img')
    div_add_img.style.display = "flex";
});

function postData(newData) {
    fetch('http://localhost:3000/employees', {
        method: 'POST',
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

            const imgUplode = document.getElementById('imgInput');
            let imgObject = new FormData();

            imgObject.append("avatar", imgUplode.files[0]);

            fetch(`http://localhost:3000/employees/${data.id}/avatar`, {
                method: "POST",
                body: imgObject,
            });
        })
}






// edit section




function openedit(id) {
    let variable = document.getElementById('newEmployee')
    variable.style.visibility = "visible";
    let head = document.getElementById('edit_head')
    head.style.display = "unset";
    let btn = document.getElementById('save_change')
    btn.style.display = "unset";
    let addbtn = document.getElementById('add_employee')
    addbtn.style.display = "none";
    let addhead = document.getElementById('add_head')
    addhead.style.display = "none";
    let back = document.getElementById('overlay')
    back.style.display = "unset";
    let uplod = document.getElementById('upload')
    uplod.style.display = "none";
    let change = document.getElementById('change_avatar')
    change.style.display = "block";
    let cng_btn = document.getElementById('change_btn')
    cng_btn.style.display = "block";
    let div_add_img = document.getElementById('div_add_img')
    div_add_img.style.display = "none";

    editGet(id);
    clearBugOnEdit()
}

function clearBugOnEdit(){
    document.getElementById("erroradd_dob").textContent = "";
    document.getElementById("erroradd_gender").textContent = "";
    document.getElementById("erroradd_number").textContent = "";
    document.getElementById("erroradd_email").textContent = "";
    document.getElementById("erroradd_firstName").textContent = "";
    document.getElementById("erroradd_secondName").textContent = "";
    document.getElementById("erroradd_password").textContent = "";
    document.getElementById("erroradd_select").textContent = "";
    document.getElementById("erroradd_username").textContent = "";
    document.getElementById("erroradd_address").textContent = "";
    document.getElementById("erroradd_qualification").textContent = "";
    document.getElementById("erroradd_country").textContent = "";
    document.getElementById("erroradd_State").textContent = "";
    document.getElementById("erroradd_city").textContent = "";
    document.getElementById("erroradd_pin").textContent = "";
}


function img_change() {
    const clickToChange = document.getElementById('change_avatar')
    clickToChange.src = URL.createObjectURL(event.target.files[0]);
}

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

            var editImgPreview = document.getElementById('change_avatar')
            editImgPreview.src = `http://localhost:3000/employees/${data.id}/avatar`;

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


            // let submit = document.getElementById('save_change')
            // submit.addEventListener("click", () => {
            //     saveChanges(id);
            // })
            const finishValidationedit = document.getElementById('save_change')
            finishValidationedit.addEventListener('click', () => {
                const validations = addFormValidation()
                if (!validations) {
                    return;
                }
                else {
                    saveChanges(id)
                }
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

            const imgUplode = document.getElementById('change');
            let imgObject = new FormData();

            imgObject.append("avatar", imgUplode.files[0]);

            fetch(`http://localhost:3000/employees/${id}/avatar`, {
                method: "POST",
                body: imgObject,
            });

        })


}









// deleat section


function canceldelete() {
    let variable = document.getElementById('deleat_emplayee')
    variable.style.visibility = "hidden";
    let back = document.getElementById('overlay')
    back.style.display = "none";

}




function opendelete(id) {
    let variable = document.getElementById('deleat_emplayee')
    variable.style.visibility = "visible";
    let back = document.getElementById('overlay')
    back.style.display = "unset";

    let dlt = document.getElementById('delete')
    dlt.addEventListener("click", () => {
        confirmDelete(id);
    })
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



// pagenation


var array_length = 0;
var table_size = 5;
var start_index = 1;
var end_index = 0;
var current_index = 1;
var max_index = 0;

let rank = [];

fetchData();
function fetchData() {
    fetch("http://localhost:3000/employees")
        .then((data) => {
            console.log(data);
            return data.json();
        })
        .then((empData) => {
            rank = empData;
            console.log(rank);
            const len = empData
            displayIndexButtons(len)
        })


}



function preLoadCalculation() {
    array_length = rank.length;
    console.log("array length " + array_length);
    max_index = array_length / table_size;
    if ((array_length % table_size) > 0) {
        max_index++;
    }


}


function displayIndexButtons(len) {
    preLoadCalculation();
    $(".index_buttons button").remove();
    $(".index_buttons ").append('<button onclick="prev();"><<</button>');
    for (var i = 1; i <= max_index; i++) {
        $(".index_buttons ").append('<button onclick="indexPagenation(' + i + ');" index="' + i + '">' + i + '</button>');
    }
    $(".index_buttons ").append('<button onclick="next();">>></button>');
    highlightIndexButton(rank);
}



function highlightIndexButton(len) {
    start_index = ((current_index - 1) * table_size) + 1;
    end_index = (start_index + table_size) - 1;
    if (end_index > array_length) {
        end_index = array_length;
    }
    $(".page_limit span").text('of  ' + array_length);
    $(".index-buttons button").removeClass('active');
    $(".index_buttons button[index='" + current_index + "']").addClass('active');

    displayTablerows(len);
}

const input = document.getElementById('filter_text')
input.addEventListener('input', () => {
    displayTablerows(current_index)
});

function displayTablerows(len) {

    let qurry = input.value;
    console.log("qurry : ", qurry);


    let as = rank.slice((start_index - 1), end_index)
    console.log(start_index);
    console.log(end_index);
    let s = start_index;
    let tabledata = "";


    as.filter((eventData) => {
        if (qurry === '') {
            return eventData
        }
        else if (eventData.salutation.toLowerCase().includes(qurry.toLowerCase())) {
            return eventData
        }
        else if (eventData.firstName.toLowerCase().includes(qurry.toLowerCase())) {
            return eventData
        }
        else if (eventData.lastName.toLowerCase().includes(qurry.toLowerCase())) {
            return eventData
        }
        else if (eventData.email.toLowerCase().includes(qurry.toLowerCase())) {
            return eventData
        }
        else if (eventData.phone.includes(qurry)) {
            return eventData
        }
        else if (eventData.gender.toLowerCase().includes(qurry.toLowerCase())) {
            return eventData
        }
        else if (eventData.dob.includes(qurry)) {
            return eventData
        }
        else if (eventData.country.toLowerCase().includes(qurry.toLowerCase())) {
            return eventData
        }
    }).map((values) => {
        tabledata += `<tr>
        <th>#${s++}</th>
        <td><img class="view_avatar" src="http://localhost:3000/employees/${values.id}/avatar" >
        ${values.salutation} ${values.firstName} ${values.lastName}</td>
        <td>${values.email}</td>
        <td>${values.phone}</td>
        <td>${values.gender}</td>
        <td>${values.dob}</td>
        <td>${values.country}</td>
        <td> 
            <nav class="edit"> 
                <input type="checkbox" id="edit_dropdown">
                    <a  class="options">
                        <label for="edit_dropdown">
                            <span class="material-symbols-outlined">
                            more_horiz
                            </span>
                        </label>
                    </a>
                <div class="dropdown">
                    <ul>
                        <li><a onclick="openview('${values.id}')" href="view.html?id=${values.id}">View Details</a></li>
                        <li><a onclick="openedit('${values.id}')">Edit</a></li>
                        <li><a onclick="opendelete('${values.id}')">Delete</a></li>
                    </ul>
                </div>
            </nav>
        </td>
        </tr>`
    });

    document.getElementById("tbody_table").innerHTML = tabledata;

}


function next() {
    if (current_index < 1) {
        current_index++;
        highlightIndexButton();
    }
}


function prev() {
    if (current_index > 1) {
        current_index--;
        highlightIndexButton();
    }
}


function indexPagenation(index) {
    current_index = parseInt(index);
    highlightIndexButton();

}


$("#table_size").change(function () {
    table_size = parseInt($(this).val());
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
})

$("#tab_filter_btn").click(function () {
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
})


// validation

function addFormValidation() {
    const salutation = document.getElementById("add_select").value.trim();
    const firstName = document.getElementById("add_firstName").value.trim();
    const lastName = document.getElementById("add_secondName").value.trim();
    const email = document.getElementById("add_email").value.trim();
    const phone = document.getElementById("add_number").value.trim();
    const address = document.getElementById("add_address").value.trim();
    const country = document.getElementById("add_country").value.trim();
    const state = document.getElementById("add_State").value.trim();
    const city = document.getElementById("add_city").value.trim();
    const pin = document.getElementById("add_pin").value.trim();
    const username = document.getElementById("add_username").value.trim();
    const password = document.getElementById("add_password").value.trim();
    const qualifications = document.getElementById("add_qualification").value.trim();

    // DOB

    const dob = document.getElementById("add_dob")
    const addDovValidation = document.getElementById('erroradd_dob')
    const dobvalue = dob.value.trim();

    const gender = document.querySelector('input[name="add_gender"]:checked')
    const addGenderValidation = document.getElementById('erroradd_gender')

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^\d{10}$/
    const namePattern = /^[A-Za-z]+$/

    let isValid = true;

    // validating DOB and Gender

    if (gender) {
        addGenderValidation.textContent = ""

    }
    else {
        addGenderValidation.textContent = "* please select gender"
        isValid = false
    }

    if (dobvalue === "") {
        addDovValidation.textContent = "* please select Date of Birth"
        isValid = false
    }

    // validating rest

    if (!phonePattern.test(phone)) {
        document.getElementById('erroradd_number').textContent = "* phone number should contain 10n digits"
        isValid = false
    }

    if (!emailPattern.test(email)) {
        document.getElementById('erroradd_email').textContent = "* Invalid email"
        isValid = false
    }

    if (!namePattern.test(firstName)) {
        document.getElementById('erroradd_firstName').textContent = "* please enter first name"
        isValid = false
    }

    if (!namePattern.test(lastName)) {
        document.getElementById('erroradd_secondName').textContent = "* please enter last name"
        isValid = false
    }

    if (password == "") {
        document.getElementById('erroradd_password').textContent = "* please enter password"
        isValid = false
    }

    if (salutation == "" || salutation == "select") {
        document.getElementById('erroradd_select').textContent = "* saluration is needed"
    }

    if (username == "") {
        document.getElementById('erroradd_username').textContent = "* username is needed"
    }

    if (address == "") {
        document.getElementById('erroradd_address').textContent = "* address is needed"
    }

    if (qualifications == "") {
        document.getElementById('erroradd_qualification').textContent = "* qualification is needed"

    }

    if (country == "" || country == "select") {
        document.getElementById('erroradd_country').textContent = "* country is needed"
    }

    if (state == "" || state == "select") {
        document.getElementById('erroradd_State').textContent = "* state is needed"
    }

    if (city == "" || city == "select") {
        document.getElementById('erroradd_city').textContent = "* city is needed"
    }

    if (pin == "") {
        document.getElementById('erroradd_pin').textContent = "* pin is needed"
    }

    // validation text event

    document.getElementById('newEmployee').addEventListener('input', (event) => {
        inputId = event.target.id;
        const errorId = `error${inputId}`;
        console.log("error id is ", errorId);
        document.getElementById(errorId).textContent = "";
    })

    // gender validation

    const male = document.getElementById("editMale")
    const female = document.getElementById("editFemale")
    const others = document.getElementById("editothers")


    male.addEventListener("click", () => {
        document.getElementById("editGenderError").textContent = "";
    })

    female.addEventListener("click", () => {
        document.getElementById("editGenderError").textContent = "";
    })

    others.addEventListener("click", () => {
        document.getElementById("editGenderError").textContent = "";
    })

    return isValid;
}

