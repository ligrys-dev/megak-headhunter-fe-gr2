import {useState} from 'react';
import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";
import {ChangePassword} from "../common/ChangePassword/ChangePassword";
import {
    ContractType,
    StudentProfileInterface,
    StudentStatus,
    TypeWork,
    StudentInitialInterface
} from "types";
import './StudentPanel.css';
import {WelcomeView} from "../common/WelcomeView/WelcomeView";

export const StudentPanel = () => {
    const [password, setPassword] = useState(false);
    const [bookmarksView, setBookmarksView] = useState('');
    const bookmarks = [
        ['studentData', 'Dane kursanta'],
        ['editStudentData', 'Edycja danych'],
        ['notification', 'Powiadomienia'],
    ];

    const [userInitial, setUserInitial] = useState<StudentInitialInterface | null>({
        email: 'abc@abc.pl',
        courseCompletion: 3,
        courseEngagement: 3,
        projectDegree: 2,
        teamProjectDegree: 2,
        bonusProjectUrls: ['Linki7', 'Link8', 'Link9'],
    })
    const [user, setUser] = useState<StudentProfileInterface | null>({
        tel: '123456789',
        initialData: userInitial,
        firstName: 'Student',
        lastName: 'Testowy',
        githubUsername: '',
        portfolioUrls: ['Linki1', 'Link2', 'Link3'],
        projectUrls: ['Linki4', 'Link5', 'Link6'],
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque commodi corporis delectus dolor ducimus earum eos est eum ex facere fuga hic impedit incidunt, inventore',
        expectedTypeWork: TypeWork.DOES_NOT_MATTER,
        targetWorkCity: 'Kraków',
        expectedContractType: ContractType.MANDATE_CONTRACT,
        expectedSalary: null,
        canTakeApprenticeship: false,
        monthsOfCommercialExp: 3,
        education: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque commodi corporis delectus dolor ducimus earum eos est eum ex facere fuga hic impedit incidunt, inventore',
        workExperience: 'Firma X',
        courses: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque commodi corporis delectus dolor ducimus earum eos est eum ex facere fuga hic impedit incidunt, inventore',
        status: StudentStatus.AVAILABLE,
    });

    const handleChildHeaderClick = (newMessage) => {
        setPassword(newMessage);
        setBookmarksView(false)
    };

    const handleChildBookmarksClick = (newMessage) => {
        setBookmarksView(newMessage);
    };

    return (
        <div className="student_panel">
            <HeaderPanel name={user?.firstName} lastName={user?.lastName} urlAccount="/student"
                         avatar={user?.githubUsername} onChildClick={handleChildHeaderClick}/>
            <div className="panel_main">
                <BookmarksPanel user={user} bookmarks={bookmarks} bookmarksView={bookmarksView} onChildClick={handleChildBookmarksClick}/>
                {/*@TODO tutaj trzeba dodać warunek: jeżeli nie ma danych kursanta to komponent z uzupełnianiem profilu a jak są dane to <WelcomeView/>*/}
                {bookmarksView ? '' : (password ? <ChangePassword/> : <WelcomeView name={user?.firstName}/>)}
            </div>
        </div>
    );
};