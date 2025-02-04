import FetchPage from "../pages/FetchPage";
import MapPage from "../pages/MapPage";
import SavedPage from "../pages/SavedPage";
import { ROUTER_KEYS } from "../shared/keys";

export const routes = [
    {
        route: ROUTER_KEYS.ALL,
        element: <FetchPage/>
    },
    {
        route: ROUTER_KEYS.SAVED,
        element: <SavedPage/>
    },
    {
        route: ROUTER_KEYS.MAP,
        element: <MapPage/>
    },

]