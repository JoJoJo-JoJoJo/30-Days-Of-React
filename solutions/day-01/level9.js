const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

class PersonAccount {
    #firstName
    #lastName
    #incomes
    #expenses

    constructor(firstName, lastName, incomes, expenses) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#incomes = [...incomes]; // Each item is an object { income, desc }
        this.#expenses = [...expenses]; // Each item is an object { expense, desc }
    }

    #totalIncome() {
        return this.#incomes.reduce((prev, curr) => prev + curr.income, 0);
    }

    #totalExpense() {
        return this.#expenses.reduce((prev, curr) => prev + curr.expense, 0);
    }

    accountInfo() {
        return `You are ${this.#firstName} ${this.#lastName}, and you have a total of ${
            this.accountBalance()
        }`
    }

    addIncome(incomeObj) {
        this.#incomes.push(incomeObj);
    }

    addExpense(expenseObj) {
        this.#expenses.push(expenseObj);
    }

    accountBalance() {
        return this.#totalIncome - this.#totalExpense
    }
}


class userObj {
    #_id
    #createdAt
    #isLoggedIn

    constructor(email, username, password, time) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.#_id = "iafnac";
        this.#createdAt = time;
    }

    get id() {
        return this.#_id
    }

    get isLoggedIn() {
        return this.#isLoggedIn
    }

    set isLoggedIn(boolValue) {
        this.#isLoggedIn = boolValue;
    }
}

function signUp() {
    const currTime = "08/01/2020 10:20 AM";
    const user = new userObj("dave@dave.com", "Dave", "123789", currTime);
    users.push(user);
}

function signIn(usernameInput, passwordInput) {
    users.some((user) => {
        if (user.username !== usernameInput) return false
        if (user.password === passwordInput) return true
    })
}


function rateProduct(userId, productDesc, rating) {
    const currProduct = products.filter((product) => product.description === productDesc);
    if (!currProduct.length) return
    currProduct.ratings.push({
        "userId": userId,
        "rate": rating
    })
}

function averageRating(product) {
    return product
        .ratings.reduce((prev, curr) => prev + curr.rate, 0) / product.ratings.length
}


function likeProduct(user, product) {
    const idInLikes = product.likes.filter((id) => user.id = id);
    if (idInLikes.length !== 0) {
        product.likes.splice(idInLikes[0], 1);
    } else {
        product.likes.push(user.id)
    }
}
