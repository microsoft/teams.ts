import { CardAttachmentType, Attachment, cardAttachment } from '@microsoft/spark.api';

import { isTeamsUnsupportedCardType } from '../types/TeamsCardTypes';
import { VALID_CARD_TYPES } from '../types/ValidCardTypes';

interface ValidationResult {
  isValid: boolean;
  attachment?: Attachment;
  error?: string;
  isUnsupportedType?: boolean;
}

/**
 * Hook for validating card JSON input and creating card attachments.
 * Handles validation of card types, content structure, and Teams compatibility.
 */
export const useCardValidation = () => {
  const validateCardInput = (input: string): ValidationResult => {
    if (!input.trim()) {
      return { isValid: false, error: 'Please enter JSON content.' };
    }

    try {
      const trimmedInput = input.trim();
      const cardContent = JSON.parse(trimmedInput);

      const attachmentType =
        cardContent?.type === 'AdaptiveCard'
          ? 'adaptive'
          : (cardContent?.type as CardAttachmentType);

      if (!attachmentType || !VALID_CARD_TYPES.includes(attachmentType)) {
        return {
          isValid: false,
          error: `Invalid card type. Expected one of: ${VALID_CARD_TYPES.join(', ')}`,
        };
      }

      if (isTeamsUnsupportedCardType(attachmentType)) {
        return {
          isValid: false,
          error: `${attachmentType} cards are not supported in Teams`,
          isUnsupportedType: true,
        };
      }

      return {
        isValid: true,
        attachment: cardAttachment(attachmentType, cardContent),
      };
    } catch (error) {
      const errorMessage =
        error instanceof SyntaxError
          ? `Invalid JSON format: ${error.message}`
          : 'Invalid card structure. Please verify the card format.';
      return { isValid: false, error: errorMessage };
    }
  };

  return { validateCardInput };
};
