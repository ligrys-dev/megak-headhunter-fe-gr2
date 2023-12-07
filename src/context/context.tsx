import {createContext} from "react";

export const UserContext = createContext({
    user: {id: '', role: 4},
    setUser: () => {}

})
