import { nanoid } from 'nanoid';
import { Btn } from 'components/Reusable Components/Button';
import { Box } from 'components/Reusable Components/Box';

const FeedbackOptions = ({ options, onLeaveFeedback, b }) => {
  return (
    <Box display="flex">
      {options.map(option => (
        <Btn key={nanoid()} onClick={evt => onLeaveFeedback(evt, option)}>
          {option}
        </Btn>
      ))}
    </Box>
  );
};

export default FeedbackOptions;
