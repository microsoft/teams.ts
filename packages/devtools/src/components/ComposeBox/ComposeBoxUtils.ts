import { Attachment } from '@microsoft/teams.api';

/**
 * Processes HTML content from ContentEditableArea to plain text
 */
export function processMessageContent(htmlContent: string): string {
  // Convert <br> and <div> to newlines for markdown
  const content = htmlContent
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<div>/gi, '\n')
    .replace(/<\/div>/gi, '')
    .replace(/&nbsp;/g, ' ');

  // Create a temporary div to strip HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  return tempDiv.textContent || '';
}

/**
 * Converts API attachments to UI attachment types
 */
export function convertAttachmentsForUI(attachments: Attachment[]) {
  return attachments.map((attachment) => {
    if (attachment.contentType?.startsWith('application/vnd.microsoft.card.')) {
      return {
        type: 'card' as const,
        content: attachment.content,
        name: attachment.name,
      };
    }
    if (attachment.contentType?.startsWith('image/')) {
      return {
        type: 'image' as const,
        content: attachment.contentUrl || attachment.content,
        name: attachment.name,
      };
    }
    return {
      type: 'file' as const,
      content: attachment.contentUrl || attachment.content,
      name: attachment.name,
    };
  });
}

/**
 * Processes a card and adds it to attachments if it doesn't already exist
 */
export function processCard(
  card: any,
  attachments: Attachment[],
  processedCards: Set<string>,
  onCardProcessed?: () => void
): Attachment[] {
  if (!card) return attachments;

  const cardStr = JSON.stringify(card);

  // Skip if already processed
  if (processedCards.has(cardStr)) {
    return attachments;
  }

  // Skip if attachment already exists
  if (attachments.some((a) => JSON.stringify(a.content) === cardStr)) {
    return attachments;
  }

  const newAttachment: Attachment = {
    contentType: 'application/vnd.microsoft.card.adaptive',
    content: card,
  };

  processedCards.add(cardStr);
  onCardProcessed?.();

  return [...attachments, newAttachment];
}
