import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { ContractType, StudentFilters, TypeWork } from 'types';
import './FilterForm.css';

const initialFormData: StudentFilters = {
    courseCompletion: undefined,
    courseEngagement: undefined,
    projectDegree: undefined,
    teamProjectDegree: undefined,
    'profile.expectedTypeWork': undefined,
    'profile.expectedContractType': undefined,
    '.profile.expectedSalary': {
        min: undefined,
        max: undefined,
    },
    'profile.canTakeApprenticeship': undefined,
    'profile.monthsOfCommercialExp': undefined,
};

interface Props {
    onHandleFilter: (data: StudentFilters) => void;
}

export const FilterForm: FC<Props> = ({ onHandleFilter }) => {
    const [formData, setFormData] = useState<StudentFilters>(initialFormData);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;

        setFormData((prevFormData: NonNullable<unknown>) => ({
            ...prevFormData,
            [name]:
                type === 'number'
                    ? Number(value)
                    : type === 'radio'
                        ? value === '1'
                            ? 1
                            : 0
                        : value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const result: StudentFilters = {};

        for (const key in formData) {
            if (formData[key] !== undefined) result[key] = formData[key];
        }

        onHandleFilter(result);
    };

    return (
        <form className="form-popup" onSubmit={handleSubmit}>
            <div>
                <label>
                    Ocena przejścia kursu:
                    <input
                        type="number"
                        name="courseCompletion"
                        value={formData.courseCompletion}
                        onChange={handleInputChange}
                        min={0}
                        max={5}
                        placeholder={0}
                    />
                </label>
            </div>

            <div>
                <label>
                    Ocena zaangażowania na kursie:
                    <input
                        type="number"
                        name="courseEngagement"
                        value={formData.courseEngagement}
                        onChange={handleInputChange}
                        min={0}
                        max={5}
                        placeholder={0}
                    />
                </label>
            </div>

            <div>
                <label>
                    Ocena kodu w projekcie własnym:
                    <input
                        type="number"
                        name="projectDegree"
                        value={formData.projectDegree}
                        onChange={handleInputChange}
                        min={0}
                        max={5}
                        placeholder={0}
                    />
                </label>
            </div>

            <div>
                <label>
                    Ocena kodu w zespole Scrum:
                    <input
                        type="number"
                        name="teamProjectDegree"
                        value={formData.teamProjectDegree}
                        onChange={handleInputChange}
                        min={0}
                        max={5}
                        placeholder={0}
                    />
                </label>
            </div>

            <div>
                <label>
                    Preferowane miejsce pracy:
                    <div>
                        <label>
                            Biuro
                            <input
                                type="radio"
                                name="profile.expectedTypeWork"
                                value={TypeWork.AT_LOCATION}
                                checked={
                                    formData['profile.expectedTypeWork'] === TypeWork.AT_LOCATION
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedTypeWork': TypeWork.AT_LOCATION,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Zdalnie
                            <input
                                type="radio"
                                name="profile.expectedTypeWork"
                                value={TypeWork.REMOTE_ONLY}
                                checked={
                                    formData['profile.expectedTypeWork'] === TypeWork.REMOTE_ONLY
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedTypeWork': TypeWork.REMOTE_ONLY,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Hybrydowo
                            <input
                                type="radio"
                                name="profile.expectedTypeWork"
                                value={TypeWork.HYBRID}
                                checked={
                                    formData['profile.expectedTypeWork'] === TypeWork.HYBRID
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedTypeWork': TypeWork.HYBRID,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Gotowość do przeprowadzki
                            <input
                                type="radio"
                                name="profile.expectedTypeWork"
                                value={TypeWork.READINESS_TO_MOVE}
                                checked={
                                    formData['profile.expectedTypeWork'] ===
                                    TypeWork.READINESS_TO_MOVE
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedTypeWork': TypeWork.READINESS_TO_MOVE,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Nie ma znaczenia
                            <input
                                type="radio"
                                name="profile.expectedTypeWork"
                                value={TypeWork.DOES_NOT_MATTER}
                                checked={
                                    formData['profile.expectedTypeWork'] ===
                                    TypeWork.DOES_NOT_MATTER
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedTypeWork': TypeWork.DOES_NOT_MATTER,
                                    }))
                                }
                            />
                        </label>
                    </div>
                </label>
            </div>

            <div>
                <label>
                    Oczekiwany typ kontraktu:
                    <div>
                        <label>
                            UoP
                            <input
                                type="radio"
                                name="profile.expectedContractType"
                                value={ContractType.CONTRACT}
                                checked={
                                    formData['profile.expectedContractType'] ===
                                    ContractType.CONTRACT
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedContractType': ContractType.CONTRACT,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            B2B
                            <input
                                type="radio"
                                name="profile.expectedContractType"
                                value={ContractType.POSSIBLE_B2B}
                                checked={
                                    formData['profile.expectedContractType'] ===
                                    ContractType.POSSIBLE_B2B
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedContractType': ContractType.POSSIBLE_B2B,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Zlecenie
                            <input
                                type="radio"
                                name="profile.expectedContractType"
                                value={ContractType.MANDATE_CONTRACT}
                                checked={
                                    formData['profile.expectedContractType'] ===
                                    ContractType.MANDATE_CONTRACT
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedContractType':
                                        ContractType.MANDATE_CONTRACT,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Nie ma znaczenia
                            <input
                                type="radio"
                                name="profile.expectedContractType"
                                value={ContractType.NO_PREFERENCE}
                                checked={
                                    formData['profile.expectedContractType'] ===
                                    ContractType.NO_PREFERENCE
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.expectedContractType': ContractType.NO_PREFERENCE,
                                    }))
                                }
                            />
                        </label>
                    </div>
                </label>
            </div>
            <div>
                <label>
                    Oczekiwane wynagrodzenie miesięczne netto (min):
                    <input
                        type="number"
                        name="profile.expectedSalaryMin"
                        value={formData['profile.expectedSalary']?.min}
                        onChange={e =>
                            setFormData(prevFormData => ({
                                ...prevFormData,
                                'profile.expectedSalary': {
                                    ...prevFormData['profile.expectedSalary'],
                                    min: parseFloat(e.target.value),
                                },
                            }))
                        }
                        placeholder="np. 1000 zł"
                    />
                </label>
            </div>

            <div>
                <label>
                    Oczekiwane wynagrodzenie miesięczne netto (max):
                    <input
                        type="number"
                        name="profile.expectedSalaryMax"
                        value={formData['profile.expectedSalary']?.max}
                        onChange={e =>
                            setFormData(prevFormData => ({
                                ...prevFormData,
                                'profile.expectedSalary': {
                                    ...prevFormData['profile.expectedSalary'],
                                    max: parseFloat(e.target.value),
                                },
                            }))
                        }
                        placeholder="np. 10000 zł"
                    />
                </label>
            </div>

            <div>
                <label>
                    Zgoda na odbycie bezpłatnych praktyk:
                    <div>
                        <label>
                            Tak
                            <input
                                type="radio"
                                name="profile.canTakeApprenticeship"
                                value={1}
                                checked={!!formData['profile.canTakeApprenticeship']}
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.canTakeApprenticeship': 1,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Nie
                            <input
                                type="radio"
                                name="profile.canTakeApprenticeship"
                                value={0}
                                checked={
                                    formData['profile.canTakeApprenticeship'] === undefined
                                        ? false
                                        : !formData['profile.canTakeApprenticeship']
                                }
                                onChange={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        'profile.canTakeApprenticeship': 0,
                                    }))
                                }
                            />
                        </label>
                    </div>
                </label>
            </div>

            <div>
                <label>
                    Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu:
                    <input
                        type="number"
                        name="profile.monthsOfCommercialExp"
                        value={formData['profile.monthsOfCommercialExp']}
                        onChange={handleInputChange}
                        min={0}
                        placeholder="0 miesięcy"
                    />
                </label>
            </div>
            <button type="submit">Pokaż wyniki</button>
        </form>
    );
};
