import { ILogger } from '@microsoft/teams.common';

import { IClientContext } from '../../contexts';

import { JwtValidator } from './jwt-validator';

/**
 * Remote function validator for /api/functions/* requests
 * Wraps an Entra token validator and provides a simple check() method
 */
export class RemoteFunctionValidator {
  private entraTokenValidator: Pick<JwtValidator, 'validateAccessToken'>;
  private logger: ILogger;

  constructor(entraTokenValidator: Pick<JwtValidator, 'validateAccessToken'>, logger: ILogger) {
    this.entraTokenValidator = entraTokenValidator;
    this.logger = logger;
  }

  /**
   * Create a remote function validator for Entra tokens
   */
  static create(
    tenantId: string,
    clientId: string,
    logger: ILogger,
    options?: {
      allowedTenantIds?: string[];
      requiredScope?: string;
    }
  ): RemoteFunctionValidator {
    const jwtValidator = new JwtValidator({
      clientId,
      tenantId,
      validateIssuer: {
        allowedTenantIds: options?.allowedTenantIds
      },
      validateScope: options?.requiredScope ? { requiredScope: options.requiredScope } : undefined,
      jwksUriOptions: {
        type: 'tenantId'
      }
    }, logger);

    return new RemoteFunctionValidator(jwtValidator, logger);
  }

  async check(headers: Record<string, string | string[]>): Promise<IClientContext | null> {
    const h = (key: string) => {
      const v = headers[key];
      return Array.isArray(v) ? v[0] : v;
    };
    const appSessionId = h('x-teams-app-session-id');
    const pageId = h('x-teams-page-id');
    const authorization = h('authorization')?.split(' ');
    const authToken =
      authorization?.length === 2 && authorization[0].toLowerCase() === 'bearer'
        ? authorization[1]
        : '';

    const tokenPayload = await this.entraTokenValidator.validateAccessToken(authToken);

    if (
      !pageId ||
      !appSessionId ||
      !authToken ||
      !tokenPayload
    ) {
      this.logger.debug('unauthorized - missing required headers or invalid token');
      return null;
    }

    return {
      appId: tokenPayload?.['appId'],
      appSessionId,
      authToken,
      channelId: h('x-teams-channel-id'),
      chatId: h('x-teams-chat-id'),
      meetingId: h('x-teams-meeting-id'),
      messageId: h('x-teams-message-id'),
      pageId,
      subPageId: h('x-teams-sub-page-id'),
      teamId: h('x-teams-team-id'),
      tenantId: tokenPayload['tid'],
      userId: tokenPayload['oid'],
      userName: tokenPayload['name'],
    };
  }
}
