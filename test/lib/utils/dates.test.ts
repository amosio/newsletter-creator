import {dateToISO, dateToLocal, ISOToDate} from '../../../src/lib/utils/dates'
import { describe, expect, it } from "vitest"

let dat1ObjStr = "1995-12-07T00:00:00"
let dat2ObjStr = "2077-02-17T00:00:00"

let date = new Date()
//?
// let date1 = new Date(dat1ObjStr).toLocaleString("en-US", { timeZone: "Europe/Warsaw" });
let date1 = new Date(dat1ObjStr)
let date2 = new Date(dat2ObjStr)

const timezoneOffsetMs = date.getTimezoneOffset() * 60 * 1000;
const date1InPolishTimezone = new Date(date1.getTime() - timezoneOffsetMs + (3600 * 1000)); // adjust for CET or CEST
const date2InPolishTimezone = new Date(date2.getTime() - timezoneOffsetMs + (3600 * 1000)); 

let datesISO = [[date1InPolishTimezone, "1995-12-07"],
            [date2InPolishTimezone, "2077-02-17"]]

let datesPl = [[date1InPolishTimezone, "7 grudnia 1995"],
            [date2InPolishTimezone, "17 lutego 2077"]]

let ISOdate = [["1995-12-07", date1InPolishTimezone],
            ["2077-02-17", date2InPolishTimezone]]            

describe("dates", ()=> {
    it.each(datesISO)('converts Date obj %s to ISO date expecting %s', (d: Date, res) => {
        let ISOdate = dateToISO(d)
        expect((ISOdate)).toBe(res)
    });
    it.each(datesPl)('converts Date obj %s to pl date expecting %s', (d: Date, res) => {
        let plDate = dateToLocal(d)
        expect((plDate)).toBe(res)
    });
    it.each(ISOdate)('converts ISO date %s to Date obj expecting %s', (d: string, res: Date) => {
        let plDate = ISOToDate(d)
        let plDateRep = plDate.toISOString().slice(0, -14)
        let dateRep = res.toISOString().slice(0, -14)
        expect((plDateRep)).toBe(dateRep)
    });
})



