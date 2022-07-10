import React from 'react'
import UserList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ling Qingran',
      image: 'https://inews.gtimg.com/newsapp_bt/0/13343308322/1000',
      place: 3,
    },
  ]

  return <UserList items={USERS} />
}

export default Users
