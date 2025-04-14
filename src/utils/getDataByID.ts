// --------------------------------------------------------------------
interface IdInclude {
  id: string;
}
type GetResultByIDInput<T extends IdInclude> = {
  ID: string;
  data: T[];
};
function getResultByID<T extends IdInclude>({
  ID,
  data,
}: GetResultByIDInput<T>): T {
  const res = data.find((item) => item.id === ID);
  return res ? res : ({} as T);
}

// --------------------------------------------------------------------
type GetRangeSumOfDataInput<T> = {
  data: T[];
  range: keyof T;
};
function getRangeSumOfData<T>({
  data,
  range,
}: GetRangeSumOfDataInput<T>): number {
  let sum = 0;
  data.forEach((item) => {
    sum += Number(item[range]);
  });
  return sum;
}
// --------------------------------------------------------------------
export { getResultByID, getRangeSumOfData };
