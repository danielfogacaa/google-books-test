export const convert = {
  dateToLocal(date: string): string {
    return date.split('-').reverse().join('/');
  }
};