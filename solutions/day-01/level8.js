const userList = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
const users = Array.from(userList);


let mostSkills = {
    name: "",
    number: 0
};
users.forEach(user => {
    if (user.skills.length > mostSkills) {
        mostSkills.number = user.skills.length;
        mostSkills.name = users[user];
    }
});


users.filter((user) => user.isLoggedIn === false);
users.filter((user) => user.points >= 50);


const MERNPeople = users.filter(
    (user) => user.skills.includes("MongoDB", "Express", "React", "Node")
);


const newUsersArr = users.splice(users.length, 0, "your name");


const allKeys = users.forEach((user) => {
    console.log(user);
    Array.from(user).forEach((prop) => {
        console.log(prop);
    })
});


const allValues = users.forEach((user) => {
    console.log(user.value);
    Array.from(user).forEach((prop) => {
        console.log(prop.value);
    })
});
