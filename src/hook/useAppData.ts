import { useContext } from "react";
import { AppContext, AppProvider } from "../context/AppProvider";

const useAppData = () => useContext(AppContext)

export default useAppData