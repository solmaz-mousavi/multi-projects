// ---- calc remain day from a date to today ----------------------------
export const remainDays = (date: string) => {
  const today = new Date();
  const eventDay = new Date(date);
  const remDays = Math.round(
    (eventDay.getTime() - today.getTime()) / (1000 * 3600 * 24)
  );

  return remDays + 1;
};

// ---- calc remain hours from a time ----------------------------------
export const remainHours = (time: string) => {
  const today = new Date();
  const remainHour = Number(time.split(":")[0]) - Number(today.getHours());
  return remainHour;
};
