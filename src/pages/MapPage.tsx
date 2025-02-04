import { GoogleMap, Marker} from '@react-google-maps/api';
import { useUserStore } from '../shared/store/user.store';
import LoadingComponent from '../components/LoadingComponent';
const containerStyle = {
    width: '90%',
    height: '400px',
  };
  
  function MapPage() {
    const currentUser = useUserStore((state) => state.currentUser);
    console.log(currentUser);

    const lat = Number(currentUser?.location.coordinates.latitude);
    const lon = Number(currentUser?.location.coordinates.longitude);

    const markerIcon = currentUser?.picture.thumbnail||"https://maps.google.com/mapfiles/ms/icons/red-dot.png";

    const handleMapLoad = (mapInstance: google.maps.Map) => {
        
        new google.maps.Marker({
          position: {lat, lng:lon},
          map: mapInstance,
          title: 'San Francisco',
          icon: {
            url: markerIcon, 
            scaledSize: new google.maps.Size(25, 25),
          }, 
        });
      };
    return (
        <div className='w-full flex items-center justify-center'>
            {currentUser ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{lat, lng:lon}}
                    zoom={5}
                    onLoad={handleMapLoad}
                >
                    <Marker position={{ lat:lat, lng: lon }} icon={{ url: markerIcon }} />
                </GoogleMap>
            ) : (
                <LoadingComponent />
            )}
        </div>
    );
}

export default MapPage;