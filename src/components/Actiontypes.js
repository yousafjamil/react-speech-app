
 const  typeschangename= (name)=>{
return{
    type:"updatename",payload:name
}
}

// 
const  typeschangeage= (age)=>{
    return{
        type:"updateage",payload:age+1
    }
    }
    


export  {typeschangename,typeschangeage}