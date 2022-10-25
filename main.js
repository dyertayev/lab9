function area(r){
let a=3.14*r*r
console.log(a)
}

area(2)

function equality(x,y){
    if (x==y) {
    console.log("The given numbers:", x,y, " are equal")
    }

    else {
    console.log("The given numbers:", x,y, " are not equal")
    }
}

equality(7,10)

function greater(x,y){
    if (x>y) {
    console.log("The greater number is", x)
    }

    else if (x<y) {
    console.log("The greater number is", y)
    }

    else if (x==y) {
    console.log("The numbers are equal")
    }

}

greater(7,10)