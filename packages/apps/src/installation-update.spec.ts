import express from 'express';
import supertest from 'supertest';

import { IInstalledUpgradeActivity } from '@microsoft/teams.api';

import { App } from './app';
import { ExpressAdapter } from './http';

describe('installationUpdate', () => {
  it('processes an upgrade activity through the inbound HTTP pipeline', async () => {
    const expressApp = express();
    const app = new App({
      dangerouslyAllowUnauthenticatedRequests: true,
      httpServerAdapter: new ExpressAdapter(expressApp),
    });
    let receivedActivity: IInstalledUpgradeActivity | undefined;

    app.on('install.upgrade', ({ activity }) => {
      receivedActivity = activity;
    });

    await app.initialize();
    await supertest(expressApp)
      .post('/api/messages')
      .send({
        action: 'upgrade',
        channelId: 'msteams',
        conversation: {
          conversationType: 'personal',
          id: 'xxx',
          tenantId: 'xxx',
        },
        entities: [
          {
            locale: 'en-US',
            type: 'clientInfo',
          },
        ],
        from: {
          aadObjectId: 'xxx',
          id: 'xxx',
        },
        id: 'xxx',
        recipient: {
          id: 'xxx',
          name: 'xxx',
        },
        serviceUrl: 'https://smba.trafficmanager.net/emea/xxx/',
        timestamp: '2026-08-26T13:38:36.356Z',
        type: 'installationUpdate',
      })
      .expect(200);

    expect(receivedActivity).toBeDefined();
    expect(receivedActivity!.type).toBe('installationUpdate');
    expect(receivedActivity!.action).toBe('upgrade');
  });
});
