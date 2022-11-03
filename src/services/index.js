export const foxbitAPIConnection = () => {
  const wsocket = new WebSocket('wss://api.foxbit.com.br/');

  const status = (currentStatus) => currentStatus;

  const open = () => {
    return new Promise((resolve) => {
      wsocket.addEventListener('open', function open() {
        console.log('connected');
        status(wsocket.readyState);
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

  const subscribeInstrument = async (status, instrumentId) => {
    if (status !== 1) return;
    const payloadSub = {
      m: 0,
      i: 2,
      n: 'SubscribeLevel1',
      o: JSON.stringify({ InstrumentId: instrumentId }),
    }

    await wsocket.send(JSON.stringify(payloadSub));
  };

  const subscribeUpdateInstrument = async (status, instrumentId) => {
    if (status !== 1) return;
    const payloadUpdate = {
      m: 0,
      i: 2,
      n: 'Level1UpdateEvent',
      o: JSON.stringify({ InstrumentId: instrumentId }),
    }

    await wsocket.send(JSON.stringify(payloadUpdate));
  };

  return {
    status,
    open,
    close,
    subAllInstruments,
    subscribeInstrument,
    subscribeUpdateInstrument,
    listeningMessages,
  }
};
