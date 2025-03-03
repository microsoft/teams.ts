import React from 'react';
import * as client from '@microsoft/spark.client';
import { ConsoleLogger } from '@microsoft/spark.common';

import './App.css';

export default function App() {
  const [context, setContext] = React.useState<client.Context>();

  React.useEffect(() => {
    (async () => {
      const app = new client.App({
        clientId: import.meta.env.VITE_CLIENT_ID,
        clientSecret: import.meta.env.VITE_CLIENT_SECRET,
        tenantId: import.meta.env.VITE_TENANT_ID,
        logger: new ConsoleLogger('@samples/tab', { level: 'debug' }),
      });

      const context = await app.connect();
      setContext(context);

      const res = await app.exec('hello-world', { hello: 'world' });
      app.log.info(res);
    })();
  }, []);

  return (
    <div className="App">
      <pre>
        <code>{JSON.stringify(context, null, 2)}</code>
      </pre>
    </div>
  );
}
