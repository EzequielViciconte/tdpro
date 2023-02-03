const endPoint = 'https://reqres.in/api/login'

export default function loginService  ({Email,Password}){
    return fetch(`${endPoint}`,{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cookie: '__cfduid=d62490b161e2db30c916b0e697da3cd851615242775',
            },
            body:JSON.stringify({email:Email,password:Password}),
            redirect:'follow'
        })
            .then((res)=>{
                if(!res.ok) throw new Error('Error en la peticion');
                return res.json();
            })
            .then((response) =>{
                const { token } = response;
                return token;
            });
}