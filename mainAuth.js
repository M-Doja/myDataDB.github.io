console.log('mainAuth controller');
// $("#create-account").css("display","inline-block");
// $("#create-account").css("display","none");
var users = [];
var User;



function addNewUserWithName(){
  User = {};
  User.name = $("#user-signup").val();
  User.email = $("#email").val();
  User.countryList = $("#country-list").val();
    users.push(User);
    console.log(users.length);
    if (users.length > 1) {
      confirm("Sorry! This app already has a registered user.");
      users.pop(User);
      return;
    }

  saveUsers();
  // truE();
  document.location.href = "DB/home.html";
}

// Remove user
function cancelUserAccount(){
  function removeUserAtIndex(index){
    users.splice(index, 1);
    // alert('Whoa!');
    console.log(users);
    saveUsers();
    getUsers();
    listUsers();
  }
  removeUserAtIndex(0);
  window.location.reload();
  $("#create-account").css("display","inline-block");
  document.location.href ="index.html"
}


// Get User
function getUserAtIndex(index){
  return users[index];
}

// save data to local storage
function saveUsers(){
  $("#create-account").css("display","none");
  var str = JSON.stringify(users);
  console.log(str);
  localStorage.setItem("users", str);
}

// get data from local storage
function getUsers(){
  var str = localStorage.getItem("users");
  users = JSON.parse(str);
  console.log(users);
  if (!users){
    users = [];
  }
}

// Validate Login
function loginWithValidation(){
  var loginName = $("#user-login").val();

  // Validating fields
  if (loginName === "" ){
    confirm("Please enter a user name");
    return;
  }
  else if (users.length !== 1 ) {
    confirm("Sorry! It appears there is no account on file under the information you entered. Please create an account.")
    $("#user-login").val("");
  }else {
    console.log("there is a user");
  }

  for (var i in users){
    var user = users[i];
    console.log(user);
    console.log(user.name);
    console.log(loginName);

     if (loginName !== user.name ){
      confirm("Sorry! Not the registered user under this account");
      return;
    }

    else {
      document.location.href = "DB/Home.html";
    }
    $("#user-tf-login").val("");
    $("#pass-tf-login").val("");
  }
}

// Initialize todo app
getUsers();
listUsers();

// List Users
function listUsers(){
  var html = "", acctData = "", name = "", recipes = "";
  for (var i in users){
    var user = users[i];
    var name = user.name;
    var countryList = user.countryList;
    name = name.split(', ');
    for(var i in name){
      name[i] = name[i].replace(name[i].charAt(0), name[i].toUpperCase().charAt(0));
    }
    name.join('');
    html += "<span>"+name+"<br>"+countryList+"</span>";
  }
  $("#list-users").html(html);
  // $("#list-users").html(html);
  // $("#list-users").html(html);
  // $("#list-users").html(html);
}

$("#account-form").submit(function(e){
  e.preventDefault();

  var name = $("#user-signup").val();
  console.log(name);
  // name = name.replace(name[0], name[0].toUpperCase());
  var email = $("#email").val();
  console.log(email);
  var countryList = $("#country-list").val();
  // Validate...
  while (!name) {
    console.log('Enter a name.');
    return;
  }
  addNewUserWithName(name, email, countryList);
  listUsers();
  $("#userName").val("");
  $("#email").val("");
  $("#country-list").val("");
  $("#create-account").css("display","none");
});

function deletePassword(){
  user = localStorage.getItem("users");
  var u = JSON.parse(user);
  console.log(u);
  localStorage.removeItem (user.pass);
  console.log(user);
}

var arr = [];
function resetUserPassword(){
  var user = {};
  user = localStorage.getItem("users");
  console.log(user); //current user
    for (var g in user) {
      console.log();
      var pass = $("#pass-tf-reset").val()
      console.log(pass);
      user.pass = pass;
    }
    var user = {
      pass: pass
    };
    console.log(user);
}


// ===================================================
// save data to local storage
function saveUsers(){
  $("#create-account").css("display","none");
  var str = JSON.stringify(users);
  console.log(str);
  localStorage.setItem("users", str);
}

// get data from local storage
function getUsers(){
  var str = localStorage.getItem("users");
  users = JSON.parse(str);
  console.log(users);
  if (!users){
    users = [];
  }
}
// ==============================================
