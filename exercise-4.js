// For commit purposes
/* eslint-disable */

for (var i = 0; i < 10; i--) {
}

var args = [1, 2, 3, 4];
Math.max.apply(Math, args);

foo(function(a) { return a; });

var foo = object.foo;
var foo = object['foo'];

var foo = {
  x: x,
  y: y,
  z: z,
};

// methods
var foo = {
  a: function() {},
  b: function() {}
};

class A {
  constructor () {
  }
}

class A extends B {
  constructor (...args) {
    super(...args);
  }
}

var foo = a && b < 0 || c > 0 || d + 1 === 0;
var foo = a + b * c;

var foo = 0;
var baz = 5;

var foo = isBar ? baz : qux;

function quux() {
  return foo ? bar() : baz();
}

var foo = bar > baz ? value1 : value2;

function foo (bar, baz, qux, qxx) {
  doSomething();
}

var foo = (bar, baz, qux, qxx) => {
  doSomething();
};

var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };

function foo() {
  for (;;) { // Nested 1 deep
      let val = () => (param) => { // Nested 2 deep
          if (true) { // Nested 3 deep
              if (true) { // Nested 4 deep
                  if (true) { // Nested 5 deep
                  }
              }
          }
      };
  }
}

function foo() { return; }

function foo() {
  doSomething();
  return;
}

function foo() {
  if (condition) {
    bar();
    return;
  } else {
    baz();
  }
}

function foo() {
  switch (bar) {
    case 1:
      doSomething();
    default:
      doSomethingElse();
      return;
  }
}

var a = `some` + `string`;
var a = '1' + '0';
var a = '1' + `0`;
var a = `1` + '0';
var a = `1` + `0`;

foo = foo;

[a, b] = [a, b];

[a, ...b] = [x, ...b];

({a, b} = {a, x});




async function foo() {
  return await bar();
}

var a =  1;

if(foo   === "bar") {}

var arr = [1,  2];

function foo() {}
foo = bar;

function foo() {
    foo = bar;
}

RegExp('[')

RegExp('.', 'z')

new RegExp('\\')

var foo = function() {
  try {
      return 1;
  } catch(err) {
      return 2;
  } finally {
      return 3;
  }
};


function foo() {
  return true;
  console.log("done");
}

function bar() {
  throw new Error("Oops!");
  console.log("done");
}

while(value) {
  break;
  console.log("done");
}

throw new Error("Oops!");
console.log("done");

function baz() {
  if (Math.random() < 0.5) {
      return;
  } else {
      throw new Error();
  }
  console.log("done");
}

for (;;) {}
console.log("done");

function foo() {
  if (x) {
      return y;
  } else {
      return z;
  }
}

function foo() {
  if (x) {
      return y;
  } else if (z) {
      return w;
  } else {
      return t;
  }
}

function foo() {
  if (x) {
      return y;
  } else {
      var t = "foo";
  }

  return t;
}

function foo() {
  if (error) {
      return 'It failed';
  } else {
      if (loading) {
          return "It's still loading";
      }
  }
}

// Two warnings for nested occurrences
function foo() {
  if (x) {
      if (y) {
          return y;
      } else {
          return x;
      }
  } else {
      return z;
  }
}