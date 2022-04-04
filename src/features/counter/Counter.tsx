import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '~/components/Elements/Button';
import { RootState } from '~/libs/store';

import { decrement, increment, incrementByAmount } from './counter-slice';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Box>
        <Button
          variant='contained'
          onClick={() => dispatch(incrementByAmount(-10))}
        >
          -10
        </Button>
        <Button variant='contained' onClick={() => dispatch(decrement())}>
          -1
        </Button>
        <Box
          width={(theme) => theme.spacing(10)}
          display='inline-block'
          textAlign={'center'}
        >
          {count}
        </Box>
        <Button variant='contained' onClick={() => dispatch(increment())}>
          +1
        </Button>
        <Button
          variant='contained'
          onClick={() => dispatch(incrementByAmount(10))}
        >
          +10
        </Button>
      </Box>
    </>
  );
};
