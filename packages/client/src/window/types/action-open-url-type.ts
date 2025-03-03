/**
 * The type of deeplink action that was executed by the host
 */
export type ActionOpenUrlType =
  | 'DeepLinkDialog'
  | 'DeepLinkOther'
  | 'DeepLinkStageView'
  | 'GenericUrl';

/**
 * The type of deeplink action that was executed by the host
 */
export enum ActionOpenUrlTypes {
  DeepLinkDialog = 'DeepLinkDialog',
  DeepLinkOther = 'DeepLinkOther',
  DeepLinkStageView = 'DeepLinkStageView',
  GenericUrl = 'GenericUrl',
}
