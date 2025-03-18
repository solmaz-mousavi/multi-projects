export const remainDays = (date: string) => {
  const weakDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const months = [
    "january",
    "fabruary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const today = new Date();
  const eventDay = new Date(date);
  const remDays = Math.round(
    (eventDay.getTime() - today.getTime()) / (1000 * 3600 * 24)
  );

  const dateFormat = `${weakDays[eventDay.getDay()]} - ${eventDay.getDate()} ${
    months[eventDay.getMonth()]
  } ${eventDay.getFullYear()}`;

	return [remDays, dateFormat];
};
