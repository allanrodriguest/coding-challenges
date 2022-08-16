// 8 kyu
// Training JS #4: Basic data types--Array
// In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]

// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// Each element in the array has an index, use arr[index] to get the value of element.

// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

const getLength = arr => arr.length
const getFirst = arr => arr[0]
const getLast = arr => arr[arr.length - 1]
function pushElement(arr) {
  var el = 1
  arr.push(el)
  return arr
}
function popElement(arr) {
  arr.pop()
  return arr
}

// Add second solution

const getLength = array => array.length

const getFirst = array => array[0]

const getLast = array => array[array.length - 1]

const pushElement = array => array.concat(0)

const popElement = array => array.splice(0, array.length - 1)