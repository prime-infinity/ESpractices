function add(numarray = []){
    let total = 0
    numarray.forEach((element) => {
        total += element
    })

    console.log(total);
}

add()

/**
 * here, we are passing an empty or default params into the function so that
 * our methods do not break in the case of null data
 */