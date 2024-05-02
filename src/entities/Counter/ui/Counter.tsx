import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../model/slice/counterSlice";

export const Counter = () => {
    const { t } = useTranslation();
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h3 data-testid="value-title">
                {counterValue}
            </h3>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                {t("Increment")}
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                {t("Decrement")}
            </Button>
        </div>
    );
};
