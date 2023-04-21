const e1=()=>{
    Swal.fire('erorr intenta de nuevo')
    
}
const e2=()=>{
    Swal.fire(
        'NO HAY INTERNET',
        'INTENTA DE NUEVO',
        '¿AYUDA?'
      )
    
}
const e3=()=>{
    Swal.fire({
        title: 'ALGO QUE TE PUEDA AYUDAR ?',
        text: "TODO BIEN",
        icon: 'CUIDADO',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, DE UNA ?!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'NO!',
            'YA QUIERO ACABAR',
            'SEGURO'
          )
        }
      })
    
}
const e4=()=>{
    Swal.fire({
        imageUrl: 'https://pm1.narvii.com/6877/fc650d83deeef454bce12f3d4a3ff4081efd4a08r1-480-471v2_hq.jpg',
        imageHeight: 1500,
        imageAlt: 'A tall image'
      })
    
}
const e5=()=>{
    Swal.fire({
        title: 'todo bien nn?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'afirmativo',
        denyButtonText: `nd`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('hello!', '', 'afirmativo')
        } else if (result.isDenied) {
          Swal.fire('todo bien mi estimado', '', 'info')
        }
      })
    
}


