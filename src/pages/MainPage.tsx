import React from 'react'
import MenuComponent from '../shared/components/MenuComponent'
import { LOCALSTORAGE_KEYS } from '../shared/keys'
import Router from '../router/router'
import { LoadScript } from '@react-google-maps/api';
const KEY = import.meta.env.VITE_MAP_API_KEY
function MainPage() {
  const savedUsers = localStorage.getItem(LOCALSTORAGE_KEYS.USERS);

  if(!savedUsers){
    localStorage.setItem(LOCALSTORAGE_KEYS.USERS, JSON.stringify([]));
  }

  return(
    <div className="min-h-screen bg-gray-100 p-6">
        <MenuComponent />
        <LoadScript googleMapsApiKey={KEY}>
          <Router/>
        </LoadScript>
    </div>
  )
}

export default MainPage