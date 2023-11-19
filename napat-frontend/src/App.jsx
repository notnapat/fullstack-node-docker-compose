import React , {useState,useEffect} from 'react'


export default function App() {
  const [users,setUsers] = useState([])
  useEffect(() => {
    fetch(import.meta.env.VITE_API+'/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
        console.log(result)
      })
  }, [])
  return (
    <div>
      <ul>
        {users.map(users => (
          <li key={users.id}>{users.id} {users.name} {users.email}</li>
        ))}
      </ul>
    </div>
  )
}

