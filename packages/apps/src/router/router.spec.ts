import { Account, MessageActivity, TypingActivity } from '@microsoft/teams.api';

import { Router } from './router';

describe('Router', () => {
  it('should select when bot is mentioned', () => {
      const router = new Router();
      const handler = jest.fn();
      const bot: Account = {
        id: '1',
        role: 'bot',
        name: 'bot',
      };

      const user: Account = {
        id: '2',
        role: 'user',
        name: 'user',
      };

      router.on('mention', handler);

      expect(router.select(new MessageActivity())).toHaveLength(0);
      expect(router.select(new MessageActivity().withRecipient(bot).addMention(user))).toHaveLength(0);
      expect(router.select(new MessageActivity().withRecipient(bot).addMention(bot))).toHaveLength(1);
  });

  it('should remove system route on register of user route', () => {
    const router = new Router();
    const handler = jest.fn();

    router.register({
      name: 'signin.token-exchange',
      type: 'system',
      select: activity => activity.type === 'invoke' && activity.name === 'signin/tokenExchange',
      callback: handler,
    });

    router.on('signin.token-exchange', handler);
    expect(router.select({ type: 'invoke', name: 'signin/tokenExchange' } as any)).toHaveLength(1);
  });

  describe('type', () => {
    it('should select type filtered routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('activity', handler);
      router.on('message', handler);
      router.on('typing', handler);

      expect(router.select(new MessageActivity())).toHaveLength(2);
      expect(router.select(new TypingActivity())).toHaveLength(2);
    });
  });

  describe('conversationUpdate', () => {
    it('should select "channelData.eventType" filtered routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('conversationUpdate', handler);
      router.on('channelShared', handler);
      router.on('teamDeleted', handler);

      expect(router.select({
        type: 'conversationUpdate',
        channelData: {
          eventType: 'channelShared'
        }
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'conversationUpdate',
        channelData: {
          eventType: 'teamDeleted'
        }
      } as any)).toHaveLength(2);
    });
  });

  describe('installationUpdate', () => {
    it('should select action filtered routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('installationUpdate', handler);
      router.on('install.add', handler);
      router.on('install.remove', handler);

      expect(router.select({
        type: 'installationUpdate',
        action: 'add',
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'installationUpdate',
        action: 'remove'
      } as any)).toHaveLength(2);
    });
  });

  describe('messageDelete', () => {
    it('should select "channelData.eventType" filtered routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('messageDelete', handler);
      router.on('softDeleteMessage', handler);

      expect(router.select({
        type: 'messageDelete',
      } as any)).toHaveLength(1);

      expect(router.select({
        type: 'messageDelete',
        channelData: {
          eventType: 'softDeleteMessage'
        }
      } as any)).toHaveLength(2);
    });
  });

  describe('messageUpdate', () => {
    it('should select "channelData.eventType" filtered routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('messageUpdate', handler);
      router.on('undeleteMessage', handler);
      router.on('editMessage', handler);

      expect(router.select({
        type: 'messageUpdate',
      } as any)).toHaveLength(1);

      expect(router.select({
        type: 'messageUpdate',
        channelData: {
          eventType: 'undeleteMessage'
        }
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'messageUpdate',
        channelData: {
          eventType: 'editMessage'
        }
      } as any)).toHaveLength(2);
    });
  });

  describe('event', () => {
    it('should select name filtered routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('event', handler);
      router.on('meetingStart', handler);
      router.on('readReceipt', handler);

      expect(router.select({
        type: 'event',
        name: 'application/vnd.microsoft.meetingStart'
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'event',
        name: 'application/vnd.microsoft.readReceipt'
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'event',
        name: 'application/vnd.microsoft.meetingEnd'
      } as any)).toHaveLength(1);
    });
  });

  describe('invoke', () => {
    it('should select name filtered routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('message.ext.open', handler);
      router.on('card.action', handler);

      expect(router.select({
        type: 'invoke',
        name: 'composeExtension/fetchTask'
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'invoke',
        name: 'adaptiveCard/action'
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'invoke',
        name: 'task/fetch'
      } as any)).toHaveLength(1);
    });

    it('should select file consent routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('file.consent', handler);
      router.on('file.consent.accept', handler);
      router.on('file.consent.decline', handler);

      expect(router.select({
        type: 'invoke',
        name: 'fileConsent/invoke',
        value: { action: 'accept' }
      } as any)).toHaveLength(3);

      expect(router.select({
        type: 'invoke',
        name: 'fileConsent/invoke',
        value: { action: 'decline' }
      } as any)).toHaveLength(3);

      expect(router.select({
        type: 'invoke',
        name: 'task/fetch'
      } as any)).toHaveLength(1);
    });

    it('should select message extension submit action routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('message.ext.submit', handler);
      router.on('message.ext.edit', handler);
      router.on('message.ext.send', handler);

      expect(router.select({
        type: 'invoke',
        name: 'composeExtension/submitAction',
        value: { botMessagePreviewAction: 'edit' }
      } as any)).toHaveLength(3);

      expect(router.select({
        type: 'invoke',
        name: 'composeExtension/submitAction',
        value: { botMessagePreviewAction: 'send' }
      } as any)).toHaveLength(3);

      expect(router.select({
        type: 'invoke',
        name: 'task/fetch'
      } as any)).toHaveLength(1);
    });

    it('should select dialog open sub-routes by dialog_id', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('dialog.open', handler);
      router.on('dialog.open.simple_form', handler);

      // Matches invoke + dialog.open + dialog.open.simple_form
      expect(router.select({
        type: 'invoke',
        name: 'task/fetch',
        value: { data: { dialog_id: 'simple_form' } }
      } as any)).toHaveLength(3);

      // Matches invoke + dialog.open but NOT dialog.open.simple_form
      expect(router.select({
        type: 'invoke',
        name: 'task/fetch',
        value: { data: { dialog_id: 'other_form' } }
      } as any)).toHaveLength(2);

      // Matches invoke + dialog.open (no data at all)
      expect(router.select({
        type: 'invoke',
        name: 'task/fetch',
        value: {}
      } as any)).toHaveLength(2);
    });

    it('should select dialog submit sub-routes by action', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('dialog.submit', handler);
      router.on('dialog.submit.submit_form', handler);

      // Matches invoke + dialog.submit + dialog.submit.submit_form
      expect(router.select({
        type: 'invoke',
        name: 'task/submit',
        value: { data: { action: 'submit_form' } }
      } as any)).toHaveLength(3);

      // Matches invoke + dialog.submit but NOT dialog.submit.submit_form
      expect(router.select({
        type: 'invoke',
        name: 'task/submit',
        value: { data: { action: 'other_action' } }
      } as any)).toHaveLength(2);
    });

    it('should select card action sub-routes by action', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('card.action', handler);
      router.on('card.action.save_profile', handler);

      // Matches invoke + card.action + card.action.save_profile
      expect(router.select({
        type: 'invoke',
        name: 'adaptiveCard/action',
        value: { action: { type: 'Action.Execute', data: { action: 'save_profile' } } }
      } as any)).toHaveLength(3);

      // Matches invoke + card.action but NOT card.action.save_profile
      expect(router.select({
        type: 'invoke',
        name: 'adaptiveCard/action',
        value: { action: { type: 'Action.Execute', data: { action: 'other_action' } } }
      } as any)).toHaveLength(2);

      // Does not match sub-route when no action field in data
      expect(router.select({
        type: 'invoke',
        name: 'adaptiveCard/action',
        value: { action: { type: 'Action.Execute', data: { name: 'test' } } }
      } as any)).toHaveLength(2);
    });

    it('should select message submit action routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('message.submit', handler);
      router.on('message.submit.feedback', handler);

      expect(router.select({
        type: 'invoke',
        name: 'message/submitAction',
        value: { actionName: 'feedback' }
      } as any)).toHaveLength(3);

      expect(router.select({
        type: 'invoke',
        name: 'message/submitAction',
        value: { actionName: 'send' }
      } as any)).toHaveLength(2);

      expect(router.select({
        type: 'invoke',
        name: 'task/fetch'
      } as any)).toHaveLength(1);
    });

    it('should select message fetch-task routes', () => {
      const router = new Router();
      const handler = jest.fn();

      router.on('invoke', handler);
      router.on('message.fetch-task', handler);

      expect(router.select({
        type: 'invoke',
        name: 'message/fetchTask',
      } as any)).toHaveLength(2);
    });
  });
});
