let url=fetch(`http://localhost:1818/tasks`)

document.querySelector('form').addEventListener('submit',()=>{
    display();
})

async function display(){
    let title=document.getElementById('title').value
    let description=document.getElementById('des').value
    let status=document.getElementById('status').value
    let date=document.getElementById('date').value

    let obj={
        title,
        description,
        status,
        date
    }

    let res= await fetch(`${url}`,{
        mathod:"post",
        headers:{
            "text-content":"application/json"
        },
        body:JSON.stringify(obj)
    })
}