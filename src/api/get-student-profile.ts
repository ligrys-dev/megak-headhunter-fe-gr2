export const getStudentProfile = async () => {
    const res = await fetch('http://localhost:3001/user', {
        credentials: 'include',
    });
    const data = await res.json();
    if (!data.student.profile) {
        return null
    } else {
        return data.student
    }
};
