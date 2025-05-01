import { IAdaptiveCard } from '@microsoft/teams.cards';

import { AnimationCard, AudioCard, HeroCard, ThumbnailCard, VideoCard } from '../card';
import { OAuthCard } from '../oauth';
import { SigninCard } from '../sign-in';

export function cardAttachment<T extends CardAttachmentType>(
  type: T,
  content: CardAttachmentTypes[T]['content']
): CardAttachmentTypes[T] {
  return {
    contentType: `application/vnd.microsoft.card.${type}`,
    content,
  } as never as CardAttachmentTypes[T];
}

export type CardAttachmentType = keyof CardAttachmentTypes;
export type CardAttachmentTypes = {
  adaptive: {
    contentType: 'application/vnd.microsoft.card.adaptive';
    content: IAdaptiveCard;
  };
  animation: {
    contentType: 'application/vnd.microsoft.card.animation';
    content: AnimationCard;
  };
  audio: {
    contentType: 'application/vnd.microsoft.card.audio';
    content: AudioCard;
  };
  hero: {
    contentType: 'application/vnd.microsoft.card.hero';
    content: HeroCard;
  };
  oauth: {
    contentType: 'application/vnd.microsoft.card.oauth';
    content: OAuthCard;
  };
  signin: {
    contentType: 'application/vnd.microsoft.card.signin';
    content: SigninCard;
  };
  thumbnail: {
    contentType: 'application/vnd.microsoft.card.thumbnail';
    content: ThumbnailCard;
  };
  video: {
    contentType: 'application/vnd.microsoft.card.video';
    content: VideoCard;
  };
};
