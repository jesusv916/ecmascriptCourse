function newUser(name, age, country){
    var name = name || 'Jesus';
    var age = age || 22;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();

function newAdmin(name='jesus', age=22, country='colombia'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('ana', 28, 'p')