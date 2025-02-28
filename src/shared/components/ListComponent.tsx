import { User } from '../../types/user.type';
import UserComponent from '../../components/UserComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { useLoadigStore } from '../store/loading.store';

interface ListCompontentProps{
  data:User[]
}

function ListComponent({data}:ListCompontentProps) {
    const loading = useLoadigStore((state)=>state.loading)
    return (
        <div className="h-full p-6 z-10">
          <h2 className="text-2xl font-semibold mb-2 text-center">Users</h2>
          {(data!.length === 0 || loading) && <LoadingComponent/>}
          <div className="flex flex-col gap-6">
            {data!.map((user, index) => (
              <UserComponent key={index} data={user} />
            ))}
          </div>
        </div>
      );
}

export default ListComponent