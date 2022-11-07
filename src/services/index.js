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

  const close = () => {
    wsocket.addEventListener('close', function close() {
      console.log('disconnected');
    });
  };

  const subAllInstruments = (status) => {
    if (status !== 1) return;
    let instrumentList;
    const payload = {
      m: 0,
      i: 2,
      n: 'GetInstruments',
      o: JSON.stringify({ OMSID: 1}),
    };

    wsocket.send(JSON.stringify(payload));
  };

  const listeningMessages= (status, callback) => {
    if (status !== 1) return;
    wsocket.addEventListener('message', callback);
  };

  const subscribeInstrument = (status, instrumentId) => {
    if (status !== 1) return;
    const payload = {
      m: 0,
      i: 2,
      n: 'SubscribeLevel1',
      o: JSON.stringify({ InstrumentId: instrumentId }),
    }

    wsocket.send(JSON.stringify(payload));
  };

  const subscribeUpdateInstrument = (status, instrumentId) => {
    if (status !== 1) return;
    const payloadUpdate = {
      m: 0,
      i: 2,
      n: 'Level1UpdateEvent',
      o: JSON.stringify({ InstrumentId: instrumentId }),
    }

    wsocket.send(JSON.stringify(payloadUpdate));
  };

  return {
    open,
    close,
    subAllInstruments,
    subscribeInstrument,
    subscribeUpdateInstrument,
    listeningMessages,
  }
};
