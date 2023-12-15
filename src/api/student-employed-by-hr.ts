import {StudentInitialInterface} from "types";

export const employedByHr = async (
    studentEmail: string,
): Promise<StudentInitialInterface> => {
    const res = await fetch(`http://localhost:3001/hr/hire/${studentEmail}`, {
        credentials: 'include',
        method: 'PATCH',
    });
    return await res.json();
};
