export const foxbitAPIConnection = () => {
  const wsocket = new WebSocket('wss://api.foxbit.com.br/');

  const open = () => {
    return new Promise((resolve) => {
      wsocket.addEventListener('open', function open() {
        console.log('connected');
        resolve(wsocket.readyState);
      });
    })
  };

  const close = (status) => {
    if (status === 2 || status === 3) return;
    wsocket.addEventListener('close', function close() {
      console.log('disconnected');
    });
  };

  const subAllInstruments = (status) => {
    if (status !== 1) return;
    let instrumentList;
    const payloadInstruments = {
      m: 0,
      i: 2,
      n: 'GetInstruments',
      o: JSON.stringify({ OMSID: 1}),
    };

    wsocket.send(JSON.stringify(payloadInstruments));
  }

  const listeningMessages= (status, callback) => {
    if (status !== 1) return;
    wsocket.addEventListener('message', callback);
  }

  const subscribeInstrument = (status, instrumentId) => {
    if (status !== 1) return;
    const payloadSub = {
      m: 0,
      i: 2,
      n: 'SubscribeLevel1',
      o: JSON.stringify({ InstrumentId: instrumentId }),
    }

    wsocket.send(JSON.stringify(payloadSub));

    const payloadUpdate = {
      m: 0,
      i: 2,
      n: 'Level1UpdateEvent',
      o: JSON.stringify({ InstrumentId: instrumentId }),
    }

    wsocket.send(JSON.stringify(payloadUpdate));
  };

  const message = (channelSelected) => {
    if (status() !== 1) return;
    wsocket.addEventListener('message', function message(response) {
      const { n, o } = JSON.parse(response.data);
      const channel = n; // GetInstruments | SubscribeLevel1 | Level1UpdateEvent
      const data = JSON.parse(o);

      // RESPONSE WITH ALL CRYPTOS
      if (channel === 'GetInstruments') {
        console.log(data);
      }

      // FIRST RESPONSE
      if (channel === 'SubscribeLevel1') {
        console.log(data);
      }

      // UPDATES TO SUBSCRIBELEVEL1
      if (channel === 'Level1UpdateEvent') {
        console.log(data);
      }
    });
  };

  return {
    open,
    close,
    subAllInstruments,
    subscribeInstrument,
    listeningMessages,
    message
  }
};
