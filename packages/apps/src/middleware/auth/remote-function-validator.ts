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

  async check(headers: Record<string, string>): Promise<IClientContext | null> {
    const appSessionId = headers['x-teams-app-session-id'];
    const pageId = headers['x-teams-page-id'];
    const authorization = headers['authorization']?.split(' ');
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
      channelId: headers['x-teams-channel-id'],
      chatId: headers['x-teams-chat-id'],
      meetingId: headers['x-teams-meeting-id'],
      messageId: headers['x-teams-message-id'],
      pageId,
      subPageId: headers['x-teams-sub-page-id'],
      teamId: headers['x-teams-team-id'],
      tenantId: tokenPayload['tid'],
      userId: tokenPayload['oid'],
      userName: tokenPayload['name'],
    };
  }
}
