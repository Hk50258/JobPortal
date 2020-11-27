export const Validator = (username,password) => {
    
    if (username === 'user1' && password === 'pw'){
        return{
            user: "User1",
            token: "abcdefg",
            role: "User"
        }
    }

    if (username === 'user2' && password === 'abc'){
        return{
            user: "User2",
            token: "abcdefg",
            role: "Client"
        }
    }

    if (username === 'user3' && password === 'pw'){
        return{
            user: "User1",
            token: "abcdefg",
            role: "Admin"
        }
    }
}