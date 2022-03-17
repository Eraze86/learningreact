import { IPerson } from "./IPerson"

export function Render(){
    let persons = [
        {name: "Anna", age: 20, married: false},
        {name: "Peter", age: 35, married: true},
        {name: "Lena", age: 16, married: false},
        {name: "Anders", age: 65, married: true}
    ]
    
   let list = persons.map((p) =>{
    if(p.married === true){
        return <li key={p.name}>{p.name} {p.age} {p.married}, is married</li>
    }else{
        return <li key={p.name}>{p.name} {p.age} {p.married}, is not married</li>
    }
      

   })
  
return(<ul>{list}</ul>)
}