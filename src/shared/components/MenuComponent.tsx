
import useAddUser from '../../hooks/useUsers'
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../keys';

function MenuComponent() {
  const { fetchUser } = useAddUser();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-200 rounded-lg shadow-md">
      <button
        onClick={() => fetchUser()}
        className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-600 transition w-full sm:w-auto text-xl"
      >
        Fetch One More User
      </button>
  
      <button
        onClick={() => navigate(ROUTER_KEYS.ALL)}
        className="bg-yellow-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-yellow-600 transition w-full sm:w-auto text-xl"
      >
        Show all users
      </button>
  
      <button
        onClick={() => {
          navigate(ROUTER_KEYS.SAVED);
        }}
        className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-green-600 transition w-full sm:w-auto text-xl"
      >
        View All Saved Users
      </button>
    </div>
  );
}

export default MenuComponent