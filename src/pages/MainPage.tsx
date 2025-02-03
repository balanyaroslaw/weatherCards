import React from 'react'
import MenuComponent from '../shared/components/MenuComponent'
import { LOCALSTORAGE_KEYS } from '../shared/keys'
import Router from '../router/router'

function MainPage() {
  const savedUsers = localStorage.getItem(LOCALSTORAGE_KEYS.USERS);

  if(!savedUsers){
    localStorage.setItem(LOCALSTORAGE_KEYS.USERS, JSON.stringify([]))
  }

  return(
    <div className="min-h-screen bg-gray-100 p-6">
        <MenuComponent />
        <Router/>
    </div>
  )
}

export default MainPage