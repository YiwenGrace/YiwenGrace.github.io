function validateName(name) {
    return name !== "";
  }
  
function validatePhone(phone) {
    let phonePattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    return phone.match(phonePattern);
}
  
function validateCreditCard(ccNumber) {
    let ccPattern = /[0-9]{16}/;
    return ccNumber.match(ccPattern);
}
  
function setCalendarScheduleFor(barberName) {
    switch (barberName) {
      case 'fiona':
        $('#formDate').datepicker('setDaysOfWeekDisabled', [0, 4, 5, 6]);
        break;
      case 'alex':
        $('#formDate').datepicker('setDaysOfWeekDisabled', [1, 2, 3]);
        break;
      default:
        $('#formDate').datepicker('setDaysOfWeekDisabled', []);
    }
}
  
$(document).ready(function () {
  
    // enable tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  
   
    setCalendarScheduleFor('fiona');
  
    // prevent page reload and validate input fields on submit
    document.getElementById('booking-submit')
      .addEventListener('click', function (event) {
        event.preventDefault();
  
        let nameField = document.getElementById('formName');
        let phoneField = document.getElementById('formPhone');
        let creditCardField = document.getElementById('formCC');
  
        if (!validateName(nameField.value)) { alert('Please enter your name.') }
        else if (!validatePhone(phoneField.value)) { alert('Please enter your phone name in the format of 123-456-7890.') }
        else if (!validateCreditCard(creditCardField.value)) { alert('Please enter the 16 digits on your credit card without spaces.') }
        else {
          alert('Your booking has been created.');
        }
      });
  
    // only allow valid char on phone input
    document.getElementById('formPhone')
      .addEventListener('input', function (event) {
        let inputtedKey = this.value[this.value.length - 1];
        let patternNumeric = /^\d+$/;
        let patternDash = /^\-$/;
  
        const validChar = inputtedKey.match(patternNumeric) || inputtedKey.match(patternDash);
        if (!validChar) {
          this.value = this.value.slice(0, -1); // exclude last inputted key
        }
      });
  
    // only allow digits on credit card input
    document.getElementById('formCC')
      .addEventListener('input', function (event) {
        let inputtedKey = this.value[this.value.length - 1];
        let patternNumeric = /^\d+$/;
  
        const isNumeric = inputtedKey.match(patternNumeric);
        if (!isNumeric) {
          this.value = this.value.slice(0, -1); // exclude last inputted key
        }
      });
  
    // change the date picker according to barber
    document.getElementById('formBarber')
      .addEventListener('change', function (event) {
        setCalendarScheduleFor(this.value);
      })
  
});