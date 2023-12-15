import {StudentInitialInterface} from "types";
import './StudentExperience.css';

interface Props {
    user: StudentInitialInterface
}

export const StudentExperience = (props: Props) => {
    const setPortfolioLinks = (portfolioUrls) => {
        return (
            portfolioUrls?.map((url, index) => (
                    <div key={index} className="portfolio-links">
                        <img src="/assets/clip.png" alt="Clip image"/>
                        <p>{url}</p>
                    </div>
                )
            )
        )
    }

    const {bonusProjectUrls, profile} = props.user;
    return (
        <div className="student-experience">
            <h2>Doświadczenie zawodowe</h2>
            <p>{profile ? profile.workExperience : 'Brak danych'}</p>
            <h2>Portfolio</h2>
            <div className="links-container">
                {profile ? setPortfolioLinks(profile.portfolioUrls) : 'Brak danych'}
            </div>
            <h2>Projekt w zespole Scrumowym</h2>
            <div className="links-container">
                {bonusProjectUrls ? setPortfolioLinks(bonusProjectUrls) : 'Brak danych'}
            </div>
            <h2>Projekt na zaliczenie</h2>
            <div className="links-container">
                {profile ? setPortfolioLinks(profile.projectUrls) : 'Brak danych'}
            </div>
        </div>
    )
}