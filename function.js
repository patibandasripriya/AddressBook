import { User } from "../model/user.js";

const userData = [];

//CREATE USER FUNCTION
function createUser(fullName, address, age, number, state) {
    const user = new User(fullName, address, age, number, state);
    userData.push(user);
}

createUser('Sripriya', 'guntur', 22, 9966639507, 'Andhra');  
createUser('abc', 'whitefield', 45, 9999999999, 'Karnataka');  
createUser('def', 'dharavi', 60, 7777777777, 'Maharashrta');  
function readUsers() {
    return userData;
}
const allUsers = readUsers();
console.log(allUsers);
function findUserByName(name) {
    return userData.find(user => user.fullName == name);
}

function updateUser(name, newDetails) {
    const user = findUserByName(name);
    if (user) {
        Object.assign(user, newDetails);
        return true;
    }
    return false;
}

const updated = updateUser('def', { address: 'marthalli', age: 29 });
console.log(updated);
console.log(allUsers);


//DELETE USER FUNCTION

function deleteUser(name) {
    const user = findUserByName(name);
    const index = userData.indexOf(user);
    if (index != -1) {
        userData.splice(index, 1);
        return true;
    }
    return false;
}

const deleted = deleteUser('def');
console.log(deleted)
console.log(allUsers)
function findUserByAddress(address) {
    return userData.find(user => user.address == address);     
}
function findUserByState(state) {
    return userData.find(user => user.state == state);   
}
function findUserByNumber(number) {
    return userData.find(user => user.number == number);    
}
function findUserByAge(age) {
    return userData.find(user => user.age == age);          
}
function sortUsersByStringParameter(users, parameter) {
    return users.sort((a, b) => a[parameter].localeCompare(b[parameter]));     
}
const sortedByAddress = sortUsersByStringParameter(userData, "address");
sortedByAddress.forEach(user => console.log(user));
function sortUsersByIntParameter(users, parameter) {
    return users.sort((a, b) => a[parameter] - b[parameter]);       
}
const sortedByAge = sortUsersByIntParameter(userData,"age");
sortedByAge.forEach(user => console.log(user));
