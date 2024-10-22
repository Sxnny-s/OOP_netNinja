class User {
    constructor(email, name){
        this.email = email
        this.name = name
        this.score = 0
    }

    login(){
        console.log(this.email, 'just logged in')
        return this
    }

    logout(){
        console.log(this.email, 'just logged out')
        return this
    }
    updateScore(){
        this.score++
        console.log(this.email, 'score is now', this.score)
        return this
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })

    }

}

let userOne = new User('ryu@gmail.com', 'Ryu')

let userTwo = new User('yoshi@mario.com', 'Yoshi')

let admin = new Admin('bob@gmail.com','shaun')

let users = [userOne, userTwo]

console.log(users)

admin.deleteUser(userOne)

console.log(users)

