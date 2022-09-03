const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors())
app.use(express())

// const user = [
//     {
//         id: 1,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 2,
//         gender: 'female', 
//         name: 'Aurora',
//         contact: 'aurora@yahoo.com',
//         address: '1875/BGH, Sydney, Australia',
//         photoUrl: 'https://i.pinimg.com/236x/77/95/4c/77954c5c252f5d82c5c09313967970b0.jpg'
//     },
//     {
//         id: 3,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 4,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 5,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 6,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 7,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 8,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 9,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     },
//     {
//         id: 10,
//         gender: 'male', 
//         name: 'Alan',
//         contact: 'alan@gmail.com',
//         address: '8/A, Banani, Dhaka',
//         photoUrl: 'https://i.pinimg.com/564x/9c/9a/2b/9c9a2b59ed37c62f3c791af9c62395c5.jpg'
//     }
// ]


app.get('/', (req, res) => {
    res.send('Welcome to my first assignment in ACC')
})


app.get('/user/random', (req, res) => {
    const pullUser = (user) => {
        fetch(user)
        .then(result.json)
        .then(data => res.send(data))
    }
    res.send(pullUser('user.json'))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})