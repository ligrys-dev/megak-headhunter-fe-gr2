import {StudentProfileInterface} from "types";
import './StudentExperience.css';

interface Props {
    user: StudentProfileInterface
}

export const EditStudentExperience = (props: Props) => {
    const {workExperience, portfolioUrls, projectUrls, initialData} = props.user;

    const setPortfolioLinks = (portfolioUrls) => {
        return (
            portfolioUrls.map((url, index) => (
                    <div key={index} className="portfolio-links">
                        <img src="/assets/clip.png" alt="Clip image"/>
                        <p>{url}</p>
                    </div>
                )
            )
        )
    }

    return (
        <div className="student-experience">
            <h2>Doświadczenie zawodowe</h2>
            <p>{workExperience ? workExperience : 'Brak danych'}</p>
            <h2>Portfolio</h2>
            <div className="links-container">
                {portfolioUrls ? setPortfolioLinks(portfolioUrls) : 'Brak danych'}
            </div>
            <h2>Projekt w zespole Scrumowym</h2>
            <div className="links-container">
                {initialData.bonusProjectUrls ? setPortfolioLinks(initialData.bonusProjectUrls) : 'Brak danych'}
            </div>
            <h2>Projekt na zaliczenie</h2>
            <div className="links-container">
                {projectUrls ? setPortfolioLinks(projectUrls) : 'Brak danych'}
            </div>
        </div>
    )
}