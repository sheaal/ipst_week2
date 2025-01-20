import { print } from '../print';
import { EButtonUsage } from "../../common/enum";

const main = () => {
    let currentInput = '';
    let result = 0;

    const calculate = (expression: string): number => {
        try {
            expression = expression.replace(/X/g, '*');
            return eval(expression);
        } catch (error) {
            console.error("Ошибка вычисления:", error);
            return 0;
        }
    };

    return (state: EButtonUsage) => {
        if (state === EButtonUsage.OPERATOR_C) {
            currentInput = '';
            result = 0;
            print(result);
        } else if (state === EButtonUsage.OPERATOR_EQUAL) {
            result = calculate(currentInput);
            print(result);
            currentInput = '';
        } else {
            currentInput += state;
            print(currentInput);
        }
    };
};

export { main };