
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    // this.login = function(){
    //     console.log(this.email, 'has logged in');
    // }

}

User.prototype.login = function(){
    this.online = true
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false
    console.log(this.email, 'has logged out');
}

function Admin(...args){
    console.log(args)
    User.apply(this,args)
    this.role = 'super admin'

}

Admin.prototype = Object.create(User.prototype)


Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return u.email != user.email
    });
}


let userOne = new User('ryu@gmail.com', 'Ryu')
let userTwo = new User('yoshi@mario.com', 'Yoshi')
let admin = new Admin('admin@admin.com', 'Dave')

let users = [userOne, userTwo, admin]

// console.log(userOne)
// userTwo.login()

console.log(users)

admin.deleteUser(users[0])


console.log(users)


