/**
 * Mock for Griffel-generated style files (.styles.ts)
 *
 * This mock returns a function that simulates the behavior of makeStyles
 * by returning an object with class names as keys and empty strings as values.
 *
 * For example, if a component imports useStyles from './Component.styles.ts',
 * this mock will make useStyles() return { root: 'root', header: 'header', ... }
 * so that className={classes.root} won't break in tests.
 */

// Function to create a proxy that returns the property name when accessed
const createClassesProxy = () => {
  return new Proxy(
    {},
    {
      get: (target, prop) => {
        // Return the property name as a string for any accessed property
        if (typeof prop === 'string') {
          return prop;
        }
        return undefined;
      },
    }
  );
};

// Mock function that simulates makeStyles behavior
const makeStylesMock = () => () => createClassesProxy();

// Export the mock as both default and named export
module.exports = makeStylesMock;
module.exports.makeStyles = makeStylesMock;
module.exports.default = makeStylesMock;
