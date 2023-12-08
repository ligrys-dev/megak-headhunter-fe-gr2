import {StudentProfileInterface} from "types";
import './EditStudentEmploymentExpectations.css';
import { EditStudentDataContext } from "src/context/EditStudentDataContext";
import { useContext } from 'react';

interface Props {
    onChange: Function;
}

export const EditStudentEmploymentExpectations = (props: Props) => {
    const {form, setForm} = useContext(EditStudentDataContext);
    


    const checkTypeOfWork = () => {
        switch (form.expectedTypeWork) {
            case 0:
                return 'Biuro';
            case 1:
                return 'Gotowość do przeprowadzki';
            case 2:
                return 'Zdalnie';
            case 3:
                return 'Hybrydowo';
            case 4:
                return 'Brak preferencji';
            default:
                return null;
        }
    }

    const checkTypeOfContract = () => {
        switch (form.expectedContractType) {
            case 0:
                return 'Umowa o prace';
            case 1:
                return 'B2B';
            case 2:
                return 'Umowa zlecenie/Umowa o dzieło';
            case 3:
                return 'Brak preferencji';
            default:
                return null;
        }
    }

    const checkMonthsOfCommercialExp = () => {
        const arrayOfMonths = [2, 3, 4];
        if (form.monthsOfCommercialExp === 1) {
            return '1 miesiąc'
        } else if (arrayOfMonths.includes(form.monthsOfCommercialExp)) {
            return `${form.monthsOfCommercialExp} miesiące`
        } else {
            return `${form.monthsOfCommercialExp} miesięcy`
        }
    }

    return (
        <>
            <h2>Oczekiwania w stosunku do zatrudnienia</h2>
            <div className="employment-expectations">
                <div className="employment-expectations-left-side">
                    <div className="place-of-work">
                        <h3>Preferowane miejse pracy</h3>
                        <select onChange={e => props.onChange('expectedTypeWork', e.target.value)} defaultValue={form.expectedTypeWork ? form.expectedTypeWork : 4}>
                            <option value={0}>Biuro</option>
                            <option value={1}>Gotowość do przeprowadzki</option>
                            <option value={2}>Zdalnie</option>
                            <option value={3}>Hybrydowo</option>
                            <option value={4}>Brak preferencji</option>
                            </select>
                    </div>
                    <div className="city-of-work">
                        <h3>Docelowe miasto, gdzie chce pracować kandydat</h3>
                        <input value={form.targetWorkCity} onChange={e => props.onChange('targetWorkCity', e.target.value)}></input>
                    </div>
                    <div className="type-of-contract">
                        <h3>Oczekiwany typ kontraktu</h3>
                        <select onChange={e => props.onChange('expectedContractType', e.target.value)} defaultValue={form.expectedContractType ? form.expectedContractType : 4}>
                            <option value={0}>Umowa o prace</option>
                            <option value={1}>B2B</option>
                            <option value={2}>Umowa zlecenie/Umowa o dzieło</option>
                            <option value={3}>Hybrydowo</option>
                            <option value={4}>Brak preferencji</option>
                        </select>
                    </div>
                </div>
                <div className="employment-expectations-right-side">
                    <div className="place-of-work">
                        <h3>Oczekiwane wynagrodzenie netto miesięcznie</h3>
                        <input onChange={e => props.onChange('expectedSalary', e.target.value)} value={form.expectedSalary ? form.expectedSalary : ''}></input>
                    </div>
                    <div className="can-take-apprenticeship">
                        <h3>Zgod na odbycie bezpłatnych praktyk/stażu na początek</h3>
                        <input type="checkbox" checked={form.canTakeApprenticeship ? form.canTakeApprenticeship : false} onChange={e => props.onChange('canTakeApprenticeship', e.target.checked)}/>
                    </div>
                    <div className="months-of-commercial-exp">
                        <h3>Komercyjne doświadczenie w programowaniu</h3>
                        <p>Ilość miesięcy: </p>
                        <input value={form.monthsOfCommercialExp} type = 'number' onChange={e => props.onChange('monthsOfCommercialExp', e.target.value)}></input>
                    </div>
                </div>
            </div>
        </>
    )
}