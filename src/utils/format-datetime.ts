import { format, formatDistanceToNow } from "date-fns";

export function formatDateTime(rawDate: string) : string{
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
        locale: undefined
    });
}

export function formatDistanceDate(rawDate: string) : string{
    const date = new Date(rawDate);

    return formatDistanceToNow(date, {
        locale: undefined,
        addSuffix: true
    });
}