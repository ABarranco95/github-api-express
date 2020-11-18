// Modules

const express = require('express');
const axios = require('axios');


// Create the app
const app = express()

// Create a port

const PORT = process.env.PORT || 3000;


// Create a route

app.get('/', (req, res) => {
    
    
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/abarranco95')
    .then(response => {
        //Print inside of terminal
        console.log(response.data)
        const angelObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(angelObject);
        res.send(angelObject);
    })
})



// Create a route

app.get('/nitish', (req, res) => {
    
    
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        //Print inside of terminal
        console.log(response.data)
        const nitishObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(nitishObject);
        res.send(nitishObject);
    })
})

// Create a route

app.get('/ashton', (req, res) => {
    
    
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/swolepenguin')
    .then(response => {
        //Print inside of terminal
        console.log(response.data)
        const ashtonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(ashtonObject);
        res.send(ashtonObject);
    })
})

// Create a route

app.get('/felix', (req, res) => {
    
    
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/fmuwanguzi')
    .then(response => {
        //Print inside of terminal
        console.log(response.data)
        const felixObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(felixObject);
        res.send(felixObject);
    })
})

// Create a route

app.get('/jaxon', (req, res) => {
    
    
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/jaxonnarramore')
    .then(response => {
        //Print inside of terminal
        console.log(response.data)
        const jaxonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(jaxonObject);
        res.send(jaxonObject);
    })
})

// Create a route

app.get('/amari', (req, res) => {
    
    
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/marjames98')
    .then(response => {
        //Print inside of terminal
        console.log(response.data)
        const amariObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(amariObject);
        res.send(amariObject);
    })
})

// Listen on a PORT 

app.listen(PORT, () => {
    console.log("We are listening on the PORT.")
});