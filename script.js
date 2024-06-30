let url=fetch(`http://localhost:1818/tasks`)

let container=document.getElementById('container')

async function getData(){
    try {
        let response=await fetch(`${url}`)
        let result=await response.json();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
getData();