<!DOCTYPE html>
<html>
<body id="body" style= "background-color:#ffa500" >

<div>
  <h1 id="heading">Javascript basics</h1>
</div>

<button onClick="dontClick()">Don't Click</button>
<button onClick="this.innerHTML = 'Thanks!'">Please Click</button>
<button onClick="changeText(this)">Click if you want</button>

<button onClick="showDate()" onClick="changeDateText(this)">Show date</button>
<h1 id="time"></h1>

<div>
  <label>Select A Background: </label>
  <select name="background" id="background" onchange="changeBackground(this)">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
  </select>
</div>
<div>
  <form method="post" action="somesite.com" name="form" onsubmit="return validateForm()">
  <div>
    <br>
    <label>First Name: </label>
    <input type="text" name="firstName" id="firstName">
    <br>
  </div>
  <div>
    <br>
    <label>Last Name:  </label>
    <input type="text" name="lastName" id="lastName">
    <br>
  </div>
  <br>
  <input type="submit" value="Submit">
  </form>
</div>

<script>
//events
function dontClick(){
  var heading = document.getElementById('heading');
  heading.innerHTML = "You shouldn't have done that!";
}
function changeText(text){
  text.innerHTML = 'Good job!';
}
function changeDateText(text){
  text.innerHTML = 'Clear Date';
}
function showDate(){
  var time = document.getElementById('time');
  time.innerHTML = Date();
}
function clearDate(){
  var time = document.getElementById('time');
  time.innerHTML = '';
}
// iterating through for loops
var list = [1,2,3,4,5,6,7]

for(var i=0; i<list.length;i++){
  console.log(list[i]);
}

// switch cases
var fruit = "blueberries"

switch(fruit){
  case 'apple':
    alert('apples are good')
    break;
  case 'banana':
    alert('bananas are ok');
    break;
  case 'orange':
    alert('oranges are terrible');
    break;
  default:
    alert('I do not really mind');
    break;
}

// objects
var person = {
  firstName: 'Alvin',
  lastName: 'Alaphat',
  age: 17,
  schools: ['jefferson', 'hardin', 'sluh'],
  address:{
    houseNumber: '4101',
    street: 'West Hollow Trace',
    city: 'Peoria',
    state: 'Illinois'
  },
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
}
console.log(person.schools[2]);
console.log(person.address.street);
console.log(person.fullName());

// object constructors
var phone = new Object();
phone.color = 'black';
phone.type = 'iPhone';
phone.logo = 'apple';

phone.describe = function(){
  return "my " + phone.type +
  " is " + phone.color + " and it has an " + phone.logo + " on the back";
}
console.log(phone.describe());

//constructor pattern
function Computer(os, color, distr){
  this.os = os;
  this.color = color;
  this.distr = distr;
}
var linux = new Computer('linux', 'black', 'ubuntu');
var windows = new Computer('windows', 'white', 'XP');
console.log(linux.distr);

//array of objects
var users = [
  {
    name: 'alvin',
    age: 17
  },
  {
    name: 'osvin',
    age: 9
  }
];
console.log(users[1].name);

function changeBackground(selection){
  var body = document.getElementById('body');
  body.style.backgroundColor = selection.value;
}

function validateForm(){
  var firstName = document.forms["form"]["firstName"].value;
  if(firstName == null || firstName == ""){
    alert('First name is required');
    return false;
  }
  if(firstName.length < 3){
    alert('First name must be at least 3 characters');
    return false;
  }
}
</script>

</body>
</html>
