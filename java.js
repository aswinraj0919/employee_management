
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


    editGet(id);
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
var table_size = 1;
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
            // const size=empData.length
            // displayIndexButtons(size)
            const len = empData
            displayIndexButtons(len)
        })


}



function preLoadCalculation() {
    // filterRankList();
    array_length = rank.length;
    console.log("array length asw" + array_length);
    max_index = array_length / table_size;
    if ((array_length % table_size) > 0) {
        max_index++;
    }


}
// function filterRankList() {
//     let tab_filter_text = $("#tab_filter_text").val();
//     if (tab_filter_text != '') {
//         let temp_array = rank.filter(function (object) {
//             return object.gender.toUpperCase().includes(tab_filter_text.toUpperCase())
//             object.email.toUpperCase().includes(tab_filter_text.toUpperCase())
//             object.lastName.toUpperCase().includes(tab_filter_text.toUpperCase())
//             object.username.toUpperCase().includes(tab_filter_text.toUpperCase())
//             object.dob.toString().includes(tab_filter_text)

//         });
//         rank = temp_array;
//     } else {
//         array = rank;
//     }
// }


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
    $(".footer span").text('Showing' + start_index + ' to ' + end_index + ' of ' + array_length + ' entries');
    $(".index-buttons button").removeClass('active');
    $(".index_buttons button[index='" + current_index + "']").addClass('active');

    displayTablerows(len);
}

function displayTablerows(len) {

    let as = rank.slice((start_index - 1), end_index)
    console.log(start_index);
    console.log(end_index);
    let s = start_index;
    let tabledata = "";
    as.map((values) => {
        tabledata += `<tr>
        <th>#${s++}</th>
        <td>${values.salutation} ${values.firstName} ${values.lastName}</td>
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


// displayIndexButtons();
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