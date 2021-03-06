/*
  myEach() calls a provided callback function once for each element in an array in ascending order.

  callback is invoked with three arguments:
  - the value of the element
  - the index of the element
  - the Array object being traversed

  myEach returns undefined
*/
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // callback function
  }

  return undefined;
};

/*
  myMap() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

  callback is invoked only for indexes of the array which have assigned values (including undefined).

  myMap() returns a new array containing the results of calling a function on every element in this array.
*/
Array.prototype.myMap = function(callback) {
  let new_array = []; // initialize new array

  for (let i = 0; i < this.length; i++) {
    new_array.push(callback(this[i], i, this)); // push returned callback value to new_array
  }

  return new_array; // return new array
};

/*
  myFilter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true.

  callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.
  Array elements which do not pass the callback test are skipped, and are not included in the new array.

  myFilter returns a new array with the elements that pass the test.
  If no elements pass the test, an empty array will be returned.
*/
Array.prototype.myFilter = function(callback) {
  let new_array = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // Callback returns true
      new_array.push(this[i]); // push matched arr[i] to new array
    }
  }

  return new_array; //return new array
};

/**
 * mySome
 * Returns `true` if at least one element in this array satisfies the testing function.
 * @callback: testing function, invoked per element to check for truthy value
 */
Array.prototype.mySome = function(callback) {
  // iterate over every element in array
  for (let i = 0; i < this.length; ++i) {
    // if even one element invokes true, short circuit and return true
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  // at this point we're guaranteed all elements invokes false, we're done
  return false;
};

/**
 * myEvery
 * Returns `true` if every element in this array satisfies the testing function.
 * @callback: testing function, invoked per element to check for truthy value
 */
Array.prototype.myEvery = function(callback) {
  // iterate over every element in array
  for (let i = 0; i < this.length; ++i) {
    // if even one element invokes false, short circuit and return false
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  // at this point we're guaranteed all elements invokes true, we're done
  return true;
};

/**
 * myReduce
 * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
 * @callback: function to run against accumulator
 * @initialValue (optional): value to use in the first call to the callback, else use start of array and shift start index to 1
 */
Array.prototype.myReduce = function(callback, initialValue) {
  // if an initial value is provided, use it, or else use first element in array
  let acc = initialValue || this[0];
  // if an initial value was given, we'll start reducing from beginning of the array, or else start 1 off
  let i = initialValue ? 0 : 1;

  // iterate over every element in array
  for (; i < this.length; ++i) {
    // we set the accumulator to whatever value the callback returns
    acc = callback(acc, this[i], i, this);
  }

  // return whatever the end value of the accumulator is based on last callback iteration
  return acc;
};

/*  Without using the native “Array.prototype.includes” method of JavaScript, compose a function 
titled “myIncludes” that will take in an array of elements and indicate whether or not a target
element is contained within the input array. This returns a boolean.
*/
Array.prototype.myIncludes = function(targetElement, fromIndex = 0) {

  // If statement that returns false if index is larger than array length
  if (fromIndex >= this.length){
    return false;
  }

  // Scans each element in fromIndex to find the targetElement
  // If the element is found, then it returns true
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === targetElement) {
      return true;
    }
 }

 // Returns false if any above condition has not been met yet
 return false;

}

/* Without using the native “Array.prototype.indexOf” method of JavaScript, 
compose a function titled “myIndexOf” that will take in an array of elements and 
returns the index of the first encounter of a target element (if it is found) or -1 
if that element does not exist within the input array.
*/
Array.prototype.myIndexOf = function(targetElement, fromIndex = 0) {

  // For loop that iterates through the array 
  for (i = fromIndex; i < this.length; i++) {
  // If an element in the array is equal to targetElement then return that index
	  if (this[i] == targetElement) {
      return i;
    }
  }
  // If not, return -1
  return -1;
}

/* Without using the native “Array.prototype.push” method of JavaScript,
 compose a function titled “myPush” that will take in an array of elements as 
 well as an elementToAdd and append that element to the end of the array.
*/

Array.prototype.myPush = function(elementToAdd) {

  // set arrlen current length of array
  let arrlen = this.length;
  // increases length of array
  this.length = arrlen++;
  // appends elementToAdd to array
  this[len-1] = elementToAdd;

  return arrlen;
};

/**
 * myLastIndexOf
 * Returns the index of the last occurrence of the specified element, searching backwards from fromIndex. Returns -1 if the value is not found.
 * @searchValue: element to search for
 * @fromIndex (optional): the index of the last character to search from (default: length - 1)
 */
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length - 1) {
  // if fromIndex is negative use as negative offset
  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex;
  }
  // iterate backwards from fromIndex
  for (let i = fromIndex; i >= 0; i--) {
    // return on first (last) occurrence
    if (this[i] === searchElement) {
      return i;
    }
  }
  // return -1 if not found;
  return -1;
};

/**
 * grabKeys
 * Returns an array of the keys in the given object
 * function is not prototyped
 * @obj: the object of which the keys are to be returned.
 */
Object.grabKeys = function(obj) {
  const ret = [];
  // iterate over keys normally appending each one
  for (let key in obj) {
    // check to see if key is actually a key
    if (obj.hasOwnProperty(key)) {
      ret.push(key);
    }
  }
  // returns the keys
  return ret;
};

/**
 * grabValues
 * returns an array of the values in the given object
 * function is not prototyped
 * @obj: the object of which the values are to be returned.
 */
Object.grabValues = function(obj) {
  const ret = [];
  // iterate over keys normally
  for (let key in obj) {
    // check to see if key is actually a key
    if (obj.hasOwnProperty(key)) {
      // append value associated with key
      ret.push(obj[key]);
    }
  }
  // returns the values
  return ret;
};
