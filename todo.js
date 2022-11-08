const input = document.getElementById('input__feild')
const addBtn = document.getElementById('input__button')
const ul = document.querySelector('.todo')

addBtn.addEventListener('click', function(){
    const li = document.createElement('li')
    li.innerText = input.value
    li.setAttribute('class', 'li')
    ul.appendChild(li)

    const completeBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    
    deleteBtn.innerText = 'Delete'
    completeBtn.innerText  = 'Complete'
    
    deleteBtn.setAttribute('class', 'delete')
    completeBtn.setAttribute('class', 'complete')
    
    li.appendChild(deleteBtn)
    li.appendChild(completeBtn)

    if(input.value === ""){
        alert('The Task Cannot be Empty')
        ul.removeChild(li)
    }
    
    deleteBtn.addEventListener('click', function(){
        ul.removeChild(li)
    })
    completeBtn.addEventListener('click', function(){
        li.style.textDecoration = 'line-through'
        li.style.color = 'grey'
    })
    input.value = ""
})
// To Trigger the event using the Enter Button
input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
    const li = document.createElement('li')
    li.innerText = input.value
    li.setAttribute('class', 'li')
    ul.appendChild(li)

    const completeBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    
    deleteBtn.innerText = 'Delete'
    completeBtn.innerText  = 'Complete'
    
    deleteBtn.setAttribute('class', 'delete')
    completeBtn.setAttribute('class', 'complete')
    
    li.appendChild(deleteBtn)
    li.appendChild(completeBtn)

    if(input.value === ""){
        alert('The Task Cannot be Empty')
        ul.removeChild(li)
    }
    
    deleteBtn.addEventListener('click', function(){
        ul.removeChild(li)
    })
    completeBtn.addEventListener('click', function(){
        li.style.textDecoration = 'line-through'
        li.style.color = 'grey'
    })
    input.value = ""
}
})
