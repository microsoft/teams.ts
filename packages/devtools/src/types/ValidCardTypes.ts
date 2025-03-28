import { CardAttachmentType } from '@microsoft/spark.api';

export const VALID_CARD_TYPES = [
  'adaptive',
  'animation',
  'audio',
  'hero',
  'oauth',
  'signin',
  'thumbnail',
  'video',
] as const satisfies readonly CardAttachmentType[];
