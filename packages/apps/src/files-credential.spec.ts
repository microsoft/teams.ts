import { AgenticIdentity, IToken } from '@microsoft/teams.api';

import { selectFilesCredential } from './files-credential';

/** Minimal stand-in for a token; only `toString()` is consumed by the credential. */
function token(value: string): IToken {
  return { toString: () => value } as unknown as IToken;
}

const AGENTIC: AgenticIdentity = {
  agenticAppBlueprintId: 'blueprint-1',
  agenticAppId: 'agentic-app-1',
  agenticUserId: 'agentic-user-1',
  tenantId: 'tenant-1',
};

describe('selectFilesCredential', () => {
  it('reads as the app when there is no agentic identity', async () => {
    const credential = selectFilesCredential({
      tenantId: 'tenant-1',
      getAppGraphToken: async () => token('app-token'),
      getAgenticGraphToken: async () => token('agentic-token'),
    });

    expect(credential.actor).toBe('app');
    expect(await credential.token()).toBe('app-token');
  });

  it('reads as the agentic user when an agentic identity is present', async () => {
    // The seam every other file test assumes. Supplying a credential directly, as those tests do, would leave them all passing even if this branch were inverted, and the resulting failure would look like a consent problem rather than a wrong-identity problem.
    const credential = selectFilesCredential({
      agenticIdentity: AGENTIC,
      tenantId: 'tenant-1',
      getAppGraphToken: async () => token('app-token'),
      getAgenticGraphToken: async () => token('agentic-token'),
    });

    expect(credential.actor).toBe('agenticUser');
    expect(await credential.token()).toBe('agentic-token');
  });

  it('never falls back to the app token for an agentic identity', async () => {
    // An app token sees a different set than what was shared with the agent, so a silent fallback would 403 on exactly the agent's own files.
    const getAppGraphToken = jest.fn(async () => token('app-token'));

    const credential = selectFilesCredential({
      agenticIdentity: AGENTIC,
      getAppGraphToken,
      getAgenticGraphToken: async () => null,
    });

    expect(await credential.token()).toBeUndefined();
    expect(getAppGraphToken).not.toHaveBeenCalled();
  });

  it('passes the agentic identity through unchanged', async () => {
    const getAgenticGraphToken = jest.fn(async () => token('agentic-token'));

    await selectFilesCredential({
      agenticIdentity: AGENTIC,
      getAppGraphToken: async () => null,
      getAgenticGraphToken,
    }).token();

    expect(getAgenticGraphToken).toHaveBeenCalledWith(AGENTIC, undefined);
  });

  it('resolves the agentic token against the activity tenant', async () => {
    // `AgenticIdentity.tenantId` is optional, and acquisition falls back to the app's *configured* tenant. Without the activity tenant, a multi-tenant app can ask for a token in the wrong tenant, so this pins that it is handed over.
    const getAgenticGraphToken = jest.fn(async () => token('agentic-token'));

    await selectFilesCredential({
      agenticIdentity: AGENTIC,
      tenantId: 'tenant-42',
      getAppGraphToken: async () => null,
      getAgenticGraphToken,
    }).token();

    expect(getAgenticGraphToken).toHaveBeenCalledWith(AGENTIC, 'tenant-42');
  });

  it('resolves the app token against the activity tenant', async () => {
    const getAppGraphToken = jest.fn(async () => token('app-token'));

    await selectFilesCredential({
      tenantId: 'tenant-42',
      getAppGraphToken,
      getAgenticGraphToken: async () => null,
    }).token();

    expect(getAppGraphToken).toHaveBeenCalledWith('tenant-42');
  });

  it('forwards the activity tenant when there is one', async () => {
    const getAppGraphToken = jest.fn(async () => token('app-token'));

    await selectFilesCredential({
      tenantId: 'tenant-abc',
      getAppGraphToken,
      getAgenticGraphToken: async () => null,
    }).token();

    expect(getAppGraphToken).toHaveBeenCalledWith('tenant-abc');
  });

  it('leaves tenant resolution to the app when the activity carries none', async () => {
    const getAppGraphToken = jest.fn(async () => token('app-token'));

    await selectFilesCredential({
      getAppGraphToken,
      getAgenticGraphToken: async () => null,
    }).token();

    // Not `'common'`. Resolving here would short-circuit the app's own chain, which prefers the bot's configured
    // tenant before falling back, and would diverge from teams.py.
    expect(getAppGraphToken).toHaveBeenCalledWith(undefined);
  });

  it('carries the Graph host root alongside the token, for both actors', async () => {
    // Keeping the token and its destination on one object removes the failure mode where a new code path wires one through and forgets the other.
    const args = {
      graphBaseUrlRoot: 'https://graph.microsoft.us',
      getAppGraphToken: async () => token('app-token'),
      getAgenticGraphToken: async () => token('agentic-token'),
    };

    expect(selectFilesCredential(args).baseUrlRoot).toBe('https://graph.microsoft.us');
    expect(selectFilesCredential({ ...args, agenticIdentity: AGENTIC }).baseUrlRoot).toBe(
      'https://graph.microsoft.us'
    );
  });

  it('leaves the host root unset when the cloud supplies none, so the public default applies', async () => {
    const credential = selectFilesCredential({
      getAppGraphToken: async () => token('app-token'),
      getAgenticGraphToken: async () => null,
    });

    expect(credential.baseUrlRoot).toBeUndefined();
  });

  it('acquires no token until one is asked for', async () => {
    // A turn that never touches files should never pay for a token.
    const getAppGraphToken = jest.fn(async () => token('app-token'));
    const getAgenticGraphToken = jest.fn(async () => token('agentic-token'));

    selectFilesCredential({ agenticIdentity: AGENTIC, getAppGraphToken, getAgenticGraphToken });
    selectFilesCredential({ getAppGraphToken, getAgenticGraphToken });

    expect(getAppGraphToken).not.toHaveBeenCalled();
    expect(getAgenticGraphToken).not.toHaveBeenCalled();
  });

  it('reports no token rather than throwing when the app has no credentials', async () => {
    // Surfaces downstream as a typed `FileCredentialError` before any HTTP call is made.
    const credential = selectFilesCredential({
      getAppGraphToken: async () => null,
      getAgenticGraphToken: async () => null,
    });

    expect(await credential.token()).toBeUndefined();
  });
});
