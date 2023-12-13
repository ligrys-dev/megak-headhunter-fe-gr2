import { useState, useEffect, FC } from 'react';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import {
  TypeWork,
  ContractType,
  StudentProfileInterface,
  NewStudentProfileInterface,
} from 'types';
import './EditStudentData.css';

interface StudentProfileFormProps {
  onSubmit: SubmitHandler<NewStudentProfileInterface | StudentProfileInterface>;
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
  } = useForm<StudentProfileInterface | NewStudentProfileInterface>({
    defaultValues: initialData,
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(!!initialData.id);
  }, [initialData.id]);

  const submitForm = handleSubmit(async data => {
    const transformedData:
      | NewStudentProfileInterface
      | StudentProfileInterface = {
      ...data,
      expectedSalary: data.expectedSalary
        ? Number(data.expectedSalary as unknown as string)
        : 0,
      monthsOfCommercialExp: data.monthsOfCommercialExp
        ? Number(data.monthsOfCommercialExp as unknown as string)
        : 0,
      projectUrls: Array.isArray(data.projectUrls)
        ? data.projectUrls
        : data.projectUrls
        ? (data.projectUrls as unknown as string)
            .split(',')
            .map(url => url.trim())
        : [],
      portfolioUrls: Array.isArray(data.portfolioUrls)
        ? data.portfolioUrls
        : data.portfolioUrls
        ? (data.portfolioUrls as unknown as string)
            .split(',')
            .map(url => url.trim())
        : [],
      expectedContractType: Number(
        data.expectedContractType as unknown as string,
      ),
      expectedTypeWork: Number(data.expectedTypeWork as unknown as string),
      tel: data.tel || null,
      workExperience: data.workExperience || null,
      courses: data.courses || null,
      education: data.education || null,
    };

    try {
      await onSubmit(transformedData);
      reset();
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  });

  return (
    <div className="edit-student-container">
      {isEditing ? (
        <h2>Zaktualizuj swoje dane</h2>
      ) : (
        <h2>Uzupełnij swoje dane</h2>
      )}
      <form onSubmit={submitForm}>
        <div className="student-profile-input-container">
          <label>
            Imię
            <input
              {...register('firstName', { required: 'To pole jest wymagane' })}
            />
          </label>
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div className="student-profile-input-container">
          <label>
            Nazwisko
            <input
              {...register('lastName', { required: 'To pole jest wymagane' })}
            />
          </label>
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div className="student-profile-input-container">
          <label>
            Numer telefonu
            <input {...register('tel')} />
          </label>
        </div>

        <div className="student-profile-input-container">
          <label>
            Konto GitHub
            <input
              {...register('githubUsername', {
                required: 'To pole jest wymagane',
              })}
            />
          </label>
          {errors.githubUsername && <p>{errors.githubUsername.message}</p>}
        </div>

        <div className="student-profile-input-container">
          <label>
            Portfolio (url, przedzielone przecinkami)
            <input {...register('portfolioUrls')} />
          </label>
        </div>

        <div className="student-profile-input-container">
          <label>
            Link(i) do projektu zaliczeniowego (url, przedzielone przecinkami)
            <input
              {...register('projectUrls', {
                required: 'To pole jest wymagane',
              })}
            />
          </label>
          {errors.projectUrls && <p>{errors.projectUrls.message}</p>}
        </div>

        <div className="student-profile-input-container">
          <label>
            Bio
            <textarea {...register('bio')} />
          </label>
          {errors.bio && <p>{errors.bio.message}</p>}
        </div>

        <div className="student-profile-input-container">
          <label>
            Preferowane miejsce pracy
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
          </label>
          {errors.expectedTypeWork && (
            <p>{(errors.expectedTypeWork as FieldError).message} </p>
          )}
        </div>

        <div className="student-profile-input-container">
          <label>
            Miasto
            <input
              {...register('targetWorkCity', {
                required: 'To pole jest wymagane',
              })}
            />
          </label>
          {errors.targetWorkCity && <p>{errors.targetWorkCity.message}</p>}
        </div>

        <div className="student-profile-input-container">
          <label>
            Preferowany typ kontraktu
            <select
              {...register('expectedContractType', {
                required: 'To pole jest wymagane',
              })}
            >
              <option value={''}>--wybierz--</option>
              <option value={ContractType.CONTRACT}>Umowa o pracę</option>
              <option value={ContractType.MANDATE_CONTRACT}>
                Umowa zlecenie
              </option>
              <option value={ContractType.NO_PREFERENCE}>Bez znaczenia</option>
              <option value={ContractType.POSSIBLE_B2B}>B2B</option>
            </select>
          </label>
          {errors.expectedContractType && (
            <p>{(errors.expectedContractType as FieldError).message}</p>
          )}
        </div>

        <div className="student-profile-input-container">
          <label>
            Oczekiwane wynagrodzenie
            <input type="number" {...register('expectedSalary')} />
          </label>
        </div>

        <div className="student-profile-input-container">
          <label>
            Możliwość bezpłatnego stażu
            <input type="checkbox" {...register('canTakeApprenticeship')} />
          </label>
        </div>

        <div className="student-profile-input-container">
          <label>
            Doświadczenie komercyjne (w miesiącach)
            <input type="number" {...register('monthsOfCommercialExp')} />
          </label>
        </div>

        <div className="student-profile-input-container">
          <label>
            Edukacja
            <input {...register('education')} />
          </label>
        </div>

        <div className="student-profile-input-container">
          <label>
            Doświadczenie zawodowe
            <input {...register('workExperience')} />
          </label>
        </div>

        <div className="student-profile-input-container">
          <label>
            Kursy
            <input {...register('courses')} />
          </label>
        </div>

        <button type="submit">
          {isEditing ? 'Aktualizuj' : 'Stwórz profil'}
        </button>
      </form>
    </div>
  );
};
