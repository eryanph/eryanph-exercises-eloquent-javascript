/**
 * https://eloquentjavascript.net/08_error.html#i_iGlwnUbkRs
 * 
 * The locked box
 * Consider the object: box.
 * 
 * It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
 * Directly accessing the private _content property is forbidden.
 * 
 * Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the
 * function, and then ensures that the box is locked again before returning, regardless of whether the argument
 * function returned normally or threw an exception.
 * 
 * For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays
 * unlocked.
 */

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) {
      throw new Error('Locked!');
    }
    return this._content;
  }
};

const withBoxUnlocked = body => {
  const isAlreadyUnlocked = !box.locked;
  box.unlock();
  try {
    body();
  } catch(e) {
    console.log(e.message);
  }
  if (!isAlreadyUnlocked) {
    box.lock();
  }
};

withBoxUnlocked(() => box.content.push('gold piece'));

try {
  withBoxUnlocked(() => { throw new Error('Pirates on the horizon! Abort!') });
} catch (e) {
  console.log(`Error raised: ${e}`);
}
console.log(box.locked);
