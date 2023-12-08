import {Role} from "types";
import {NoAccess} from "../common/NoAccess/NoAccess";
import {UserContext} from "../../context/context";
import {useContext, useRef} from "react";

const CURRENT_USER = Number(localStorage.getItem('role'));

export const AdminElement = ({children}) => {
    const userRole = useContext(UserContext).user.role;
    const role = useRef(1);
    const arr = [1, 2, 3];
    if (arr.includes(userRole)) {
        localStorage.setItem('role', userRole);
        role.current = userRole;
    } else {
        role.current
    }

    if (userRole !== 4) {
        if (role.current === Role.ADMIN) {
            return <>{children}</>
        } else {
            return <NoAccess role={role.current}/>
        }
    } else {
        if (CURRENT_USER === Role.ADMIN) {
            return <>{children}</>
        } else {
            return <NoAccess role={CURRENT_USER}/>
        }
    }
}

export const StudentElement = ({children}) => {
    const userRole = useContext(UserContext).user.role;
    const userId =  useContext(UserContext).user.id;
    const role = useRef(2);
    const arr = [1, 2, 3];
    if (arr.includes(userRole)) {
        localStorage.setItem('role', userRole);
        localStorage.setItem('id', userId);
        role.current = userRole;
    } else {
        role.current
    }

    if (userRole !== 4) {
        if (role.current === Role.STUDENT) {
            return <>{children}</>
        } else {
            return <NoAccess role={role.current}/>
        }
    } else {
        if (CURRENT_USER === Role.STUDENT) {
            return <>{children}</>
        } else {
            return <NoAccess role={CURRENT_USER}/>
        }
    }
}

export const HRElement = ({children}) => {
    const userRole = useContext(UserContext).user.role;
    const userId =  useContext(UserContext).user.id;
    const role = useRef(3);
    const arr = [1, 2, 3];
    if (arr.includes(userRole)) {
        localStorage.setItem('role', userRole);
        localStorage.setItem('id', userId);
        role.current = userRole;
    } else {
        role.current
    }

    if (userRole !== 4) {
        if (role.current === Role.HR) {
            return <>{children}</>
        } else {
            return <NoAccess role={role.current}/>
        }
    } else {
        if (CURRENT_USER === Role.HR) {
            return <>{children}</>
        } else {
            return <NoAccess role={CURRENT_USER}/>
        }
    }
}