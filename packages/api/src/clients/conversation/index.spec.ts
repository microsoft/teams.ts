import { ConversationClient } from './index';

describe('ConversationClient', () => {
  describe('activities', () => {
    it('createActivity should POST an activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.createActivity('1', { type: 'message', text: 'hi' });

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
        type: 'message',
        text: 'hi',
      });
    });

    it('updateActivity should PUT an activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

      await client.updateActivity('1', '2', { type: 'message', text: 'hi' });

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2', {
        type: 'message',
        text: 'hi',
      });
    });

    it('replyToActivity should POST a reply', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.replyToActivity('1', '2', { type: 'message', text: 'hi' });

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
        type: 'message',
        text: 'hi',
        replyToId: '2',
      });
    });

    it('deleteActivity should DELETE an activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

      await client.deleteActivity('1', '2');

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2');
    });

    it('getActivityMembers should GET activity members', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: [] });

      await client.getActivityMembers('1', '2');

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2/members');
    });

    it('createTargetedActivity should POST a targeted activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

      await client.createTargetedActivity('1', { type: 'message', text: 'hi' });

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities?isTargetedActivity=true',
        { type: 'message', text: 'hi' }
      );
    });

    it('updateTargetedActivity should PUT a targeted activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

      await client.updateTargetedActivity('1', '2', { type: 'message', text: 'hi' });

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities/2?isTargetedActivity=true',
        { type: 'message', text: 'hi' }
      );
    });

    it('deleteTargetedActivity should DELETE a targeted activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

      await client.deleteTargetedActivity('1', '2');

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities/2?isTargetedActivity=true'
      );
    });
  });

  describe('members', () => {
    it('getMembers should GET members', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: [] });

      await client.getMembers('1');

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members');
    });

    it('getMemberById should GET a member by id', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: {} });

      await client.getMemberById('1', '2');

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members/2');
    });

    it('getPagedMembers should GET paged members', async () => {
      const client = new ConversationClient('');
      const spy = jest
        .spyOn(client.http, 'get')
        .mockResolvedValueOnce({ data: { members: [] } });

      await client.getPagedMembers('1', 50, 'some-token');

      expect(spy).toHaveBeenCalledWith('/v3/conversations/1/pagedMembers', {
        params: { pageSize: 50, continuationToken: 'some-token' },
      });
    });
  });

  describe('reactions', () => {
    it('addReaction should PUT a reaction on an activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

      await client.addReaction('1', '2', 'like');

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities/2/reactions/like'
      );
    });

    it('deleteReaction should DELETE a reaction from an activity', async () => {
      const client = new ConversationClient('');
      const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

      await client.deleteReaction('1', '2', 'like');

      expect(spy).toHaveBeenCalledWith(
        '/v3/conversations/1/activities/2/reactions/like'
      );
    });
  });

  // The pre-flattening chained API is still supported until officially removed;
  // keep full coverage of the deprecated grouped accessors alongside the
  // flattened methods above.
  describe('deprecated chained aliases', () => {
    describe('activities(id)', () => {
      it('create should POST an activity', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

        await client.activities('1').create({ type: 'message', text: 'hi' });

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
          type: 'message',
          text: 'hi',
        });
      });

      it('update should PUT an activity', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

        await client.activities('1').update('2', { type: 'message', text: 'hi' });

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2', {
          type: 'message',
          text: 'hi',
        });
      });

      it('reply should POST a reply', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

        await client.activities('1').reply('2', { type: 'message', text: 'hi' });

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities', {
          type: 'message',
          text: 'hi',
          replyToId: '2',
        });
      });

      it('delete should DELETE an activity', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

        await client.activities('1').delete('2');

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2');
      });

      it('members should GET activity members', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: [] });

        await client.activities('1').members('2');

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/activities/2/members');
      });

      it('createTargeted should POST a targeted activity', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'post').mockResolvedValueOnce({});

        await client.activities('1').createTargeted({ type: 'message', text: 'hi' });

        expect(spy).toHaveBeenCalledWith(
          '/v3/conversations/1/activities?isTargetedActivity=true',
          { type: 'message', text: 'hi' }
        );
      });

      it('updateTargeted should PUT a targeted activity', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'put').mockResolvedValueOnce({});

        await client.activities('1').updateTargeted('2', { type: 'message', text: 'hi' });

        expect(spy).toHaveBeenCalledWith(
          '/v3/conversations/1/activities/2?isTargetedActivity=true',
          { type: 'message', text: 'hi' }
        );
      });

      it('deleteTargeted should DELETE a targeted activity', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

        await client.activities('1').deleteTargeted('2');

        expect(spy).toHaveBeenCalledWith(
          '/v3/conversations/1/activities/2?isTargetedActivity=true'
        );
      });
    });

    describe('members(id)', () => {
      it('get should GET members', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: [] });

        await client.members('1').get();

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members');
      });

      it('getById should GET a member by id', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'get').mockResolvedValueOnce({ data: {} });

        await client.members('1').getById('2');

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members/2');
      });

      it('getPaged should GET paged members', async () => {
        const client = new ConversationClient('');
        const spy = jest
          .spyOn(client.http, 'get')
          .mockResolvedValueOnce({ data: { members: [] } });

        await client.members('1').getPaged(50, 'some-token');

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/pagedMembers', {
          params: { pageSize: 50, continuationToken: 'some-token' },
        });
      });

      it('delete should DELETE a member', async () => {
        const client = new ConversationClient('');
        const spy = jest.spyOn(client.http, 'delete').mockResolvedValueOnce({});

        await client.members('1').delete('2');

        expect(spy).toHaveBeenCalledWith('/v3/conversations/1/members/2');
      });
    });
  });
});
