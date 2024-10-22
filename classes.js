class User {
    constructor(email, name){
        this.email = email
        this.name = name
    }

    login(){
        console.log(this.email, 'just logged in')
    }

    logout(){
        console.log(this.email, 'just logged out')
    }

}

let userOne = new User('ryu@gmail.com', 'Ryu')

let userTwo = new User('yoshi@mario.com', 'Yoshi')


console.log(userOne,userTwo)

userTwo.login()
userOne.logout()