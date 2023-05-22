type IFormatFilterByDate = 'begin' | 'end';

export function formatFilterByDate(date: string, type: IFormatFilterByDate) {
  if (type === 'begin') {
    const startOfDay = new Date(date);
    startOfDay.setUTCHours(0, 0, 0, 0);
    return startOfDay;
  }
  if (type === 'end') {
    const endOfDay = new Date(date);
    endOfDay.setUTCHours(23, 59, 59, 999);
    return endOfDay;
  }
}

export function diffOneDayDate(date: string) {
  const now = new Date().getTime();
  const saveDate = new Date(date).getTime();
  const diffInMilliseconds = now - saveDate;
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  if (diffInMilliseconds > oneDayInMilliseconds) {
    return true;
  } else {
    return false;
  }
}
