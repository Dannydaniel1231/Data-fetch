


  const photos = (src,name )=>{

    const card=`<div closs ="photo">
              <div class ="card">
            <img src = ${src}>
            </div>
            <div class ="name">
            ${name}
            </div>
            </div>
            `

            images.innerHTML+=card;
  }

  const res=fetch("https://api.github.com/users")

   .then(res=>res.json())
   .then(data=>{console.log(data)
   data.map(item=>{
    photos(item.avatar_url,item.login)
})
})