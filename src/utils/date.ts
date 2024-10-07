import {
  format,
  differenceInYears,
  differenceInMonths,
  differenceInDays
} from 'date-fns';

export const formatDate = (date: string) => {
  return format(date, 'MMM dd, yyyy');
};

export const formatDateDistanceToNow = (date: string) => {
  const now = new Date();
  const targetDate = new Date(date);

  const years = differenceInYears(now, targetDate);
  const months = differenceInMonths(now, targetDate) % 12;
  const days = differenceInDays(now, targetDate) % 30;

  const parts = [
    years > 0 ? ` ${years}y ` : '',
    months > 0 ? ` ${months}m ` : '',
    days >= 0 ? ` ${days}d ` : ''
  ].filter(Boolean);

  return parts.join('-');
};
