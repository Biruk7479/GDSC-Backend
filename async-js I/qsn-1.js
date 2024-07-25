async function fetchFn() {

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let final = await response.json()
        console.log(final)
}

fetchFn()