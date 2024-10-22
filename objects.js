let userOne = {
    email: 'ryu@gmail.com',
    name: 'Ryu',

    login(){
        console.log(this.email, 'has logged in')
    },

    logout(){
        console.log(this.email, 'has logged out')
    }
}

 var user = new User()





// let prop = 'email'

// console.log(userOne[prop])

// userOne.age = 25

// console.log(userOne)