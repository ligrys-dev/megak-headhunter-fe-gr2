import { StudentInitialInterface } from 'types';

export const cancelStudentByHr = async (
    studentEmail: string,
): Promise<StudentInitialInterface> => {
    const res = await fetch(`http://localhost:3001/hr/available/${studentEmail}`, {
        credentials: 'include',
        method: 'PATCH',
    });

    return await res.json();
};
