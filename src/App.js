import React from 'react';
import { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import { AddUserForm } from './components/AddUserForm';
import { EditUserForm } from './components/EditUserForm';

function App() {

  const usersData = [
    {id:uuidv4(), name: 'Gabriel', username: 'gabi1988'},
    {id:uuidv4(), name: 'Pamela', username: 'pame123'},
    {id:uuidv4(), name: 'Maria', username: 'Maria456'},
  ]

  // state
  const [users, setUsers] = useState(usersData);

  // agregar usuarios 
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }
// Eliminar Usuarios

const deleteUser = (id) => {
 setUsers(users.filter(user => user.id !== id))
}

// editar usuarios 
    const [editing, setEditing] = useState(false);

    const [currentUser, setCurrentUser] = useState({
      id: null, name: '', username:''
    })
    const editRow = (user) => {
      setEditing(true)
      setCurrentUser({
        id: user.id, name: user.name, username: user.username
      })
    }

    const updateUser = (id, updatedUser) => {
      setEditing(false);
      setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

  return (
    <div className="container">
      <h1>Aplicacion CRUD con React</h1>
      <div className="flex-row">
        <div className="flex-large">

          {editing ? (
             <div><h2>Edit user</h2>
             <EditUserForm 
             currentUser={currentUser}
             updateUser={updateUser} /> </div>
          ) : (
            <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/></div>
          )
          }
          
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable
           users={users}
           deleteUser={deleteUser}
           editRow={editRow}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
