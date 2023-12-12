import { StudentProfileInterface } from 'types';

export const handleUpdateStudentProfile = async (
  data: StudentProfileInterface,
) => {
  try {
    const res = await fetch(`http://localhost:3001/student/${data.id}`, {
      body: JSON.stringify(data),
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    console.error('Error creating profile:', error);
  }
};
