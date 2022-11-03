import { Box } from 'components/Reusable Components/Box';

const Section = ({ title, children }) => {
  return (
    <Box m={5} as="section" fontSize="l">
      {title}
      {children}
    </Box>
  );
};

export default Section;
