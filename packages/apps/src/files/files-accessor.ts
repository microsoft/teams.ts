import {
  Activity,
  Attachment,
  ConversationType,
  FILE_DOWNLOAD_INFO_CONTENT_TYPE,
  FileDownloadInfo,
  MessageActivity,
} from '@microsoft/teams.api';
import { Client as HttpClient, ILogger } from '@microsoft/teams.common';

import { BotApiCredential, GraphCredential, isGraphRouteOpen, isUnderServiceUrl } from './download';
import { IncomingFile } from './incoming-file';
import {
  formatFromContentType,
  formatFromHint,
  inlineImageId,
  inlineImageNaming,
  parseInlineImageHints,
} from './inline-image';
import { IFileListOptions, IFilesAccessor, IIncomingFile } from './types';

/** Narrow an unknown wire value to `string | undefined`, the shape every {@link FileDownloadInfo} field declares. */
function isOptionalString(value: unknown): value is string | undefined {
  return value === undefined || typeof value === 'string';
}

/**
 * Coerce an attachment's `content` into a {@link FileDownloadInfo}. `Attachment.content` is typed `any`, so without this the wire payload would be trusted unchecked and a wrong-typed `downloadUrl` would only surface later as a confusing failure at fetch time. Returns `undefined` for anything that is not an object; a non-string field is dropped on its own rather than discarding the object, so a wrong-typed `fileType` cannot take a usable `downloadUrl` with it. Unknown extra properties are ignored, matching how the peer SDKs deserialize this payload.
 */
function asFileDownloadInfo(content: unknown): FileDownloadInfo | undefined {
  if (typeof content !== 'object' || content === null) {
    return undefined;
  }

  const { downloadUrl, uniqueId, fileType } = content as Record<string, unknown>;

  // Narrowed per field. `uniqueId` and `fileType` are metadata, so rejecting the whole object over one of them would drop a usable `downloadUrl` and route a traditional bot's file through Graph, which then fails reporting a consent problem that was never the cause.
  return {
    downloadUrl: isOptionalString(downloadUrl) ? downloadUrl : undefined,
    uniqueId: isOptionalString(uniqueId) ? uniqueId : undefined,
    fileType: isOptionalString(fileType) ? fileType : undefined,
  };
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
    private readonly credential?: GraphCredential,
    /** Bot API credential for reading inline images, resolved at fetch time. */
    private readonly botApiCredential?: BotApiCredential
  ) {}

  async list(options?: IFileListOptions): Promise<IIncomingFile[]> {
    // Uploaded files only ride on inbound message activities so we validate the shape and return an empty list rather than throwing.
    if (!(this.activity instanceof MessageActivity)) {
      return [];
    }

    const attachments = this.activity.attachments ?? [];
    const scope = this.detectScope();
    const hints = options?.attachmentStyle === 'file' ? new Map<string, string>() : this.inlineImageHints(attachments);

    const files: IIncomingFile[] = [];

    attachments.forEach((attachment, index) => {
      const imageId = this.inlineImageId(attachment);

      // Checked before mapping, so an attachment of the excluded style is never mapped and never logs a warning.
      if (options?.attachmentStyle && options.attachmentStyle !== (imageId === undefined ? 'file' : 'inlineImage')) {
        return;
      }

      const file =
        imageId === undefined
          ? this.toIncomingFile(attachment, index, scope)
          : this.toInlineImage(attachment, imageId, index, scope, hints);

      if (file) {
        files.push(file);
      }
    });

    return files;
  }

  async first(options?: IFileListOptions): Promise<IIncomingFile | undefined> {
    const files = await this.list(options);
    return files[0];
  }

  /**
   * Derive the conversation scope from the inbound activity.
   */
  private detectScope(): ConversationType {
    return this.activity.conversation?.conversationType ?? 'personal';
  }

  /**
   * Format hints for inline images, keyed by attachment id, read from the message's HTML attachments.
   */
  private inlineImageHints(attachments: Attachment[]): Map<string, string> {
    const hints = new Map<string, string>();

    for (const attachment of attachments) {
      if (attachment.contentType === 'text/html' && typeof attachment.content === 'string') {
        parseInlineImageHints(attachment.content).forEach((hint, id) => hints.set(id, hint));
      }
    }

    return hints;
  }

  /**
   * The inline image id when an attachment is an image pasted inline (an `image/*` attachment located at a Bot API inline image path), otherwise `undefined`.
   */
  private inlineImageId(attachment: Attachment): string | undefined {
    if (typeof attachment.contentType !== 'string' || !/^image\//i.test(attachment.contentType)) {
      return undefined;
    }

    if (typeof attachment.contentUrl !== 'string') {
      return undefined;
    }

    return inlineImageId(attachment.contentUrl);
  }

  /**
   * Map an inline image attachment to an {@link IncomingFile}, or `undefined` when its location is not on the activity's service URL.
   */
  private toInlineImage(
    attachment: Attachment,
    id: string,
    index: number,
    scope: ConversationType,
    hints: Map<string, string>
  ): IncomingFile | undefined {
    const contentUrl = attachment.contentUrl as string;

    if (!this.isOnServiceUrl(contentUrl)) {
      this.log.warn(
        `skipping inline image attachment at index ${index}; its location is not on the activity's service URL`
      );
      return undefined;
    }

    // Typed from the HTML format hint, or from the attachment's content type when there is no hint.
    const hint = hints.get(id);
    const format = hint !== undefined ? formatFromHint(hint) : formatFromContentType(attachment.contentType);
    const baseName = `image-${id}`;
    const { name, extension, contentType } = inlineImageNaming(baseName, format);

    return new IncomingFile({
      name,
      contentType,
      extension,
      scope,
      source: 'botActivity',
      attachmentStyle: 'inlineImage',
      contentUrl,
      raw: attachment,
      inlineImageBaseName: baseName,
      httpClient: this.httpClient,
      botApiCredential: this.botApiCredential,
      log: this.log,
    });
  }

  /**
   * Whether a URL is under the activity's service URL over https.
   * The download path applies the same check through {@link BotApiCredential.serviceUrl}, while this one lets listing skip and warn.
   */
  private isOnServiceUrl(url: string): boolean {
    return isUnderServiceUrl(url, this.activity.serviceUrl);
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

    // The Agentic User shape: `content` that parsed and declares no `downloadUrl` at all. Content that failed to parse, or that declares a `downloadUrl` too malformed to use, is a broken attachment rather than an agentic one. Both are excluded from the Graph route because both were skipped before it existed, and resolving one would spend a Graph credential on a payload the SDK has already judged untrustworthy.
    const declaresDownloadUrl =
      typeof attachment.content === 'object' && attachment.content !== null && 'downloadUrl' in attachment.content;
    const isAgenticShape = content !== undefined && !declaresDownloadUrl;

    // `downloadUrl` is fetched directly. A `contentUrl` without one is the agentic user case and resolves through Graph, only where `isGraphRouteOpen` allows: the dispatcher applies the same check, so a handle surfaced here cannot then fail at `download()` on scope. The `downloadUrl` branch keeps its existing scope behaviour.
    const hasLocator = Boolean(downloadUrl || contentUrl);
    const canFetch =
      Boolean(downloadUrl) ||
      (isGraphRouteOpen(scope, this.credential?.actor) && isAgenticShape && Boolean(contentUrl));

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
      attachmentStyle: 'file',
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
