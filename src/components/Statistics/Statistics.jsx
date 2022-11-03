import { StatList } from './Statistic.styled';

const Statistics = p => {
  return (
    <StatList>
      <li>Good {p.good}</li>
      <li>Neutral {p.neutral}</li>
      <li>Bad {p.bad}</li>
      <li>Total {p.total}</li>
      {Boolean(p.positivePercentage) && (
        <li>Positive Feedback {Math.round(p.positivePercentage)} %</li>
      )}
    </StatList>
  );
};

export default Statistics;
