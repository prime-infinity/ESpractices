const exampleSet = new Set([1,1,2,3,1,2,1,1,2,3,4])

exampleSet.add(7).add(1) //cannot add what is already there 

exampleSet.delete(3) //return a boolean if true

exampleSet.has(1) //will also return a boolean

//exampleSet.clear()

console.log(exampleSet); //creates unique values

/**
 * a set is also iterable, so we can use array methods on it
 */