export const getStudentProfile = async (id: string) => {
  const res = await fetch(`http://localhost:3001/student/${id}`);

  return await res.json();
};
