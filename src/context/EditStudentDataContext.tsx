import { createContext } from "react";
import { StudentProfileInterface } from "../../../megak-v3-headhunter-be-gr2/src/types/student";

export const EditStudentDataContext = createContext({
    form: {},
    setForm: (form: StudentProfileInterface) => {},
});