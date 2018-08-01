// closures
var multiplyTogether = function(passed){
  var multiply = function(inner){
    return passed * inner;
  };
  return multiply;
};

var multiplyThree = multiplyTogether(3);
var multiplyFive = multiplyTogether(5);

console.log(multiplyFive(2));


// getting delay time using closures
function stopWatch(){
	var startTime = Date.now();

  function delay(){
  	var elapsedTime = Date.now() - startTime;
    alert(elapsedTime)
  }
  return delay;
}

var timer = stopWatch();

for(var i=0; i<1000000; i++){
  var foo = Math.random() * 10000
}

timer();
