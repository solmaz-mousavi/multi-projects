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

type dateFormatType = 1 | 2 | 3;
export const dateFormatter = (date: string, type: number) => {
  const eventDay = new Date(date);
  switch (type) {
    case 1:
      return `${weakDays[eventDay.getDay()]} - ${eventDay.getDate()} ${
        months[eventDay.getMonth()]
      } ${eventDay.getFullYear()}`;

    case 2:
      return `${eventDay.getDate()} ${
        months[eventDay.getMonth()]
      }, ${eventDay.getFullYear()}`;

			case 3:
				return `${eventDay.getMonth() + 1}/${eventDay.getDate()}/${eventDay.getFullYear()}`;
  }
};
