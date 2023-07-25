function display(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let rollno = document.getElementById('rollno').value;
    let email = document.getElementById('email').value;
    let imagelink = document.getElementById('image').value;
    let mobile = document.getElementById('mobile').value;
    let gender = document.querySelector('input[class="gen"]:checked').value;

    let array = [];
    let skill = document.querySelectorAll('input[name="skills"]:checked');
    skill.forEach(element => {
        array.push(element.value);
    });

    let data = document.querySelector('.info');
    var infoText = `
    Name: ${username}<br>
    Roll No: ${rollno}<br>
    Email: ${email}<br>
    Mobile: ${mobile}<br>
    Gender: ${gender}<br>
    Skills: ${array.join(', ')}<br>
    <img src="${imagelink}" alt="image" height="200px" width="200px" style="margin-top:30px;">
    `;
    data.innerHTML = infoText;
}

function resetForm() {
    let form = document.getElementById('enrollmentForm');
    form.reset();

    let data = document.querySelector('.info');
    data.innerHTML = '';
}

let reg = document.getElementById('enrollmentForm');
let resetBtn = document.getElementById('resetButton');
reg.addEventListener('submit', display);
resetBtn.addEventListener('click', resetForm);
