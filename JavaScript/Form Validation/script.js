function ValidateForm() {
    let name = document.forms["MyForm"]["name"].value;
    let email = document.forms["MyForm"]["email"].value;
    let message = document.forms["MyForm"]["textarea"].value;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (message== "") {
      alert("Message must be filled out");
      return false;
    }
  }
 
