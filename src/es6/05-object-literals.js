//enhanced object literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Jesus', 22, 'CO', 1));