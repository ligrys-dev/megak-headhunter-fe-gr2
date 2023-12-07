import { createContext } from "react";
import { StudentProfileInterface } from "../../../megak-v3-headhunter-be-gr2/src/types/student";

export const EditStudentDataContext = createContext({
    form: {
        id: '',
        initialData: null,
        tel: null,
        firstName: '',
        lastName: '',
        githubUsername: '',
        portfolioUrls: null,
        projectUrls: [],
        bio: '',
        expectedTypeWork: 0,
        targetWorkCity: '',
        expectedContractType: 0,
        expectedSalary: null,
        canTakeApprenticeship: false,
        monthsOfCommercialExp: 0,
        education: null,
        workExperience: null,
        courses: null,
        status: 0,
      } as StudentProfileInterface,
    setForm: (form: StudentProfileInterface) => {},
});