import { ConversationType } from '@microsoft/teams.api';

/**
 * Where the SDK found an inbound file.
 * - `botActivity` files come straight from the inbound activity's attachments;
 * - `graph` files are hydrated through Microsoft Graph.
 */
export type FileSource = 'botActivity' | 'graph';

/**
 * How a file was attached to the inbound message.
 * - `file`: sent as a file attachment
 * - `inlineImage`: pasted into the message body
 *
 * Some image formats, such as BMP and AVIF, cannot be converted by the platform, so Teams shows a placeholder, and they cannot be downloaded.
 * The same image sent as a file attachment downloads normally.
 */
export type AttachmentStyle = 'file' | 'inlineImage';

/**
 * A buffered, point-in-time snapshot of a downloaded file's bytes that the caller owns.
 *
 * Returned by {@link IIncomingFile.download}. The bytes are already in memory, so the convenience readers here are synchronous and never re-download. Because it is a snapshot, holding one and reusing it is the way to read the same file several ways without re-fetching through the live {@link IIncomingFile} handle.
 */
export interface IDownloadedFile {
  /** The file bytes, buffered from `stream()` read to completion. */
  bytes: Uint8Array;
  /**
   * MIME type resolved from the download response header, or the incoming file's metadata type if the response omits one.
   * Falls back to `application/octet-stream` when neither provides a type, so this is never empty.
   * For an inline image, the response header is ignored and the type is detected from the bytes.
   * If the bytes are not PNG, JPEG, GIF, or WebP, it falls back to {@link IIncomingFile.contentType}.
   */
  contentType: string;
  /**
   * Resolved filename.
   * For an inline image, the extension follows {@link contentType}, meaning the filename can differ from {@link IIncomingFile.name}.
   * For an uploaded file, the name comes from the sender and can contain path separators, so reduce it to its last segment (for example with `path.win32.basename`) before using it in a local path.
   */
  filename: string;
  /** The URL the bytes were actually fetched from. */
  sourceUrl: string;

  /** Decode bytes as UTF-8 (or a provided encoding). No content-type check.
   * Lossy: invalid bytes become the U+FFFD replacement character and never throw. For strict or binary-safe reads, use `bytes`/`arrayBuffer()`. */
  text(encoding?: string): string;
  /** Return the bytes as an `ArrayBuffer`. Synchronous; no re-download. */
  arrayBuffer(): ArrayBuffer;
  /** Write the already-buffered bytes to a local file path (no re-fetch, unlike {@link IIncomingFile.saveAs} which streams a fresh download).
   * Requires Node: it writes to the local filesystem, which is unavailable in the browser. */
  saveAs(path: string, options?: IFileReadOptions): Promise<void>;
}

/**
 * Options accepted by the byte-reading methods on {@link IIncomingFile}, and by {@link IDownloadedFile.saveAs}.
 */
export interface IFileReadOptions {
  /**
   * Cancels the read. Aborts the in-flight request and, for {@link IIncomingFile.saveAs}, stops the write loop rather than letting an already-open download run to completion.
   *
   * Worth passing on any read a caller might want to bound: a fetch is a network call against storage the SDK does not control, and may make more than one request.
   */
  signal?: AbortSignal;
}

/**
 * A lazy handle to a file attached to the current inbound activity.
 *
 * Nothing is downloaded until a byte method is called. The handle stays live and holds no memoized bytes, so each of `stream()`/`download()`/`text()`/`arrayBuffer()`/`saveAs()` fetches afresh. For a personal file that re-fetch is bounded by the short-lived download URL lifetime and may hit its expiry; to read the same file several ways, call {@link download} once and reuse the returned {@link IDownloadedFile}.
 */
export interface IIncomingFile {
  /**
   * The ODSP/OneDrive identifier for the file when the platform reports it (`content.uniqueId`). Useful for correlation, dedup and logging, but not for retrieval: the Graph fetch resolves bytes from `contentUrl` through `/shares`, and this value arrives as a GUID, which is a SharePoint `listItemUniqueId` shape rather than a Graph `driveItem.id`. Present only when the wire provided it.
   * Always unset for inline images, which are not stored in OneDrive or SharePoint.
   */
  uniqueId?: string;
  /**
   * Display name including extension when known.
   * An inline image has no name, so it is named `image-<attachment id>`.
   * An extension is added only for PNG, JPEG, GIF, or WebP.
   * Teams saves a pasted GIF as a static PNG, so the SDK cannot name or type it with confidence: it is listed as `.gif` and `image/gif` but downloads as a PNG.
   */
  name: string;
  /**
   * The file's MIME type when the source provides one. Always unset for `botActivity` file attachments: a `file.download.info` attachment carries no MIME type, only the `fileType` extension surfaced as {@link extension}. Populated for sources that do carry one, such as a `graph` drive item. To learn the type of the bytes you actually received, read {@link IDownloadedFile.contentType}, which is resolved from the download response.
   *
   * For an inline image, it is the type named by the format hint when that is PNG, JPEG, GIF, or WebP, otherwise `application/octet-stream`.
   * Teams saves a pasted GIF as a static PNG, so the SDK cannot name or type it with confidence: it is listed as `.gif` and `image/gif` but downloads as a PNG.
   */
  contentType?: string;
  /**
   * File extension without the dot (e.g. `pdf`), taken from the platform-supplied `fileType`. Absent when the wire omits it.
   * For an inline image, it is taken from {@link name} and is absent when the name has none.
   */
  extension?: string;
  /** Conversation scope the file arrived in (the SDK's {@link ConversationType}). */
  scope: ConversationType;
  /** Where the SDK found the file. Only `botActivity` is produced today. */
  source: FileSource;
  /**
   * How the file was attached: sent as a file, or pasted inline as an image.
   * See {@link AttachmentStyle}.
   */
  attachmentStyle: AttachmentStyle;
  /**
   * Browsable URL to the file in OneDrive/SharePoint, as sent on the attachment's `contentUrl`.
   *
   * Not fetchable for bytes despite the name; those come from {@link IIncomingFile.download} or {@link IIncomingFile.stream}.
   * For an inline image, it is the image's Bot API location instead.
   */
  contentUrl?: string;
  /**
   * The raw underlying attachment/graph object for escape-hatch access.
   * For an inline image, only the image attachment is included; the HTML attachment that supplies its format hint stays in `ctx.activity.attachments`.
   */
  raw?: unknown;

