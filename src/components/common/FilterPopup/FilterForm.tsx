import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { ContractType, TypeWork } from 'types';

interface FilterForm {
  courseCompletion: number | undefined;
  courseEngagement: number | undefined;
  projectDegree: number | undefined;
  teamProjectDegree: number | undefined;
  expectedTypeWork: TypeWork | undefined;
  expectedContractType: ContractType | undefined;
  expectedSalary: {
    min: number | undefined;
    max: number | undefined;
  };
  canTakeApprenticeship: boolean | undefined;
  monthsOfCommercialExp: number | undefined;
}

const initialFormData: FilterForm = {
  courseCompletion: undefined,
  courseEngagement: undefined,
  projectDegree: undefined,
  teamProjectDegree: undefined,
  expectedTypeWork: undefined,
  expectedContractType: undefined,
  expectedSalary: {
    min: undefined,
    max: undefined,
  },
  canTakeApprenticeship: undefined,
  monthsOfCommercialExp: undefined,
};

export const FilterForm: FC = () => {
  const [formData, setFormData] = useState<FilterForm>(initialFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
                name="expectedTypeWork"
                value={TypeWork.AT_LOCATION}
                checked={formData.expectedTypeWork === TypeWork.AT_LOCATION}
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedTypeWork: TypeWork.AT_LOCATION,
                  }))
                }
              />
            </label>

            <label>
              Zdalnie
              <input
                type="radio"
                name="expectedTypeWork"
                value={TypeWork.REMOTE_ONLY}
                checked={formData.expectedTypeWork === TypeWork.REMOTE_ONLY}
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedTypeWork: TypeWork.REMOTE_ONLY,
                  }))
                }
              />
            </label>

            <label>
              Hybrydowo
              <input
                type="radio"
                name="expectedTypeWork"
                value={TypeWork.HYBRID}
                checked={formData.expectedTypeWork === TypeWork.HYBRID}
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedTypeWork: TypeWork.HYBRID,
                  }))
                }
              />
            </label>

            <label>
              Gotowość do przeprowadzki
              <input
                type="radio"
                name="expectedTypeWork"
                value={TypeWork.READINESS_TO_MOVE}
                checked={
                  formData.expectedTypeWork === TypeWork.READINESS_TO_MOVE
                }
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedTypeWork: TypeWork.READINESS_TO_MOVE,
                  }))
                }
              />
            </label>

            <label>
              Nie ma znaczenia
              <input
                type="radio"
                name="expectedTypeWork"
                value={TypeWork.DOES_NOT_MATTER}
                checked={formData.expectedTypeWork === TypeWork.DOES_NOT_MATTER}
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedTypeWork: TypeWork.DOES_NOT_MATTER,
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
                name="expectedContractType"
                value={ContractType.CONTRACT}
                checked={
                  formData.expectedContractType === ContractType.CONTRACT
                }
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedContractType: ContractType.CONTRACT,
                  }))
                }
              />
            </label>

            <label>
              B2B
              <input
                type="radio"
                name="expectedContractType"
                value={ContractType.POSSIBLE_B2B}
                checked={
                  formData.expectedContractType === ContractType.POSSIBLE_B2B
                }
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedContractType: ContractType.POSSIBLE_B2B,
                  }))
                }
              />
            </label>

            <label>
              Zlecenie
              <input
                type="radio"
                name="expectedContractType"
                value={ContractType.MANDATE_CONTRACT}
                checked={
                  formData.expectedContractType ===
                  ContractType.MANDATE_CONTRACT
                }
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedContractType: ContractType.MANDATE_CONTRACT,
                  }))
                }
              />
            </label>

            <label>
              Nie ma znaczenia
              <input
                type="radio"
                name="expectedContractType"
                value={ContractType.NO_PREFERENCE}
                checked={
                  formData.expectedContractType === ContractType.NO_PREFERENCE
                }
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    expectedContractType: ContractType.NO_PREFERENCE,
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
            name="expectedSalaryMin"
            value={formData.expectedSalary.min}
            onChange={e =>
              setFormData(prevFormData => ({
                ...prevFormData,
                expectedSalary: {
                  ...prevFormData.expectedSalary,
                  min: parseFloat(e.target.value),
                },
              }))
            }
          />
        </label>
      </div>

      <div>
        <label>
          Oczekiwane wynagrodzenie miesięczne netto (max):
          <input
            type="number"
            name="expectedSalaryMax"
            value={formData.expectedSalary.max}
            onChange={e =>
              setFormData(prevFormData => ({
                ...prevFormData,
                expectedSalary: {
                  ...prevFormData.expectedSalary,
                  max: parseFloat(e.target.value),
                },
              }))
            }
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
                name="canTakeApprenticeship"
                value={1}
                checked={formData.canTakeApprenticeship}
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    canTakeApprenticeship: true,
                  }))
                }
              />
            </label>

            <label>
              Nie
              <input
                type="radio"
                name="internshipConsent"
                value={0}
                checked={!formData.canTakeApprenticeship}
                onChange={() =>
                  setFormData(prev => ({
                    ...prev,
                    canTakeApprenticeship: false,
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
            name="experienceMonths"
            value={formData.monthsOfCommercialExp}
            onChange={handleInputChange}
            min={0}
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
