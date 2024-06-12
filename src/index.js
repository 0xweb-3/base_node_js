const add = (x, y)=>{
    return x + y
}

const obj1 = {
    name: "xin",
    age: 12,
    school: "mySchool"
}

const obj2 = {
    school: "xinschool"
}

const obj3 = {...obj1} // 浅拷贝
console.log(obj3)

const obj4 = {...obj3, ...obj2}
console.log(obj4)

const {name, age, ...rest}=obj1
console.log(name)
console.log(rest)