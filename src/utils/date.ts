import { format, formatDistanceToNow } from 'date-fns';

export const formatDate = (date: string) => {
  return format(date, 'MMM dd, yyyy');
};

export const formatDateDistanceToNow = (date: string) => {
  return formatDistanceToNow(date, { addSuffix: false })
    .replace(/about /, '')
    .replace(/ /, '')
    .replace(/years?/, 'y')
    .replace(/months?/, 'm')
    .replace(/days?/, 'd');
};
