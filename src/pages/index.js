import Head from 'next/head';
import { useEffect, useState } from 'react';

import { foxbitAPIConnection } from "../services";

import Card from '../components/Card';
import Grid from '../components/Grid';

export default function Home() {
  const [socket, setSocket] = useState(null);
  const [socketStatus, setSocketStatus] = useState(null);
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    setSocket(foxbitAPIConnection());
    return () => {
      if(socket) {
        socket.close();
      }
    }
  }, []);

  useEffect(() => {
    if(socket) {
      socket.open().then(status => {
          setSocketStatus(status);
          socket.subAllInstruments(status);
          socket.listeningMessages(status, function message(response) {
            const { n, o } = JSON.parse(response.data);
            const channel = n;
            const data = JSON.parse(o);

            if (channel === 'GetInstruments') {
              setInstruments(data);
            }
          })
        }
      );
    }
  }, [socket]);

  const listCardsWithInstruments = (instruments) => {
    const allInstruments = instruments.map((ins, index) => {
      return (
        <Card 
          key={ins.InstrumentId}
          instrumentInfo={ins}
          socketStatus={socketStatus}
          socket={socket}
          cardIndex={index}
          totalInstruments={instruments.length}
        />
      )
    });
    return allInstruments;
  };

  return (
    <div>
      <Head>
        <title>Foxbit - Frontend Challenge</title>
        <meta name="description" content="Foxbit frontend challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid>
          {
            !!instruments.length && listCardsWithInstruments(instruments)
          }
        </Grid>
      </main>
    </div>
  )
}