  /** Stream the bytes. Low-level primitive: returns the native stream directly from the fetch, single-consumption, not buffered or retained. Use for large files and pipelines (parse-as-you-go, pipe to disk). `download()` is built on this. Uncapped: the consumer bounds it by how much it reads. */
  stream(options?: IFileReadOptions): Promise<ReadableStream<Uint8Array>>;

  /** Fetch the whole file and buffer it into a {@link IDownloadedFile} snapshot you own. Lazy and not memoized: calling again re-fetches. If you already hold a `DownloadedFile`, call its `saveAs()` rather than this handle's, which would re-fetch. */
  download(options?: IFileReadOptions): Promise<IDownloadedFile>;

  /** Convenience: run `download()` then decode the bytes as UTF-8 (or a provided encoding). Re-fetches on each call (no memoized bytes); to read bytes several ways hold one `DownloadedFile` instead. No content-type check; decoding is lossy (invalid bytes become U+FFFD and never throw). For strict or binary-safe reads, use `download().bytes`/`arrayBuffer()`. */
  text(encoding?: string, options?: IFileReadOptions): Promise<string>;
  /** Convenience: run `download()` then return the bytes as an `ArrayBuffer`. Re-fetches on each call. */
  arrayBuffer(options?: IFileReadOptions): Promise<ArrayBuffer>;
  /** Stream the bytes straight to a local file path, so saving a large file never materializes it in memory. Requires Node: it writes to the local filesystem, which is unavailable in the browser. */
  saveAs(path: string, options?: IFileReadOptions): Promise<void>;
}

/**
 * Accessor for the uploaded files and inline images on the current inbound activity, exposed as `ctx.files`.
 * "Files" is a filter over the raw `ctx.activity.attachments` array.
 *
 * - Uploaded files arrive with `contentType` set to `file.download.info` and file metadata rather than the attachment's bytes themselves.
 * The metadata names where the bytes live: a pre-authorized `downloadUrl` when issued, otherwise a `contentUrl` resolvable by Graph.
 * What matters is how the content arrived, not its MIME type, so any file type (pdf, docx, png, etc.) sent as an uploaded file is listed.
 *
 * - Images pasted inline into the message are included, with {@link IIncomingFile.attachmentStyle} set to `inlineImage`.
 * An inline image not hosted on the activity's service URL is skipped with a warning.
 * See {@link AttachmentStyle} for image formats that cannot be downloaded.
 *
 * This accessor maps each listed attachment to an {@link IIncomingFile}, and skips other `attachments` content (adaptive cards, mentions, etc.) and malformed file entries, never throwing.
 * For each file returned, the original wire attachment (metadata) is retained on {@link IIncomingFile.raw}.
 * A malformed or non-file attachment is reachable only through the raw `activity.attachments` array.
 */
export interface IFilesAccessor {
  /**
   * The files attached to the current inbound activity. Async because later scopes hydrate through Graph; the personal path resolves synchronously from the activity but keeps the async signature so the shape never breaks.
   *
   * Returns uploaded files and inline images, and makes no network requests.
   * Filter by attachment style using the {@link IFileListOptions.attachmentStyle} option.
   */
  list(options?: IFileListOptions): Promise<IIncomingFile[]>;

  /**
   * Convenience: the first listed file/inline image, or `undefined` when none. Sugar over `list()[0]`; shares `list()`'s resolution so it stays correct when later scopes hydrate through Graph.
   * Filter by attachment style using the {@link IFileListOptions.attachmentStyle} option.
   */
  first(options?: IFileListOptions): Promise<IIncomingFile | undefined>;
}

/**
 * Options accepted by {@link IFilesAccessor.list} and {@link IFilesAccessor.first}.
 */
export interface IFileListOptions {
  /**
   * When set, only files with this style are returned.
   * When omitted, both styles are returned.
   */
  attachmentStyle?: AttachmentStyle;
}
