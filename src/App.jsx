import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleEdit =  (e,id) => {
    let t = todos.filter(i=>i.id === id)   
      settodo(t[0].todo)
    let newtodo = todos.filter(item=>{
      return item.id != id
    })
    settodos(newtodo)

  }

  const handleAdd = () => {
    settodos([...todos, {id: uuidv4(), todo, iscompleted: false }])
    settodo("")
  }  

  const handleDelete = (e,id) => {
    let newTodos = todos.filter((item) =>{
      return item.id != id
    })
    settodos(newTodos)
  }


  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleCheck = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item)=>{
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].iscompleted = !newTodos[index].iscompleted
    settodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="container bg-violet-100 w-1/2 mx-auto rounded-xl p-5 my-10">
        <div className=''>
          <h2 className='text-lg font-bold'>Add Todo</h2>
          <input type="text" className='w-10/12 rounded-xl px-5 h-9 my-5' onChange={handleChange} value={todo} />
          <button onClick={handleAdd} className='bg-blue-500 hover:bg-violet-600 rounded-md p-2 py-1 mx-6'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todo</h2>
        <div className="todos">
          {todos.map(item => { 
            return (<div key={item.id} className="todo flex w-1/2 justify-between my-3">
              <input name={item.id} type="checkbox" onChange={handleCheck} value={todo.iscompleted}/>
              <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
              <div className="btn flex h-full">
                <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-blue-500 hover:bg-violet-600 rounded-md p-2 py-1 mx-2'>Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-blue-500 hover:bg-violet-600 rounded-md p-2 py-1 mx-2'>Delete</button>
              </div>
            </div> )
          })}
        </div>
      </div>
    </>
  )
}

export default App
