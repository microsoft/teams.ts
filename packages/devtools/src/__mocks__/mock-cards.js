import { cardAttachment } from '@microsoft/spark.api';

const basicHeroCard = {
  title: 'Basic Hero Card',
  text: 'This is a basic hero card',
};

const basicThumbnailCard = {
  title: 'Basic Thumbnail Card',
  text: 'This is a basic thumbnail card',
};

const basicAdaptiveCard = {
  type: 'AdaptiveCard',
  version: '1.0',
  body: [
    {
      type: 'TextBlock',
      text: 'Basic Adaptive Card',
    },
  ],
};

const basicAnimationCard = {
  title: 'Basic Animation Card',
  media: [{ url: 'https://example.com/animation.gif' }],
};

const basicAudioCard = {
  title: 'Basic Audio Card',
  media: [{ url: 'https://example.com/audio.mp3' }],
};

const basicVideoCard = {
  title: 'Basic Video Card',
  media: [{ url: 'https://example.com/video.mp4' }],
};

const basicOAuthCard = {
  text: 'Basic OAuth Card',
  connectionName: 'TestConnection',
  buttons: [],
};

const basicSigninCard = {
  text: 'Basic Signin Card',
  buttons: [{ type: 'signin', title: 'Sign In', value: 'https://example.com/signin' }],
};

export const mockCards = {
  basicCards: {
    hero: cardAttachment('hero', basicHeroCard),
    thumbnail: cardAttachment('thumbnail', basicThumbnailCard),
    adaptive: cardAttachment('adaptive', basicAdaptiveCard),
    animation: cardAttachment('animation', basicAnimationCard),
    audio: cardAttachment('audio', basicAudioCard),
    oauth: cardAttachment('oauth', basicOAuthCard),
    signin: cardAttachment('signin', basicSigninCard),
    video: cardAttachment('video', basicVideoCard),
  },
  invalidCards: {
    hero: { content: {} },
    thumbnail: { contentType: 'application/vnd.microsoft.card.thumbnail' },
    adaptive: { content: { type: 'AdaptiveCard', version: '1.0' } },
  },
  complexCards: {
    hero: cardAttachment('hero', {
      title: 'Complex Hero Card',
      text: 'This is a complex hero card with all properties',
      images: [{ url: 'https://example.com/image.jpg', alt: 'Example image' }],
      buttons: [{ type: 'imBack', title: 'Click Me', value: 'clicked' }],
    }),
    thumbnail: cardAttachment('thumbnail', {
      title: 'Complex Thumbnail Card',
      text: 'This is a complex thumbnail card with all properties',
      images: [{ url: 'https://example.com/thumbnail.jpg', alt: 'Example thumbnail' }],
      buttons: [{ type: 'openUrl', title: 'Visit', value: 'https://example.com' }],
    }),
    adaptive: cardAttachment('adaptive', {
      type: 'AdaptiveCard',
      version: '1.0',
      body: [
        {
          type: 'TextBlock',
          text: 'Complex Adaptive Card',
          size: 'large',
        },
        {
          type: 'Image',
          url: 'https://example.com/image.jpg',
        },
      ],
      actions: [
        {
          type: 'Action.Submit',
          title: 'Submit',
        },
      ],
    }),
    animation: cardAttachment('animation', {
      title: 'Complex Animation Card',
      subtitle: 'With subtitle',
      text: 'Animation description',
      image: { url: 'https://example.com/animation.gif', alt: 'Animation' },
      media: [{ url: 'https://example.com/animation.mp4' }],
    }),
    audio: cardAttachment('audio', {
      title: 'Complex Audio Card',
      subtitle: 'With subtitle',
      text: 'Audio description',
      media: [{ url: 'https://example.com/audio.mp3' }],
    }),
    oauth: cardAttachment('oauth', {
      text: 'Complex OAuth Card',
      connectionName: 'GraphConnection',
      buttons: [{ type: 'signin', title: 'Connect', value: 'https://example.com/oauth' }],
    }),
    signin: cardAttachment('signin', {
      text: 'Complex Signin Card',
      buttons: [{ type: 'signin', title: 'Sign In Now', value: 'https://example.com/signin' }],
    }),
    video: cardAttachment('video', {
      title: 'Complex Video Card',
      subtitle: 'With subtitle',
      text: 'Video description',
      media: [{ url: 'https://example.com/video.mp4' }],
      buttons: [{ type: 'openUrl', title: 'Watch', value: 'https://example.com/watch' }],
    }),
  },
};
