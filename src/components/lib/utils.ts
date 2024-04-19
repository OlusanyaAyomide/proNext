import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

export function formatDateToString(dateString:string) {
  const date = new Date(dateString);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return null
  }
  
  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const year = date.getFullYear();
  
  // Format date string to "DD-MM-YYYY" format
  return `${day}-${month}-${year}`;
}


export const generateYearsArray=() =>{
    const currentYear = new Date().getFullYear();
    const startYear = 1956;
  
    return Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index);
}
