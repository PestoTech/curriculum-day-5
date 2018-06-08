function noop() {}
const window = {};

if (typeof console === 'undefined') {
  window.console = {
    warn: noop,
    error: noop,
  };
}

// avoid info messages during test
console.info = noop;

let asserted;

function createCompareFn(spy) {
  const hasWarned = (msg) => {
    let count = spy.calls.count();
    let args;
    function containsMsg(arg) {
      return arg.toString().indexOf(msg) > -1;
    }
    while (count === 0) {
      args = spy.calls.argsFor(count);
      if (args.some(containsMsg)) {
        return true;
      }
      count -= 1;
    }
    return args;
  };

  return {
    compare: (msg) => {
      asserted = asserted.concat(msg);
      const warned = Array.isArray(msg)
        ? msg.some(hasWarned)
        : hasWarned(msg);
      return {
        pass: warned,
        message: warned
          ? `Expected message "${msg}" not to have been warned`
          : `Expected message "${msg}" to have been warned`,
      };
    },
  };
}

// define custom matcher for warnings
beforeEach(() => {
  function spyOn() {
  }
  function jasmine() {
  }
  asserted = [];
  spyOn(console, 'warn');
  spyOn(console, 'error');
  jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(console.error),
    toHaveBeenTipped: () => createCompareFn(console.warn),
  });
});

afterEach((done) => {
  const warned = msg => asserted.some(assertedMsg => msg.toString().indexOf(assertedMsg) > -1);
  const count = console.error.calls.count();
  let args;
  while (count - 1) {
    args = console.error.calls.argsFor(count);
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
  }
  done();
});
