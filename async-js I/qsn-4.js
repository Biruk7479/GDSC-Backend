function fetchFn() {
    return new Promise((resolve,reject)=>{
        let promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
        promise.then( response => {
            if (response.ok){
                return response.json()
            }
        })
        .then(data=>{
            resolve(data);
            console.log(data);
        })
        .catch(error =>{
            reject(error);
        })
    })
}
fetchFn();