import { NewStudentProfileInterface } from 'types';

export const handleCreateStudentProfile = async (
  data: NewStudentProfileInterface,
) => {
  try {
    const res = await fetch(`http://localhost:3001/student`, {
      body: JSON.stringify(data),
      method: 'POST',
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
