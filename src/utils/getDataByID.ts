interface IdInclude {
  id: string;
}

function getResultByID<T extends IdInclude>(ID: string, data: T[]): T {
  const res = data.find((item) => item.id === ID);
  return res ? res : {} as T;
}
const getStudentCountByCourseID = () => console.log("yes");

export {getResultByID, getStudentCountByCourseID}
