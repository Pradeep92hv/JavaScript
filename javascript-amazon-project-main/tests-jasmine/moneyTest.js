import { formateCurrency } from "../scripts/utils/money.js";

//to create test suits
describe('test suit : formatCurrency',() =>{
    //test name
    it("converts cents into dollars",() =>{
        expect(formateCurrency(2095)).toEqual('20.95');
    });

    it("works with zero", () => {
      expect(formateCurrency(0)).toEqual("0.00");
    });

    it("rounds up to  the nearest Cents", () => {
      expect(formateCurrency(2000.4)).toEqual("20.01");
    });
});