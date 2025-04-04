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
  const eventDate = new Date(date);
  const eventYear = eventDate.getFullYear();
  const eventMonthDigit =
		(eventDate.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const eventMonthName = months[eventDate.getMonth()];
  const eventDayDigit = eventDate.getDate().toString().padStart(2, "0");
  const eventDayName = weakDays[eventDate.getDay()];

  switch (type) {
    case 1:
      return `${eventDayName} - ${eventDayDigit} ${eventMonthName} ${eventYear}`;

    case 2:
      return `${eventDayDigit} ${eventMonthName}, ${eventYear}`;

    case 3:
      return `${eventYear}-${eventMonthDigit}-${eventDayDigit}`;
  }
};
