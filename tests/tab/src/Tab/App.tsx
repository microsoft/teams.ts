import React from 'react';
import * as client from '@microsoft/teams.client';
import { ConsoleLogger } from '@microsoft/teams.common';

import './App.css';

export default function App() {
  const [greeting, setGreeting] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const tenantId = import.meta.env.VITE_TENANT_ID;
      const app = new client.App(clientId, {
        tenantId,
        logger: new ConsoleLogger('@tests/tab', { level: 'debug' }),
      });

      await app.start();

      const result = await app.exec<string>('hello-world');
      setGreeting(result);
    })();
  }, []);

  return (
    <div className="App">
      <pre>
        <code>{greeting}</code>
      </pre>
    </div>
  );
}
