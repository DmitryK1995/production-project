import { Button } from '@/shared/ui/Button';

import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };
    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button onClick={handleAddFive} data-testid="increment-btn5">add5</Button>
            <Button onClick={handleInc} data-testid="increment-btn">increment</Button>
            <Button onClick={handleDec} data-testid="decrement-btn">decrement</Button>
        </div>
    );
};
