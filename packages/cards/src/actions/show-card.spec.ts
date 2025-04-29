import { Card } from '../card';
import { Badge } from '../medias';

import { ShowCardAction } from './show-card';

describe('Actions.ShowCard', () => {
  it('should build', () => {
    const action = new ShowCardAction(new Card()).withCard(new Card(new Badge()));

    expect(action.card.body).toHaveLength(1);
    expect(action.card.body![0] instanceof Badge).toEqual(true);
  });

  it('should build from interface', () => {
    const action = ShowCardAction.from({
      card: new Card(new Badge()),
    });

    expect(action.card.body).toHaveLength(1);
    expect(action.card.body![0] instanceof Badge).toEqual(true);
  });
});
