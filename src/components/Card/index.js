import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import DefaultCurrancy from '../../../public/default-currency.svg';
import {
  sanatizeVolume, santizeCurrency
} from '../../utils';
import CurrencyIndex from '../CurrencyIndex';
import * as S from './styles';

const Card = ({ 
  socket,
  instrumentInfo,
  socketStatus,
}) => {
  const { Product1Symbol, Symbol, InstrumentId } = instrumentInfo;
  const [instrumentCurrentValues, setInstrumentCurrentValues] = useState({});

  useEffect(() => {
    socket.subscribeInstrument(socketStatus, InstrumentId);
    socket.listeningMessages(socketStatus, function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n;
      const data = JSON.parse(o);

      if (channel === 'SubscribeLevel1') {
        if(InstrumentId === data.InstrumentId) {
          setInstrumentCurrentValues(data);
        }
      }
      
      if (channel === 'Level1UpdateEvent') {
        if(InstrumentId === data.InstrumentId) {
          setInstrumentCurrentValues(data);
        }
      }
    })
  },[]);

  const Coin = () => {
    return (
      <S.CoinBox>
        {
          Product1Symbol
          ? (
            <img
              src={`https://statics.foxbit.com.br/icons/colored/${Product1Symbol.toLowerCase()}.svg`}
              alt={Symbol}
            />
          )
          : <DefaultCurrancy />
        }
      </S.CoinBox>
    )
  };

  const Prize = () => {
    return instrumentCurrentValues?.LastTradedPx
          ? <S.Prize>
              {santizeCurrency(instrumentCurrentValues.LastTradedPx)}
            </S.Prize>
          : <S.Prize>loading...</S.Prize>
  };

  const Volume = () => {
    return !(instrumentCurrentValues?.Rolling24HrVolume === null)
          ?<S.VolumeValue>
            {sanatizeVolume(instrumentCurrentValues.Rolling24HrVolume)} {Product1Symbol}
          </S.VolumeValue>
          :<S.VolumeValue>loading...</S.VolumeValue>
  }

  return(
    <S.Card>
      <S.Row>
        <Coin />
        <CurrencyIndex currIndex={instrumentCurrentValues.Rolling24HrPxChange}/>
      </S.Row>
      <S.Coin>{Symbol}</S.Coin>
      <Prize />
      <S.VolumeDescription>volume (24h)</S.VolumeDescription>
      <Volume />
    </S.Card>
  )
};

Card.propTypes = {
  socket: PropTypes.shape({
    subscribeInstrument: PropTypes.func.isRequired,
    listeningMessages: PropTypes.func.isRequired,
  }),
  instrumentInfo: PropTypes.shape({
    Product1Symbol: PropTypes.string.isRequired,
    Symbol: PropTypes.string.isRequired,
    InstrumentId: PropTypes.number.isRequired,
  }),
  socketStatus: PropTypes.number.isRequired,
};

export default Card;
