import {Role} from "types";
import {NoAccess} from "../common/NoAccess/NoAccess";

const CURRENT_USER = Number(localStorage.getItem('userRole'));

export const AdminElement = ({children}) => {
    if (CURRENT_USER === Role.ADMIN) {
        return<>{children}</>
    } else {
        return <NoAccess role={CURRENT_USER}/>
    }
}

export const StudentElement = ({children}) => {
    if (CURRENT_USER === Role.STUDENT) {
        return<>{children}</>
    } else {
        return <NoAccess role={CURRENT_USER}/>
    }
}

export const HRElement = ({children}) => {
    if (CURRENT_USER === Role.HR) {
        return<>{children}</>
    } else {
        return <NoAccess role={CURRENT_USER}/>
    }
}