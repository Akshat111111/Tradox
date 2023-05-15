function phoneValidation() {
    var mobno = document.forms["myform"]["mno"].value.trim(); // Trim whitespace from the input
    var filter = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    var isValid = filter.test(mobno);
  
    var inputElement = document.getElementById("mno");
    var validationResultElement = document.getElementById("validationresult");
  
    if (mobno.length === 0) { // Check for empty input
      inputElement.style.boxShadow = "1px 1px 2px 2px red";
      validationResultElement.innerHTML = "Please enter a mobile number.";
      return false;
    }
  
    if (isValid) {
      inputElement.style.boxShadow = "1px 1px 2px 2px green";
      validationResultElement.innerHTML = "";
      return true;
    } else {
      inputElement.style.boxShadow = "1px 1px 2px 2px red";
      validationResultElement.innerHTML = "Please enter a valid mobile number.";
      return false;
    }
  }
  
  // Additional feature: Allow only numeric input
  document.forms["myform"]["mno"].addEventListener("input", function(e) {
    var input = e.target.value;
    e.target.value = input.replace(/\D/g, ""); // Remove non-numeric characters
  });
  
