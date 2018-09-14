// TEST COMMENT
const Jasmine = require('jasmine');

const jasmine = new Jasmine();

function noop() { }

if (typeof console === 'undefined') {
  global.console = {
    warn: noop,
    error: noop,
  };
}

// avoid info messages during test
console.info = noop;

let asserted;

function createCompareFn(spy) {
  const hasWarned = (msg) => {
    function containsMsg(arg) {
      return arg.toString().indexOf(msg) > -1;
    }

    let count = spy.calls.count();
    let args;
    while (count) {
      args = spy.calls.argsFor(count);
      if (args.some(containsMsg)) {
        return true;
      }
      count -= 1;
    }
    return false;
  };

  return {
    compare: (msg) => {
      const warned = Array.isArray(msg)
        ? msg.some(hasWarned)
        : hasWarned(msg);
      asserted = asserted.concat(msg);
      return {
        pass: warned,
        message: `Expected message ${msg} ${warned ? '' : 'not '}to have been warned`,
      };
    },
  };
}

// define custom matcher for warnings
beforeEach(() => {
  asserted = [];

  // eslint-disable-next-line
  spyOn(console, 'warn');
  // eslint-disable-next-line
  spyOn(console, 'error');

  jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(console.error),
    toHaveBeenTipped: () => createCompareFn(console.warn),
  });
});

afterEach((done) => {
  const warned = msg => asserted.some(assertedMsg => msg.toString().indexOf(assertedMsg) > -1);
  let count = console.error.calls.count();
  let args;
  while (count) {
    args = console.error.calls.argsFor(count);
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
    count -= 1;
  }
  done();
});
