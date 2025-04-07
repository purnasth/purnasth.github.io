/**
 * Formats a date string to "Month Year" format (e.g., "March 2025").
 * If the date string is undefined, it returns "Present".
 *
 * @param dateString - The date string to format.
 * @returns A formatted date string or "Present".
 */
export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return 'Present';
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  };
  return date.toLocaleDateString('en-US', options);
};
