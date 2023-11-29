import {useState} from 'react';
import {PanelHeader} from "../common/PanelHeader/PanelHeader";
import './StudentPanel.css';
import {ContractType, NewStudentEntity, TypeWork} from "types";

export const StudentPanel = () => {
    const [user, setUser] =useState<NewStudentEntity>({
        email: 'acb@abc.pl',
        tel: 123456789,
        firstName: 'Student',
        lastName: 'Testowy',
        avatar: null,
        githubUsername: '',
        portfolioUrls: [''],
        projectUrls: [''],
        bio: '',
        expectedTypeWork: TypeWork.DoesNotMatter,
        targetWorkCity: '',
        expectedContractType: ContractType.CONTRACT,
        expectedSalary: null,
        canTakeApprenticeship: false,
        monthsOfCommercialExp: 0,
        education: '',
        workExperience: null,
        courses: null
    })

    return (
        <>
            <div className="student_panel">
                <PanelHeader name={user.firstName} lastName={user.lastName}  urlAccount="/student1" urlLogOut="/logout1" githubUsername={user.githubUsername}/>
                <div className="panel_main">
                </div>
            </div>
        </>
    );
};