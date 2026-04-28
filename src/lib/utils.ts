import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string) {
    const parsedDate = date instanceof Date ? date : new Date(date);
    const year = parsedDate.getUTCFullYear();
    const month = String(parsedDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getUTCDate()).padStart(2, "0");

    return `${day}-${month}-${year}`;
}
