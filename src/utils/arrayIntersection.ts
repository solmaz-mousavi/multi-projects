export const intersection = (array1: any[], array2: any[]) => {
	const setA = new Set(array1);
	return array2.filter((value) => setA.has(value));
};