export function dateToISO(nowDate: Date) {
    var isoStrDate = nowDate.toISOString().split('T')[0];
    return isoStrDate;
        // const tzOffset = -nowDate.getTimezoneOffset();
        // const diff = tzOffset >= 0 ? '+' : '-';
        // const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
        // return nowDate.getFullYear() +
        //   '-' + pad(nowDate.getMonth() + 1) +
        //   '-' + pad(nowDate.getDate()) +
        //   'T' + pad(nowDate.getHours()) +
        //   ':' + pad(nowDate.getMinutes()) +
        //   ':' + pad(nowDate.getSeconds()) +
        //   diff + pad(tzOffset / 60) +
        //   ':' + pad(tzOffset % 60);
}

export function dateToLocal(nowDate: Date) {
    return nowDate.toLocaleString('pl', {  year: "numeric",
                                            month: "long",
                                            day: "numeric",}).split(',')[0]
}

export function ISOToDate(nowDate:string) {
    return new Date(nowDate)
}