const input=document.querySelector('input'),
btn=document.querySelector('button')
input.addEventListener('keyup',()=>{
    try {
       let url = new URL(input.value);
       btn.classList.add('activ')
      } catch (_) {
        btn.classList.remove('activ')
      }
})
btn.onclick=()=>{
        btn.innerHTML='Downloading file...'
        btn.classList.remove('activ')
           fetch(input.value).then(response=>response.blob().then(file=>{
            let url=URL.createObjectURL(file),
            a=document.createElement('a')
            a.href=url
            a.download='doc'
            document.body.appendChild(a)
            a.click()
            a.remove()
            btn.innerHTML='Download File'
        }))   
}
