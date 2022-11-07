import PropTypes from 'prop-types';
import * as S from './styles';

const Grid = ({ children }) => {
  return (
    <S.Grid>
      {children}
    </S.Grid>
  )
};

Grid.propTypes = {
  children: PropTypes.node
  // children: PropTypes.oneOfType([
  //   PropTypes.element,
  //   PropTypes.number
  // ])
};

export default Grid;
