import {
  Activity,
  Attachment,
  ConversationType,
  FILE_DOWNLOAD_INFO_CONTENT_TYPE,
  FileDownloadInfo,
  MessageActivity,
} from '@microsoft/teams.api';
import { Client as HttpClient, ILogger } from '@microsoft/teams.common';

import { GraphCredential } from './download';
import { IncomingFile } from './incoming-file';
import { IFilesAccessor, IIncomingFile } from './types';

/** Narrow an unknown wire value to `string | undefined`, the shape every {@link FileDownloadInfo} field declares. */
function isOptionalString(value: unknown): value is string | undefined {
  return value === undefined || typeof value === 'string';
}

/**
 * Coerce an attachment's `content` into a {@link FileDownloadInfo}. `Attachment.content` is typed `any`, so without this the wire payload would be trusted unchecked and a wrong-typed `downloadUrl` would only surface later as a confusing failure at fetch time. Returns `undefined` for anything that is not an object or that carries a non-string where a string is required; unknown extra properties are ignored, matching how the peer SDKs deserialize this payload.
 */
function asFileDownloadInfo(content: unknown): FileDownloadInfo | undefined {
  if (typeof content !== 'object' || content === null) {
    return undefined;
  }

  const { downloadUrl, uniqueId, fileType } = content as Record<string, unknown>;

  if (!isOptionalString(downloadUrl) || !isOptionalString(uniqueId) || !isOptionalString(fileType)) {
    return undefined;
  }

  return { downloadUrl, uniqueId, fileType };
}

/**
 * Reads the files attached to the current inbound activity and exposes them as lazy {@link IncomingFile} handles. Wired onto the activity context as `ctx.files`.
 *
 * See {@link IFilesAccessor} for the public contract.
 */
export class FilesAccessor implements IFilesAccessor {
  constructor(
    private readonly activity: Activity,
    private readonly log: ILogger,
    /** The app's HTTP client, threaded into every {@link IncomingFile} so downloads go through the SDK's outbound pipeline rather than a bare `fetch`. */
    private readonly httpClient?: HttpClient,
    /** Graph credential for the current actor, resolved at fetch time. Absent when the app has no Graph route, in which case an expired URL cannot be recovered. */
    private readonly credential?: GraphCredential
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

    const content = asFileDownloadInfo(attachment.content);
    const downloadUrl = content?.downloadUrl;
    // Narrowed for the same reason `content` is shape-checked above: the wire is untrusted, and a truthy non-string here would pass the locator test and then throw inside the sharing-url encoder rather than being skipped.
    const contentUrl = typeof attachment.contentUrl === 'string' ? attachment.contentUrl : undefined;
    const name = attachment.name;

    // `downloadUrl` is fetched directly. A `contentUrl` without one is the Agentic User case and resolves through Graph, restricted to `personal` because agentic delivery in other scopes is unvalidated: surfacing a handle there will produce a `list()` entry that then fails at `download()`. The `downloadUrl` branch keeps its existing scope behaviour.
    const hasLocator = Boolean(downloadUrl || contentUrl);
    const canFetch = Boolean(downloadUrl) || (scope === 'personal' && Boolean(contentUrl));

    if (!canFetch || !name) {
      // Split by cause: a malformed attachment is a real defect, while an out-of-scope file is expected noise.
      if (!name || !hasLocator) {
        this.log.warn(
          `skipping file.download.info attachment at index ${index}; missing ${!name ? 'name' : 'a download or content URL'}`
        );
      } else {
        this.log.debug(
          `skipping file.download.info attachment at index ${index}; '${scope}' scope files are not fetchable yet`
        );
      }

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
      // Browsable link to the file in OneDrive/SharePoint. Not directly fetchable like `downloadUrl`, but it is the locator a Graph `/shares` resolution keys off.
      contentUrl,
      raw: attachment,
      downloadUrl,
      httpClient: this.httpClient,
      credential: this.credential,
      log: this.log,
    });
  }
}
