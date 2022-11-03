import { useEffect, useState } from 'react';
import * as S from './styles';

const Card = ({ 
  icon,
  id,
  socket,
  symbol,
  sortIndex,
}) => {

  const [instrumentValues, setInstrumentValues] = useState(null);

  const subscribeInstruments = (id) => {
    const payload = {
      m: 0,
      i: 2,
      n: 'SubscribeLevel1',
      o: JSON.stringify({ InstrumentId: id }),
    }
  
    socket.send(JSON.stringify(payload));
  
    socket.addEventListener('message', function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent
      const data = JSON.parse(o);
  
      // RESPONSE WITH ALL CRYPTOS
      if (channel === 'SubscribeLevel1') {
        setInstrumentValues(data);
      }

      if (channel === 'Level1UpdateEvent') {
        setInstrumentValues(data);
      }
    });
  };

  useEffect(() => {
    // subscribeInstruments(id);
    console.log(socket.readyState);
    console.log('Instruments of use');
  },[]);

  // useEffect(() => {
  //   console.log('instrumentValues updated');
  // }, [instrumentValues]);

  return(
    <S.Card>
      <S.Row>
        <img
          src={`https://statics.foxbit.com.br/icons/colored/${icon.toLowerCase()}.svg`}
          height="28px"
          width="28px"
        />
        <S.Index>1,2%</S.Index>
      </S.Row>
      <S.Coin>{symbol}</S.Coin>
      <S.Prize><span>R$</span> 13.297,23</S.Prize>
      <S.VolumeDescription>volume (24h)</S.VolumeDescription>
      <S.VolumeValue>1.162.354,19 XRP</S.VolumeValue>
    </S.Card>
  )
};

export default Card;
