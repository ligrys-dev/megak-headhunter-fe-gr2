import {Role} from "types";
import {NoAccess} from "../common/NoAccess/NoAccess";

const CURRENT_USER = Role.STUDENT;

export const AdminElement = ({children}) => {
    if (CURRENT_USER === Role.ADMIN) {
        return<>{children}</>
    } else {
        return <NoAccess/>
    }
}

export const StudentElement = ({children}) => {
    if (CURRENT_USER === Role.STUDENT) {
        return<>{children}</>
    } else {
        return <NoAccess/>
    }
}

export const HRElement = ({children}) => {
    if (CURRENT_USER === Role.HR) {
        return<>{children}</>
    } else {
        return <NoAccess/>
    }
}