import {StudentProfileInterface} from "types";
import './EditStudentExperience.css';
import { EditStudentDataContext } from "src/context/EditStudentDataContext";
import {useContext} from 'react';

export const EditStudentExperience = () => {
    const {form, setForm} = useContext(EditStudentDataContext);

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
            <p>{form.workExperience ? form.workExperience : 'Brak danych'}</p>
            <h2>Portfolio</h2>
            <div className="links-container">
                {form.portfolioUrls ? setPortfolioLinks(form.portfolioUrls) : 'Brak danych'}
                <button>Dodaj link</button>
            </div>
            <h2>Projekt w zespole Scrumowym</h2>
            <div className="links-container">
                {form.initialData.bonusProjectUrls ? setPortfolioLinks(form.initialData.bonusProjectUrls) : 'Brak danych'}
            </div>
            <h2>Projekt na zaliczenie</h2>
            <div className="links-container">
                {form.projectUrls ? setPortfolioLinks(form.projectUrls) : 'Brak danych'}
            </div>
        </div>
    )
}