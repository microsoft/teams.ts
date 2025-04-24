import { CardAttachmentType, Attachment, cardAttachment } from '@microsoft/teams.api';

import { isTeamsUnsupportedCardType } from '../types/TeamsCardTypes';
import { VALID_CARD_TYPES } from '../types/ValidCardTypes';

interface ValidationResult {
  isValid: boolean;
  attachment?: Attachment;
  error?: string;
  isUnsupportedType?: boolean;
}

/**
 * Validates card JSON input and wraps it in an attachment structure if valid.
 * The original card content remains unchanged inside the attachment wrapper.
 * @param input - The JSON string to validate
 * @returns Object containing validation result and wrapped card attachment if successful
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
