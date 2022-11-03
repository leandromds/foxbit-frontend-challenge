import { useEffect, useState } from 'react';
import * as S from './styles';

const Card = ({ 
  socket,
  instrumentInfo,
  socketStatus
}) => {
  const { Product1Symbol, Symbol, InstrumentId } = instrumentInfo;

  const [instrumentCurrentValues, setInstrumentCurrentValues] = useState({});

  useEffect(() => {
   socket.subscribeInstrument(socketStatus, InstrumentId);
  //  socket.subscribeUpdateInstrument(socketStatus, InstrumentId);
   socket.listeningMessages(socketStatus, function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent
      const data = JSON.parse(o);
  
      // RESPONSE WITH ALL CRYPTOS
      if (channel === 'SubscribeLevel1') {
        setInstrumentCurrentValues(data);
      }
    })
  },[]);

  useEffect(() => {
    console.log(instrumentCurrentValues);
  }, [instrumentCurrentValues]);

  return(
    <S.Card>
      <S.Row>
        <img
          src={`https://statics.foxbit.com.br/icons/colored/${Product1Symbol.toLowerCase()}.svg`}
          height="28px"
          width="28px"
        />
        <S.Index>1,2%</S.Index>
      </S.Row>
      <S.Coin>{Symbol}</S.Coin>
      <S.Prize><span>R$</span>{instrumentCurrentValues.LastTradedPx}</S.Prize>
      <S.VolumeDescription>volume (24h)</S.VolumeDescription>
      <S.VolumeValue>{`${instrumentCurrentValues.Rolling24HrVolume} ${Product1Symbol}`}</S.VolumeValue>
    </S.Card>
  )
};

export default Card;
