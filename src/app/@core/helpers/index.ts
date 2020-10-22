export function getDefaultDateRange() {
  const today = new Date();
  const tomorrow =  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  return [today, tomorrow];
}
