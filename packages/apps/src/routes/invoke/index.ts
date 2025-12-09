import { InvokeActivity, InvokeResponse } from '@microsoft/teams.api';

import { IActivityContext } from '../../contexts';
import { RouteHandler } from '../../types';

import { FileConsentActivityRoutes } from './file-consent';
import { MessageExtensionSubmitActivityRoutes } from './message-extension-submit';
import { MessageSubmitActivityRoutes } from './message-submit';

export type InvokeActivityRoutes<TExtraCtx extends Record<string, any> = Record<string, any>> = {
  [K in InvokeActivity['name']as InvokeAliases[K]]?: RouteHandler<
    IActivityContext<Extract<InvokeActivity, { name: K }>, TExtraCtx>,
    InvokeResponse<K> | InvokeResponse<K>['body']
  >;
} & FileConsentActivityRoutes &
  MessageExtensionSubmitActivityRoutes &
  MessageSubmitActivityRoutes;

type InvokeAliases = {
  'config/fetch': 'config.open';
  'config/submit': 'config.submit';
  'fileConsent/invoke': 'file.consent';
  'actionableMessage/executeAction': 'message.execute';
  'composeExtension/queryLink': 'message.ext.query-link';
  'composeExtension/anonymousQueryLink': 'message.ext.anon-query-link';
  'composeExtension/query': 'message.ext.query';
  'composeExtension/selectItem': 'message.ext.select-item';
  'composeExtension/submitAction': 'message.ext.submit';
  'composeExtension/fetchTask': 'message.ext.open';
  'composeExtension/querySettingUrl': 'message.ext.query-settings-url';
  'composeExtension/setting': 'message.ext.setting';
  'composeExtension/onCardButtonClicked': 'message.ext.card-button-clicked';
  'task/fetch': 'dialog.open';
  'task/submit': 'dialog.submit';
  'tab/fetch': 'tab.open';
  'tab/submit': 'tab.submit';
  'message/submitAction': 'message.submit';
  'handoff/action': 'handoff.action';
  'signin/tokenExchange': 'signin.token-exchange';
  'signin/verifyState': 'signin.verify-state';
  'signin/failure': 'signin.failure';
  'adaptiveCard/action': 'card.action';
};

export const INVOKE_ALIASES: InvokeAliases = {
  'config/fetch': 'config.open',
  'config/submit': 'config.submit',
  'fileConsent/invoke': 'file.consent',
  'actionableMessage/executeAction': 'message.execute',
  'composeExtension/queryLink': 'message.ext.query-link',
  'composeExtension/anonymousQueryLink': 'message.ext.anon-query-link',
  'composeExtension/query': 'message.ext.query',
  'composeExtension/selectItem': 'message.ext.select-item',
  'composeExtension/submitAction': 'message.ext.submit',
  'composeExtension/fetchTask': 'message.ext.open',
  'composeExtension/querySettingUrl': 'message.ext.query-settings-url',
  'composeExtension/setting': 'message.ext.setting',
  'composeExtension/onCardButtonClicked': 'message.ext.card-button-clicked',
  'task/fetch': 'dialog.open',
  'task/submit': 'dialog.submit',
  'tab/fetch': 'tab.open',
  'tab/submit': 'tab.submit',
  'message/submitAction': 'message.submit',
  'handoff/action': 'handoff.action',
  'signin/tokenExchange': 'signin.token-exchange',
  'signin/verifyState': 'signin.verify-state',
  'signin/failure': 'signin.failure',
  'adaptiveCard/action': 'card.action',
};

export * from './file-consent';
export * from './message-extension-submit';
export * from './message-submit';

