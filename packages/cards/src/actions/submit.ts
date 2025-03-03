import { AssociatedInputs } from '../common';

import { BaseAction } from './base';
import { TabInfo } from './tab';

/**
 * Gathers input fields, merges with optional data field, and sends an event to the client. It is up to the client to determine how this data is processed. For example: With BotFramework bots, the client would send an activity through the messaging medium to the bot. The inputs that are gathered are those on the current card, and in the case of a show card those on any parent cards. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more details.
 */
export interface SubmitAction extends BaseAction {
  type: 'Action.Submit';

  /**
   * Controls which inputs are associated with the action.
   */
  associatedInputs?: AssociatedInputs;

  /**
   * Initial data that input fields will be combined with. These are essentially ‘hidden’ properties.
   */
  data?:
    | string
    | {
        msteams?:
          | MessageBackActionData
          | IMBackActionData
          | SignInActionData
          | TaskFetchActionData
          | InvokeActionData;

        [key: string]: any;
      };
}

export type SubmitActionParams = Omit<SubmitAction, 'type'>;

/**
 * Gathers input fields, merges with optional data field, and sends an event to the client. It is up to the client to determine how this data is processed. For example: With BotFramework bots, the client would send an activity through the messaging medium to the bot. The inputs that are gathered are those on the current card, and in the case of a show card those on any parent cards. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more details.
 */
export function SubmitAction(params?: SubmitActionParams): SubmitAction {
  return {
    type: 'Action.Submit',
    ...params,
  };
}

export interface MessageBackActionData {
  type: 'messageBack';

  /**
   * Sent to your bot when the action is performed.
   */
  text: string;

  /**
   * Used by the user in the chat stream when the action is performed.
   * This text isn't sent to your bot.
   */
  displayText?: string;

  /**
   * Sent to your bot when the action is performed. You can encode context
   * for the action, such as unique identifiers or a `JSON` object.
   */
  value: string;
}

export type MessageBackActionDataParams = Omit<MessageBackActionData, 'type' | 'text' | 'value'>;

export function MessageBackActionData(
  text: string,
  value: string,
  params?: MessageBackActionDataParams
): MessageBackActionData {
  return {
    type: 'messageBack',
    text,
    value,
    ...params,
  };
}

export interface IMBackActionData {
  type: 'imBack';

  /**
   * String that needs to be echoed back in the chat.
   */
  value: string;
}

export type IMBackActionDataParams = Omit<IMBackActionData, 'type' | 'value'>;

export function IMBackActionData(value: string, params?: IMBackActionDataParams): IMBackActionData {
  return {
    type: 'imBack',
    value,
    ...params,
  };
}

export interface SignInActionData {
  type: 'signin';

  /**
   * Set to the `URL` where you want to redirect.
   */
  value: string;
}

export type SignInActionDataParams = Omit<SignInActionData, 'type' | 'value'>;

export function SignInActionData(value: string, params?: SignInActionDataParams): SignInActionData {
  return {
    type: 'signin',
    value,
    ...params,
  };
}

export interface TaskFetchActionData {
  type: 'task/fetch';

  /**
   * The data value sent with the `task/fetch` invoke.
   */
  data?: any;
}

export type TaskFetchActionDataParams = Omit<TaskFetchActionData, 'type'>;

export function TaskFetchActionData(params?: TaskFetchActionDataParams): TaskFetchActionData {
  return {
    type: 'task/fetch',
    ...params,
  };
}

export interface InvokeActionData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: any;
}

export type InvokeActionDataParams = Omit<InvokeActionData, 'type'>;

export function InvokeActionData(params?: InvokeActionDataParams): InvokeActionData {
  return {
    type: 'invoke',
    ...params,
  };
}

/**
 * Contains the Adaptive Card action value data in {@link CollabStageActionData}.
 */
export interface CollabStageActionValueData {
  type: 'tab/tabInfoAction';
  /**
   * Information about the iFrame content, rendered in the collab stage popout window.
   */
  tabInfo: TabInfo;
}

/**
 * Contains the Adaptive Card action data in {@link CollabStageAction}.
 */
export interface CollabStageActionData {
  type: 'invoke';

  /**
   * Set the value to send with the invoke
   */
  value?: CollabStageActionValueData;
}

/**
 * Adaptive Card action response type for the {@link CollabStageAction} function.
 */
export interface CollabStageAction extends SubmitAction {
  data: {
    msteams: CollabStageActionData;
  };
}

/**
 * Adaptive Card action params for the {@link CollabStageAction} function.
 */
export type CollabStageActionParams = Omit<BaseAction, 'data'> & {
  /**
   * Information about the iFrame content, rendered in the collab stage popout window.
   */
  tabInfo: TabInfo;
};

/**
 * Adaptive Card action that opens a collab stage popout window.
 *
 * @param params action parameters
 * @param params.title button text for the action.
 * @param params.tabInfo information about the iFrame content, rendered in the collab stage popout window.
 * @returns the {@link CollabStageAction} object
 */
export function CollabStageAction(params: CollabStageActionParams): CollabStageAction {
  let { tabInfo, ...actionParams } = params;

  return {
    type: 'Action.Submit',
    ...actionParams,
    data: {
      msteams: {
        type: 'invoke',
        value: {
          type: 'tab/tabInfoAction',
          tabInfo: {
            ...tabInfo,
          },
        },
      },
    },
  };
}
