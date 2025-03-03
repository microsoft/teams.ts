import { ThreadMember } from '../types';
import { WindowClient } from '../window-client';

export interface OpenConversationParams {
  /**
   * The Id of the subEntity where the conversation is taking place
   */
  subEntityId: string;

  /**
   * The title of the conversation
   */
  title: string;

  /**
   * The Id of the conversation. This is optional and should be specified whenever a previous conversation about a specific sub-entity has already been started before
   */
  conversationId?: string;

  /**
   * The Id of the channel. This is optional and should be specified whenever a conversation is started or opened in a personal app scope
   */
  channelId?: string;

  /**
   * The entity Id of the tab
   */
  entityId: string;
}

export interface CreateConversationParams {
  /**
   * Array containing [Microsoft Entra UPNs](https://learn.microsoft.com/entra/identity/hybrid/connect/plan-connect-userprincipalname) (usually but not always an e-mail address)
   * of users with whom to begin a chat
   */
  members: string[];

  /**
   * An optional message used when initiating chat
   */
  message?: string;

  /**
   * The display name of a conversation for 3 or more users (chats with fewer than three users will ignore this field)
   */
  topic?: string;
}

export class ConversationsClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async open(params: OpenConversationParams) {
    await this.window.send('conversations.openConversation', params);
  }

  async close() {
    await this.window.send('conversations.closeConversation');
  }

  async create(params: CreateConversationParams) {
    await this.window.send('chat.openChat', params);
  }

  async getMembers() {
    const [{ members }] =
      await this.window.send<[{ members: Array<ThreadMember> }]>('getChatMembers');

    return members;
  }
}
