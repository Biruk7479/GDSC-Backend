async function fetchFn() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let final = await response.json()
        console.log(final)
    }
    catch(error){
        console.log('error fetching')
    }
}

fetchFn()