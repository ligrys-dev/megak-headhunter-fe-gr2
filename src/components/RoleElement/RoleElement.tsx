import {Role} from "types";
import {NoAccess} from "../common/NoAccess/NoAccess";
import {useContext} from "react";
import {UserContext} from "../../context/context";

export const AdminElement = ({children}) => {
    const userRole = useContext(UserContext);
    if (userRole.user.role === Role.ADMIN) {
        return<>{children}</>
    } else {
        return <NoAccess role={userRole.user.role}/>
    }
}

export const StudentElement = ({children}) => {
    const userRole = useContext(UserContext);
    if (userRole.user.role === Role.STUDENT) {
        return<>{children}</>
    } else {
        return <NoAccess role={userRole.user.role}/>
    }
}

export const HRElement = ({children}) => {
    const userRole = useContext(UserContext);
    if (userRole.user.role === Role.HR) {
        return<>{children}</>
    } else {
        return <NoAccess role={userRole.user.role}/>
    }
}