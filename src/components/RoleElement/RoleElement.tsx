import {Role} from "types";
import {NoAccess} from "../common/NoAccess/NoAccess";

export const AdminElement = ({role, children}) => {
    if (role === Role.ADMIN) {
        return<>{children}</>
    } else {
        return <NoAccess role={role}/>
    }
}

export const StudentElement = ({role, children}) => {
    if (role === Role.STUDENT) {
        return<>{children}</>
    } else {
        return <NoAccess role={role}/>
    }
}

export const HRElement = ({role, children}) => {
    if (role === Role.HR) {
        return<>{children}</>
    } else {
        return <NoAccess role={role}/>
    }
}