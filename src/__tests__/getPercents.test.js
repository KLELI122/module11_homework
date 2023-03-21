import { getPercents } from "../getPercents.js";
describe("Tests for getPercents function", ()=>{
    const correctPercentage = 30;
    const incorrectPercentage = '30%';
    const correctNumber = 200;
    const incorrectNumber = 'two hundred';
    const successfulResult = 60;
    it("Percentage and number entered correctly", () => {
        expect(getPercents(correctPercentage, correctNumber)).toBe(successfulResult);
    }),
    it("Percentage entered incorrectly", () => {
        expect(getPercents(incorrectPercentage, correctNumber)).toBe('Percentage entered incorrectly');
    }),
    it("Number entered incorrectly", () => {
        expect(getPercents(correctPercentage, incorrectNumber)).toBe('Number entered incorrectly');
    }),
    it("Percentage and number entered incorrectly", () => {
        expect(getPercents(incorrectPercentage, incorrectNumber)).toBe('Percentage and number entered incorrectly');
    })
})