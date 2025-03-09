import { Card } from '../card';
import { Badge } from '../medias';
import { ShowCard } from './show-card';

describe('Actions.ShowCard', () => {
  it('should build', () => {
    const action = new ShowCard(new Card()).withCard(new Card(new Badge()));

    expect(action.card.body).toHaveLength(1);
    expect(action.card.body![0] instanceof Badge).toEqual(true);
  });

  it('should build from interface', () => {
    const action = ShowCard.from({
      card: new Card(new Badge()),
    });

    expect(action.card.body).toHaveLength(1);
    expect(action.card.body![0] instanceof Badge).toEqual(true);
  });
});
