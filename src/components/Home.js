import React,{useState} from 'react';


const Home = () => {
const [input,setInput]= useState('')
const  [list,setList]=useState([])


const  handleAdd=(e)=>{
  e.preventDefault()
  setList([...list,input])
  setInput('')
}

const  deleteHandle=(id)=>{
setList((old)=>{
  return old.filter((cElemnet,index)=>{
    return index !==id
  })
})
}
  return <div className='container  py-5 mt-5'>

<div className='row'>
  <div className='col-sm-8'>
  <form className='jumbotron'>
    <input   placeholder='enter item you wanna to add ina list' value={input} onChange={(e)=>setInput(e.target.value)} className='form-control'/>
    <button className='btn btn-outline-info mt-4' onClick={handleAdd}>ADD Item</button>
  </form>
  </div>
 {/*  */}

 <div className='col-sm-4'>
<ol>
  {list.map((item,index)=>{
    return (
      <> 
      <pre>
      <li>{item }          <button className='btn btn-danger' onClick={()=>deleteHandle(index)}>Delete</button></li>         <hr/>

      </pre>
      
      </>

    )
 
  })}
</ol>
 </div>
</div>


  </div>;

};

export default Home;
