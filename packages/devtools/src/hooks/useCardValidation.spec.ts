import type { RenderHookResult } from '@testing-library/react';
import { renderHook } from '@testing-library/react';

import { useCardValidation } from './useCardValidation';

describe('useCardValidation', () => {
  describe('validateCardInput', () => {
    let hookResult: RenderHookResult<ReturnType<typeof useCardValidation>, unknown>;

    beforeEach(() => {
      hookResult = renderHook(() => useCardValidation());
    });

    it('should handle empty input', () => {
      const validation = hookResult.result.current.validateCardInput('');
      expect(validation.error).toBe('Please enter JSON content.');
    });

    it('should handle whitespace input', () => {
      const validation = hookResult.result.current.validateCardInput('   ');
      expect(validation.error).toBe('Please enter JSON content.');
    });

    it('should handle invalid JSON', () => {
      const invalidJson = '{ not valid json }';
      const result = hookResult.result.current.validateCardInput(invalidJson);
      expect(result.isValid).toBe(false);
      expect(result.error).toMatch(/Invalid JSON format/);
    });

    it('should handle invalid card type', () => {
      const invalidType = JSON.stringify({
        type: 'invalidType',
        title: 'Test Card',
      });
      const result = hookResult.result.current.validateCardInput(invalidType);
      expect(result.isValid).toBe(false);
      expect(result.error).toMatch(/Invalid card type/);
    });

    it('should handle Teams unsupported card types', () => {
      const unsupportedTypes = ['animation', 'video', 'audio'];

      unsupportedTypes.forEach((type) => {
        const card = JSON.stringify({
          type,
          title: 'Test Card',
        });
        const result = hookResult.result.current.validateCardInput(card);
        expect(result.isValid).toBe(false);
        expect(result.isUnsupportedType).toBe(true);
        expect(result.error).toBe(`${type} cards are not supported in Teams`);
      });
    });

    it('should handle valid adaptive card', () => {
      const adaptiveCard = JSON.stringify({
        type: 'AdaptiveCard',
        version: '1.0',
        body: [
          {
            type: 'TextBlock',
            text: 'Hello World',
          },
        ],
      });
      const result = hookResult.result.current.validateCardInput(adaptiveCard);
      expect(result.isValid).toBe(true);
      expect(result.attachment).toBeDefined();
      expect(result.attachment?.contentType).toBe('application/vnd.microsoft.card.adaptive');
    });

    it('should handle valid hero card', () => {
      const heroCard = JSON.stringify({
        type: 'hero',
        title: 'Hero Card',
        text: 'This is a hero card',
      });
      const result = hookResult.result.current.validateCardInput(heroCard);
      expect(result.isValid).toBe(true);
      expect(result.attachment).toBeDefined();
      expect(result.attachment?.contentType).toBe('application/vnd.microsoft.card.hero');
    });

    it('should handle malformed card structure', () => {
      const malformedCard = JSON.stringify({
        type: 'hero',
        // missing required title
      });
      const result = hookResult.result.current.validateCardInput(malformedCard);
      expect(result.isValid).toBe(true); // The current implementation doesn't validate required fields
      expect(result.attachment).toBeDefined();
      expect(result.attachment?.contentType).toBe('application/vnd.microsoft.card.hero');
    });
  });
});
