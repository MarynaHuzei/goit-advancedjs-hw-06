/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayofWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(dayofWeek: DayofWeek): boolean {
  return dayofWeek === DayofWeek.Saturday || dayofWeek === DayofWeek.Sunday;
}
