import { useState, useEffect, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TypeWork, ContractType, StudentProfileInterface } from 'types';
import './EditStudentData.css';

interface StudentProfileFormProps {
  onSubmit: SubmitHandler<StudentProfileInterface>;
  initialData?: StudentProfileInterface;
}

export const EditStudentData: FC<StudentProfileFormProps> = ({
  onSubmit,
  initialData = {} as StudentProfileInterface,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentProfileInterface>({
    defaultValues: initialData,
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(!!initialData.id);
  }, [initialData.id]);

  const submitForm = handleSubmit(async data => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  });

  return (
    <form onSubmit={submitForm}>
      <div className="student-profile-input-container">
        <label htmlFor="firstName">Imię</label>
        <input
          {...register('firstName', { required: 'To pole jest wymagane' })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="lastName">Nazwisko</label>
        <input
          {...register('lastName', { required: 'To pole jest wymagane' })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="tel">Numer telefonu</label>
        <input {...register('tel')} />
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="githubUsername">Konto GitHub</label>
        <input
          {...register('githubUsername', {
            required: 'To pole jest wymagane',
          })}
        />
        {errors.githubUsername && <p>{errors.githubUsername.message}</p>}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="portfolioUrls">
          Portfolio (przedzielone przecinkami)
        </label>
        <input {...register('portfolioUrls')} />
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="projectUrls">Projekty (przedzielone przecinkami)</label>
        <input
          {...register('projectUrls', { required: 'To pole jest wymagane' })}
        />
        {errors.projectUrls && <p>{errors.projectUrls.message}</p>}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="bio">Bio</label>
        <textarea {...register('bio', { required: 'To pole jest wymagane' })} />
        {errors.bio && <p>{errors.bio.message}</p>}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="expectedTypeWork">Preferowane miejsce pracy</label>
        <select
          {...register('expectedTypeWork', {
            required: 'To pole jest wymagane',
          })}
        >
          <option value={''}>--wybierz--</option>
          <option value={TypeWork.AT_LOCATION}>Na miejscu</option>
          <option value={TypeWork.DOES_NOT_MATTER}>Nie ma znaczenia</option>
          <option value={TypeWork.HYBRID}>Hybrydowo</option>
          <option value={TypeWork.READINESS_TO_MOVE}>
            Gotowość do przeprowadzi
          </option>
          <option value={TypeWork.REMOTE_ONLY}>Zdalnie</option>
        </select>
        {errors.expectedTypeWork && <p>{errors.expectedTypeWork.message}</p>}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="targetWorkCity">Miasto</label>
        <input
          {...register('targetWorkCity', {
            required: 'To pole jest wymagane',
          })}
        />
        {errors.targetWorkCity && <p>{errors.targetWorkCity.message}</p>}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="expectedContractType">Preferowany typ kontraktu</label>
        <select
          {...register('expectedContractType', {
            required: 'To pole jest wymagane',
          })}
        >
          <option value={''}>--wybierz--</option>
          <option value={ContractType.CONTRACT}>Umowa o pracę</option>
          <option value={ContractType.MANDATE_CONTRACT}>Umowa zlecenie</option>
          <option value={ContractType.NO_PREFERENCE}>Bez znaczenia</option>
          <option value={ContractType.POSSIBLE_B2B}>B2B</option>
        </select>
        {errors.expectedContractType && (
          <p>{errors.expectedContractType.message}</p>
        )}
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="expectedSalary">Oczekiwane wynagrodzenie</label>
        <input type="number" {...register('expectedSalary')} />
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="canTakeApprenticeship">
          Możliwość bezpłatnego stażu
        </label>
        <input type="checkbox" {...register('canTakeApprenticeship')} />
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="monthsOfCommercialExp">
          Doświadczenie komercyjne (w miesiącach)
        </label>
        <input type="number" {...register('monthsOfCommercialExp')} />
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="education">Edukacja</label>
        <input {...register('education')} />
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="workExperience">Doświadczenie zawodowe</label>
        <input {...register('workExperience')} />
      </div>

      <div className="student-profile-input-container">
        <label htmlFor="courses">Kursy</label>
        <input {...register('courses')} />
      </div>

      <button type="submit">
        {isEditing ? 'Aktualizuj' : 'Stwórz profil'}
      </button>
    </form>
  );
};
