import {StudentProfileInterface} from "types";
import './EditStudentExperience.css';
import { EditStudentDataContext } from "src/context/EditStudentDataContext";
import {useContext} from 'react';
import { AddLink } from "./AddLink";

interface Props {
    onChange: Function,
}

export const EditStudentExperience = (props: Props) => {
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
            <textarea value={form.workExperience ? form.workExperience : 'Brak danych'} onChange={e => props.onChange('workExperience', e.target.value)}></textarea>
            <h2>Portfolio</h2>
            <div className="links-container">
                {form.portfolioUrls ? setPortfolioLinks(form.portfolioUrls) : 'Brak danych'}
                <AddLink onChange = {props.onChange} typeOfKey = 'portfolioUrls'></AddLink>
            </div>
            <h2>Projekt w zespole Scrumowym</h2>
            <div className="links-container">
                {form.initialData.bonusProjectUrls ? setPortfolioLinks(form.initialData.bonusProjectUrls) : 'Brak danych'}
            </div>
            <h2>Projekt na zaliczenie</h2>
            <div className="links-container">
                {form.projectUrls ? setPortfolioLinks(form.projectUrls) : 'Brak danych'}
                <AddLink onChange={props.onChange} typeOfKey='projectUrls'></AddLink>
            </div>
        </div>
    )
}