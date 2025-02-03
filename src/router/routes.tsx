import FetchPage from "../pages/FetchPage";
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

]