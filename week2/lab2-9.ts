import axios from 'axios'



async function run() { 
    const response = await axios.get('http://localhost:3000/posts')
    console.log(response.data) 
}

run();