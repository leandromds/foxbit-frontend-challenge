import PropTypes from 'prop-types';
import { sanatizeIndex } from '../../utils';

import DownIndex from '../../../public/downIndex.svg';
import UpIndex from '../../../public/upIndex.svg';

import * as S from './styles';

const CurrencyIndex = ({ currIndex }) => {
  if (currIndex === null || currIndex == undefined) {
    return (
      <S.Index>
        --%
      </S.Index>
    )
  }

  const { currValue, status } = sanatizeIndex(currIndex);

  if (status === 'negative') {
    return (
    <S.Index status="negative">
      <DownIndex />
      {currValue}%
    </S.Index>)
  };
  
  return (
    <S.Index status="positive">
      <UpIndex />
      {currValue}%
    </S.Index>
  );
};

CurrencyIndex.propTypes = {
  currIndex: PropTypes.number
};

export default CurrencyIndex;