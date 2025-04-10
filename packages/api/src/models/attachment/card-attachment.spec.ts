import { cardAttachment } from './card-attachment';
import { mockCards } from '../../../../devtools/src/__mocks__/mock-cards';

describe('cardAttachment', () => {
  describe('creates correct attachment structure', () => {
    it('should create an adaptive card attachment with minimal content', () => {
      const result = cardAttachment('adaptive', mockCards.basicCards.adaptive.content);
      expect(result).toEqual(mockCards.basicCards.adaptive);
    });

    it('should create an adaptive card attachment with complex content', () => {
      const result = cardAttachment('adaptive', mockCards.complexCards.adaptive.content);
      expect(result).toEqual(mockCards.complexCards.adaptive);
    });

    it('should create a hero card attachment', () => {
      const result = cardAttachment('hero', mockCards.complexCards.hero.content);
      expect(result).toEqual(mockCards.complexCards.hero);
    });

    it('should create a thumbnail card attachment', () => {
      const result = cardAttachment('thumbnail', mockCards.complexCards.thumbnail.content);
      expect(result).toEqual(mockCards.complexCards.thumbnail);
    });

    it('should create a video card attachment', () => {
      const result = cardAttachment('video', mockCards.complexCards.video.content);
      expect(result).toEqual(mockCards.complexCards.video);
    });
  });

  describe('handles simple valid cards', () => {
    it('should create a hero card with minimal content', () => {
      const result = cardAttachment('hero', mockCards.basicCards.hero.content);
      expect(result.contentType).toBe('application/vnd.microsoft.card.hero');
      expect(result.content.title).toBe('Basic Hero Card');
    });

    it('should create a thumbnail card with minimal content', () => {
      const result = cardAttachment('thumbnail', mockCards.basicCards.thumbnail.content);
      expect(result.contentType).toBe('application/vnd.microsoft.card.thumbnail');
      expect(result.content.title).toBe('Basic Thumbnail Card');
    });

    it('should create a video card with minimal required content', () => {
      const result = cardAttachment('video', mockCards.basicCards.video.content);
      expect(result.contentType).toBe('application/vnd.microsoft.card.video');
      expect(result.content.title).toBe('Basic Video Card');
    });
  });

  describe('handles invalid cards and type mismatches', () => {
    it('should throw error when hero card is missing required title', () => {
      expect(() => {
        cardAttachment('hero', { content: {} } as any);
      }).toThrow();
    });

    it('should throw error when using adaptive card content as hero', () => {
      expect(() => {
        cardAttachment('hero', mockCards.basicCards.adaptive.content as any);
      }).toThrow();
    });

    it('should throw error when video card is missing required media', () => {
      expect(() => {
        cardAttachment('video', { title: 'Invalid Video' } as any);
      }).toThrow();
    });

    it('should throw error when thumbnail card has invalid button type', () => {
      expect(() => {
        cardAttachment('thumbnail', {
          title: 'Invalid Thumbnail',
          buttons: [{ type: 'invalid' }]
        } as any);
      }).toThrow();
    });
  });

  describe('handles all card types', () => {
    it('should create an animation card', () => {
      const result = cardAttachment('animation', mockCards.basicCards.animation.content);
      expect(result).toEqual(mockCards.basicCards.animation);

      const complexResult = cardAttachment('animation', mockCards.complexCards.animation.content);
      expect(complexResult).toEqual(mockCards.complexCards.animation);
      expect(complexResult.content.media).toBeDefined();
      expect(complexResult.content.image?.url).toBeDefined();
    });

    it('should create an audio card', () => {
      const result = cardAttachment('audio', mockCards.basicCards.audio.content);
      expect(result).toEqual(mockCards.basicCards.audio);

      const complexResult = cardAttachment('audio', mockCards.complexCards.audio.content);
      expect(complexResult).toEqual(mockCards.complexCards.audio);
      expect(complexResult.content.media).toBeDefined();
    });

    it('should create an oauth card', () => {
      const result = cardAttachment('oauth', mockCards.basicCards.oauth.content);
      expect(result).toEqual(mockCards.basicCards.oauth);
      expect(result.content.connectionName).toBeDefined();

      const complexResult = cardAttachment('oauth', mockCards.complexCards.oauth.content);
      expect(complexResult).toEqual(mockCards.complexCards.oauth);
      expect(complexResult.content.buttons).toBeDefined();
    });

    it('should create a signin card', () => {
      const result = cardAttachment('signin', mockCards.basicCards.signin.content);
      expect(result).toEqual(mockCards.basicCards.signin);
      expect(result.content.buttons).toBeDefined();
      expect(result.content.buttons[0].type).toBe('signin');

      const complexResult = cardAttachment('signin', mockCards.complexCards.signin.content);
      expect(complexResult).toEqual(mockCards.complexCards.signin);
    });
  });

  describe('validates card content', () => {
    it('should validate image properties', () => {
      expect(() => {
        cardAttachment('hero', {
          title: 'Invalid Image',
          images: [{ url: '' }] // Empty URL
        } as any);
      }).toThrow();

      expect(() => {
        cardAttachment('hero', {
          title: 'Invalid Image Array',
          images: 'not an array'
        } as any);
      }).toThrow();
    });

    it('should validate media arrays', () => {
      expect(() => {
        cardAttachment('video', {
          title: 'Invalid Media',
          media: [] // Empty media array
        } as any);
      }).toThrow();

      expect(() => {
        cardAttachment('audio', {
          title: 'Invalid Media URL',
          media: [{ url: null }]
        } as any);
      }).toThrow();
    });

    it('should validate button properties', () => {
      expect(() => {
        cardAttachment('hero', {
          title: 'Invalid Button Type',
          buttons: [{ type: 'unsupported', title: 'Click', value: 'test' }]
        } as any);
      }).toThrow();

      expect(() => {
        cardAttachment('signin', {
          text: 'Invalid Signin',
          buttons: [{ type: 'signin' }] // Missing required title and value
        } as any);
      }).toThrow();
    });

    it('should validate oauth specific properties', () => {
      expect(() => {
        cardAttachment('oauth', {
          text: 'Invalid OAuth',
          // Missing connectionName
          buttons: []
        } as any);
      }).toThrow();
    });
  });

  describe('handles edge cases', () => {
    it('should handle empty arrays appropriately', () => {
      // Empty buttons array is valid for oauth
      const oauthCard = cardAttachment('oauth', {
        text: 'Valid OAuth',
        connectionName: 'TestConnection',
        buttons: []
      });
      expect(oauthCard.content.buttons).toHaveLength(0);

      // Empty images array is valid for hero
      const heroCard = cardAttachment('hero', {
        title: 'Valid Hero',
        text: 'No images',
        images: []
      });
      expect(heroCard.content.images).toHaveLength(0);
    });

    it('should validate text field boundaries', () => {
      const longTitle = 'a'.repeat(1000); // Assuming there's a reasonable limit
      expect(() => {
        cardAttachment('hero', {
          title: longTitle,
          text: 'Test'
        } as any);
      }).toThrow();
    });
  });

  describe('card type specific validation', () => {
    it('should validate signin card buttons array', () => {
      // Missing buttons array should throw
      expect(() => {
        cardAttachment('signin', {
          text: 'Sign In'
        } as any);
      }).toThrow();

      // Empty buttons array should throw
      expect(() => {
        cardAttachment('signin', {
          text: 'Sign In',
          buttons: []
        } as any);
      }).toThrow();

      // Missing required button properties should throw
      expect(() => {
        cardAttachment('signin', {
          text: 'Sign In',
          buttons: [{ type: 'openUrl' }] // missing title and value
        } as any);
      }).toThrow();

      // Valid button should pass
      const validCard = cardAttachment('signin', {
        text: 'Sign In',
        buttons: [{
          type: 'openUrl',
          title: 'Sign In',
          value: 'https://example.com'
        }]
      });
      expect(validCard.content.buttons).toHaveLength(1);
      expect(validCard.content.buttons[0].title).toBe('Sign In');
    });

    it('should validate oauth card connection name', () => {
      expect(() => {
        cardAttachment('oauth', {
          text: 'Connect',
          buttons: [],
          connectionName: ''  // empty connection name
        } as any);
      }).toThrow();
    });

    it('should validate hero card image properties', () => {
      expect(() => {
        cardAttachment('hero', {
          title: 'Hero Card',
          images: [{ url: '', alt: 'Missing URL' }]
        } as any);
      }).toThrow();

      expect(() => {
        cardAttachment('hero', {
          title: 'Hero Card',
          images: [{ url: 'https://example.com/image.jpg', alt: '' }]
        } as any);
      }).not.toThrow();
    });

    it('should validate thumbnail card tap action', () => {
      expect(() => {
        cardAttachment('thumbnail', {
          title: 'Thumbnail Card',
          tap: { type: 'invalid' }
        } as any);
      }).toThrow();

      const validCard = cardAttachment('thumbnail', {
        title: 'Thumbnail Card',
        tap: { type: 'openUrl', title: 'Open URL', value: 'https://example.com' }
      });
      expect(validCard.content.tap?.type).toBe('openUrl');
    });
  });

  describe('content type validation', () => {
    it('should validate adaptive card version', () => {
      expect(() => {
        cardAttachment('adaptive', {
          type: 'AdaptiveCard',
          version: 'invalid'  // should be semver
        } as any);
      }).toThrow();

      const validCard = cardAttachment('adaptive', {
        type: 'AdaptiveCard',
        version: '1.0',
        body: []
      });
      expect(validCard.content.version).toBe('1.0');
    });

    it('should validate media content types', () => {
      expect(() => {
        cardAttachment('video', {
          title: 'Video',
          media: [{ url: 'invalid://url' }]
        } as any);
      }).toThrow();

      expect(() => {
        cardAttachment('audio', {
          title: 'Audio',
          media: [{ url: 'data:audio/invalid' }]
        } as any);
      }).toThrow();

      expect(() => {
        cardAttachment('animation', {
          title: 'Animation',
          media: [{ url: 'https://example.com/animation.gif' }],
          image: { url: 'invalid://url' }
        } as any);
      }).toThrow();
    });

    it('should validate button value types', () => {
      expect(() => {
        cardAttachment('hero', {
          title: 'Hero Card',
          buttons: [
            {
              type: 'openUrl',
              title: 'Visit',
              value: {} // should be string
            }
          ]
        } as any);
      }).toThrow();

      expect(() => {
        cardAttachment('hero', {
          title: 'Hero Card',
          buttons: [
            {
              type: 'imBack',
              title: 'Click',
              value: 123 // should be string
            }
          ]
        } as any);
      }).toThrow();
    });

    it('should validate card text content', () => {
      // Test extremely long text
      const longText = 'a'.repeat(2000);
      expect(() => {
        cardAttachment('hero', {
          title: longText,
          text: 'Normal text'
        } as any);
      }).toThrow();

      // Test HTML content
      expect(() => {
        cardAttachment('hero', {
          title: 'Hero Card',
          text: '<script>alert("xss")</script>'
        } as any);
      }).toThrow();

      // Test markdown content (should be allowed)
      const markdownCard = cardAttachment('hero', {
        title: 'Hero Card',
        text: '**Bold** and *italic*'
      });
      expect(markdownCard.content.text).toBe('**Bold** and *italic*');
    });
  });
});
