
import React from 'react'
import { useUserStore } from '../store/user.store'
import useAddUser from '../../hooks/useUsers'
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../keys';

function MenuComponent() {
  const { fetchUser } = useAddUser();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-200 rounded-lg shadow-md">
      <button
        onClick={() => fetchUser()}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition w-full sm:w-auto"
      >
        Fetch One More User
      </button>

      <button
        onClick={() => navigate(ROUTER_KEYS.ALL)}
        className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition w-full sm:w-auto"
      >
        Show all users
      </button>

      <button
        onClick={() => {
          navigate(ROUTER_KEYS.SAVED);
        }}
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition w-full sm:w-auto"
      >
        View All Saved Users
      </button>
    </div>
  );
}

export default MenuComponent