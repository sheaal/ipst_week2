import { print } from '../print';
import { EButtonUsage } from "../../common/enum";

const main = () => {
    let currentInput = '';
    let result = 0;
    let lastOperator = '';

    const calculate = (expression: string): number => {
        try {
            return eval(expression);
        } catch (error) {
            console.error("Ошибка вычисления:", error);
            return 0;
        }
    };

    return (state: EButtonUsage) => {
        if (state === EButtonUsage.OPERATOR_AC) {
            currentInput = '';
            result = 0;
            lastOperator = '';
            print(result);
        } else if (state === EButtonUsage.OPERATOR_C) {
            currentInput = '';
            result = 0;
            lastOperator = '';
            print(result);
        } else if (state === EButtonUsage.OPERATOR_EQUAL) {
            result = calculate(currentInput);
            print(result);
            currentInput = '';
            lastOperator = '';
        } else if (Object.values(EButtonUsage).includes(state) && state.match(/[+\-*/]/)) {
            if (currentInput) {
                if (lastOperator) {
                    currentInput = currentInput.slice(0, -2);
                }
                currentInput += ` ${state} `;
                lastOperator = state;
                print(currentInput);
            }
        } else {
            currentInput += state;
            lastOperator = '';
            print(currentInput);
        }
    };
};

export { main };