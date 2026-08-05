import {
  Activity,
  Attachment,
  ConversationType,
  FILE_DOWNLOAD_INFO_CONTENT_TYPE,
  FileDownloadInfo,
  MessageActivity,
} from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { IncomingFile } from './incoming-file';
import { IFilesAccessor, IIncomingFile } from './types';

/**
 * Reads the files attached to the current inbound activity and exposes them as lazy {@link IncomingFile} handles. Wired onto the activity context as `ctx.files`.
 *
 * See {@link IFilesAccessor} for the public contract.
 */
export class FilesAccessor implements IFilesAccessor {
  constructor(
    private readonly activity: Activity,
    private readonly log: ILogger
  ) {}

  async list(): Promise<IIncomingFile[]> {
    // Uploaded files only ride on inbound message activities so we validate the shape and return an empty list rather than throwing.
    if (!(this.activity instanceof MessageActivity)) {
      return [];
    }

    const attachments = this.activity.attachments ?? [];
    const scope = this.detectScope();

    const files: IIncomingFile[] = [];

    attachments.forEach((attachment, index) => {
      const file = this.toIncomingFile(attachment, index, scope);

      if (file) {
        files.push(file);
      }
    });

    return files;
  }

  async first(): Promise<IIncomingFile | undefined> {
    const files = await this.list();
    return files[0];
  }

  /**
   * Derive the conversation scope from the inbound activity.
   */
  private detectScope(): ConversationType {
    return this.activity.conversation?.conversationType ?? 'personal';
  }

  /**
   * Map a single activity attachment to an {@link IncomingFile}, or `undefined` when the attachment is not an uploaded file or is malformed. Never throws: unusable attachments are skipped so one bad entry cannot drop the rest.
   */
  private toIncomingFile(
    attachment: Attachment,
    index: number,
    scope: ConversationType
  ): IncomingFile | undefined {
    // Not an uploaded file (card, mention, adaptive card, etc.). Silently ignored.
    if (attachment.contentType !== FILE_DOWNLOAD_INFO_CONTENT_TYPE) {
      return undefined;
    }

    const content: FileDownloadInfo | undefined = attachment.content;
    const downloadUrl = content?.downloadUrl;
    const name = attachment.name;

    // A `file.download.info` without fetchable URL or name cannot be turned into a usable handle. Skip it and leave a breadcrumb rather than throwing.
    if (!downloadUrl || !name) {
      this.log.debug(
        `files: skipping file.download.info attachment at index ${index}; missing ${!name ? 'name' : 'downloadUrl'}`
      );
      return undefined;
    }

    const uniqueId = content?.uniqueId;

    return new IncomingFile({
      uniqueId,
      name,
      // `fileType` is the platform-supplied extension (e.g. `pdf`); left `undefined` when the wire omits it, matching how peer SDKs surface it.
      extension: content?.fileType,
      scope,
      source: 'botActivity',
      // Maps the wire's `contentUrl` (a browsable link to the file in OneDrive/SharePoint) to `webUrl`; not fetchable like `downloadUrl`.
      webUrl: attachment.contentUrl,
      raw: attachment,
      downloadUrl,
    });
  }
}
