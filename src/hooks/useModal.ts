import { useModalStore } from "../shared/store/modal.store"
import { useWeatherStore } from "../shared/store/weather.store";
import { WindowList } from "../types/windows.enum"

const useModal = () => {
    const setModal = useModalStore((state)=>state.setIsOpen);
    const isOpen = useModalStore((state)=>state.isOpen);
    const window = useModalStore((state)=>state.window);

    const setWeather = useWeatherStore((state)=>state.setWeather);

    const openModal = (windowData:WindowList) =>{
        setModal(true, windowData);
        document.body.style.overflow = "hidden";
    };

    const closeModal = (windowData:WindowList) =>{
        setModal(false, windowData);
        setWeather(null);
        document.body.style.overflow = "auto";
    };

    return {isOpen, openModal, closeModal, window}
}

export default useModal