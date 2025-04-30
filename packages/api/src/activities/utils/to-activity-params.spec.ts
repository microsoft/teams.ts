import { Card, CodeBlock } from '@microsoft/teams.cards';

import { MessageActivity } from '../message';

import { toActivityParams } from './to-activity-params';

describe('Activity Utils', () => {
  describe('toActivityParams', () => {
    it('should convert `string` to message activity', () => {
      const activity = toActivityParams('testing123');
      expect(activity).toEqual({
        type: 'message',
        text: 'testing123',
      });
    });

    it('should convert card to message activity with card attachment', () => {
      const card = new Card(
        new CodeBlock({
          language: 'TypeScript',
          codeSnippet: 'let test = 1',
        })
      );

      const activity = toActivityParams(card);
      expect(activity).toEqual(new MessageActivity().addCard('adaptive', card));
    });
  });
});
