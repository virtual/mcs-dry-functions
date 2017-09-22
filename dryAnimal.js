// Prototypal inheritence
var cat = {
  meow: function () {
    console.log('meow');
  },
  bite: function () {
    console.log("i'm biting you")
  },
  cutePaws: true
}

var burger = Object.create(cat);
burger.bite = function () {
  console.log('i will only cuddle with you, sorry')
}

var moby = Object.create(cat);
console.log(burger); // does not show inherited functions
console.log(burger.meow); // inherited props still exist