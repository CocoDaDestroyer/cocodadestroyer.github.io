const announceWinner = (winner) =>{
    const game = document.querySelector('#game')
    game.style.display = 'none'
    const message = document.createElement('div')
    const btn = document.createElement('button')
    btn.textContent = 'Restart?'
    message.textContent = `Winner: ${winner}`
    message.classList.add('msg')
    btn.addEventListener('click',function(){
        location.reload()
    })
    message.appendChild(btn)
    const content = document.querySelector('#content')
    content.appendChild(message)
}
export default announceWinner