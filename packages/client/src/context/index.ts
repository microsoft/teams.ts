import * as window from '../window';

import { AppContext } from './app';
import { ChannelContext } from './channel';
import { ChatContext } from './chat';
import { MeetingContext } from './meeting';
import { PageContext } from './page';
import { SharePointSiteContext } from './share-point-site';
import { TeamContext } from './team';
import { UserContext } from './user';

/**
 * Represents structure of the received context message.
 */
export interface Context {
  /**
   * Properties about the current session for your app
   */
  app: AppContext;

  /**
   * Info about the current page context hosting your app
   */
  page: PageContext;

  /**
   * Info about the currently logged in user running the app.
   * If the current user is not logged in/authenticated (e.g. a meeting app running for an anonymously-joined partcipant) this will be `undefined`.
   */
  user?: UserContext;

  /**
   * When running in the context of a Teams channel, provides information about the channel, else `undefined`
   */
  channel?: ChannelContext;

  /**
   * When running in the context of a Teams chat, provides information about the chat, else `undefined`
   */
  chat?: ChatContext;

  /**
   * When running in the context of a Teams meeting, provides information about the meeting, else `undefined`
   */
  meeting?: MeetingContext;

  /**
   * When hosted in SharePoint, this is the [SharePoint PageContext](https://learn.microsoft.com/javascript/api/sp-page-context/pagecontext?view=sp-typescript-latest), else `undefined`
   */
  sharepoint?: any;

  /**
   * When running in Teams for an organization with a tenant, provides information about the SharePoint site associated with the team.
   * Will be `undefined` when not running in Teams for an organization with a tenant.
   */
  sharePointSite?: SharePointSiteContext;

  /**
   * When running in Teams, provides information about the Team context in which your app is running.
   * Will be `undefined` when not running in Teams.
   */
  team?: TeamContext;

  /**
   * When `processActionCommand` activates a dialog, this dialog should automatically fill in some fields with information. This information comes from M365 and is given to `processActionCommand` as `extractedParameters`.
   * App developers need to use these `extractedParameters` in their dialog.
   * They help pre-fill the dialog with necessary information (`dialogParameters`) along with other details.
   * If there's no key/value pairs passed, the object will be empty in the case
   */
  dialogParameters: Record<string, string>;
}

export function mapContext(ctx: window.Context): Context {
  return {
    app: {
      id: ctx.appId,
      locale: ctx.locale,
      launchId: ctx.appLaunchId,
      sessionId: ctx.appSessionId ? ctx.appSessionId : '',
      theme: ctx.theme ? ctx.theme : 'default',
      iconPositionVertical: ctx.appIconPosition,
      osLocaleInfo: ctx.osLocaleInfo,
      parentMessageId: ctx.parentMessageId,
      userClickTime: ctx.userClickTime,
      userClickTimeV2: ctx.userClickTimeV2,
      userFileOpenPreference: ctx.userFileOpenPreference,
      host: {
        name: ctx.hostName ? ctx.hostName : 'Teams',
        clientType: ctx.hostClientType ? ctx.hostClientType : 'web',
        sessionId: ctx.sessionId ? ctx.sessionId : '',
        ringId: ctx.ringId,
      },
      manifestVersion: ctx.manifestVersion,
    },
    page: {
      id: ctx.entityId,
      frameContext: ctx.frameContext || 'content',
      subPageId: ctx.subEntityId,
      isFullScreen: ctx.isFullScreen,
      isMultiWindow: ctx.isMultiWindow,
      isBackgroundLoad: ctx.isBackgroundLoad,
      sourceOrigin: ctx.sourceOrigin,
    },
    user: {
      id: ctx.userObjectId ?? '',
      displayName: ctx.userDisplayName,
      isCallingAllowed: ctx.isCallingAllowed,
      isPSTNCallingAllowed: ctx.isPSTNCallingAllowed,
      licenseType: ctx.userLicenseType,
      loginHint: ctx.loginHint,
      userPrincipalName: ctx.userPrincipalName,
      tenant: ctx.tid
        ? {
            id: ctx.tid,
            teamsSku: ctx.tenantSKU,
          }
        : undefined,
    },
    channel: ctx.channelId
      ? {
          id: ctx.channelId,
          displayName: ctx.channelName,
          relativeUrl: ctx.channelRelativeUrl,
          membershipType: ctx.channelType,
          defaultOneNoteSectionId: ctx.defaultOneNoteSectionId,
          ownerGroupId: ctx.hostTeamGroupId,
          ownerTenantId: ctx.hostTeamTenantId,
        }
      : undefined,
    chat: ctx.chatId
      ? {
          id: ctx.chatId,
        }
      : undefined,
    meeting: ctx.meetingId
      ? {
          id: ctx.meetingId,
        }
      : undefined,
    sharepoint: ctx.sharepoint,
    team: ctx.teamId
      ? {
          internalId: ctx.teamId,
          displayName: ctx.teamName,
          type: ctx.teamType ? window.mapTeamType(ctx.teamType) : undefined,
          groupId: ctx.groupId,
          templateId: ctx.teamTemplateId,
          isArchived: ctx.isTeamArchived,
          userRole: ctx.userTeamRole ? window.mapUserTeamRole(ctx.userTeamRole) : undefined,
        }
      : undefined,
    sharePointSite:
      ctx.teamSiteUrl ||
      ctx.teamSiteDomain ||
      ctx.teamSitePath ||
      ctx.mySitePath ||
      ctx.mySiteDomain
        ? {
            teamSiteUrl: ctx.teamSiteUrl,
            teamSiteDomain: ctx.teamSiteDomain,
            teamSitePath: ctx.teamSitePath,
            teamSiteId: ctx.teamSiteId,
            mySitePath: ctx.mySitePath,
            mySiteDomain: ctx.mySiteDomain,
          }
        : undefined,
    dialogParameters: ctx.dialogParameters || {},
  };
}
