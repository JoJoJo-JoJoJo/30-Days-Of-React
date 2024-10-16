import axios from "axios";

axios.get("/user?ID=12345")
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })
    .finally(() => { console.log("Request finished!") });

//* Or with Async/Await...

const getUser = async () => {
    try {
        const res = await axios.get("/user?ID=12345");
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

const getUserPermissions = async () => {
    try {
        const res = await axios.get("/user?ID=12345/permissions");
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

Promise.all([getUser(), getUserPermissions()])
    .then((res) => {
        const account = res[0];
        const permissions = res[1];
        console.log({
            acc: account,
            perms: permissions
        })
    })
    .catch((err) => {
        console.log(`You have an error: ${err}`)
    });
