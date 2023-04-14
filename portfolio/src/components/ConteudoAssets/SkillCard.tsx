

export function SkillCard(prop:any) {
    return(
   
        <div className='skils-item'>
          <div className='skils-borders'>
          <h1>{prop.titulo}</h1>
          <div className='skils-titulo' />
          {
            prop.texto.map( (texto:String) =>{
              return  <h1>{texto} </h1>  
            }) 
          }   

          </div>     
        </div>
     
    )
}


