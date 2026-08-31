import { ConversationType } from '@microsoft/teams.api';

/**
 * Where the SDK found an inbound file.
 * - `botActivity` files come straight from the inbound activity's attachments;
 * - `graph` files are hydrated through Microsoft Graph.
 */
export type FileSource = 'botActivity' | 'graph';

/**
 * A buffered, point-in-time snapshot of a downloaded file's bytes that the caller owns.
 *
 * Returned by {@link IIncomingFile.download}. The bytes are already in memory, so the convenience readers here are synchronous and never re-download.
 * Because it is a snapshot, holding one and reusing it is the way to read the same file several ways without re-fetching through the live {@link IIncomingFile} handle.
 */
export interface IDownloadedFile {
  /** The file bytes, buffered from `stream()` read to completion. */
  bytes: Uint8Array;
  /** MIME type resolved from the download response header, or the incoming file's metadata type if the response omits one. Falls back to `application/octet-stream` when neither provides a type, so this is never empty. */
  contentType: string;
  /** Resolved filename. */
  filename: string;
  /** The URL the bytes were actually fetched from. */
  sourceUrl: string;

  /** Decode bytes as UTF-8 (or a provided encoding). No content-type check.
   * Lossy: invalid bytes become the U+FFFD replacement character and never throw.
   * For strict or binary-safe reads, use `bytes`/`arrayBuffer()`. */
  text(encoding?: string): string;
  /** Return the bytes as an `ArrayBuffer`. Synchronous; no re-download. */
  arrayBuffer(): ArrayBuffer;
  /** Write the already-buffered bytes to a local file path (no re-fetch, unlike {@link IIncomingFile.saveAs} which streams a fresh download).
   * Requires Node: it writes to the local filesystem, which is unavailable in the browser. */
  saveAs(path: string): Promise<void>;
}

/**
 * A lazy handle to a file attached to the current inbound activity.
 *
 * Nothing is downloaded until a byte method is called. The handle stays live and holds no memoized bytes, so each of `stream()`/`download()`/`text()`/`arrayBuffer()`/`saveAs()` fetches afresh. For a personal file that re-fetch is bounded by the short-lived download URL lifetime and may hit its expiry; to read the same file several ways, call {@link download} once and reuse the returned {@link IDownloadedFile}.
 */
export interface IIncomingFile {
  /** The OneDrive/ODSP drive-item id when the platform reports it (`content.uniqueId`); the storage-specific locator a Graph fetch keys off. Present only when the wire provided it. */
  uniqueId?: string;
  /** Display name including extension when known. */
  name: string;
  /**
   * The file's MIME type when the source provides one. Always unset for `botActivity` files: a `file.download.info` attachment carries no MIME type, only the `fileType` extension surfaced as {@link extension}. Populated for sources that do carry one, such as a `graph` drive item. To learn the type of the bytes you actually received, read {@link IDownloadedFile.contentType}, which is resolved from the download response.
   */
  contentType?: string;
  /** File extension without the dot (e.g. `pdf`), taken from the platform-supplied `fileType`. Absent when the wire omits it. */
  extension?: string;
  /** Conversation scope the file arrived in (the SDK's {@link ConversationType}). */
  scope: ConversationType;
  /** Where the SDK found the file. Only `botActivity` is produced today. */
  source: FileSource;
  /**
   * Browsable URL to the file in OneDrive/SharePoint, as sent on the attachment's `contentUrl`.
   *
   * Not fetchable for bytes despite the name; those come from {@link IIncomingFile.download} or {@link IIncomingFile.stream}.
   */
  contentUrl?: string;
  /** The raw underlying attachment/graph object for escape-hatch access. */
  raw?: unknown;

  /** Stream the bytes. Low-level primitive: returns the native stream directly from the fetch, single-consumption, not buffered or retained. Use for large files and pipelines (parse-as-you-go, pipe to disk). `download()` is built on this. Uncapped: the consumer bounds it by how much it reads. */
  stream(): Promise<ReadableStream<Uint8Array>>;

  /** Fetch the whole file and buffer it into a {@link IDownloadedFile} snapshot you own. Lazy and not memoized: calling again re-fetches. If you already hold a `DownloadedFile`, call its `saveAs()` rather than this handle's, which would re-fetch. */
  download(): Promise<IDownloadedFile>;

  /** Convenience: run `download()` then decode the bytes as UTF-8 (or a provided encoding). Re-fetches on each call (no memoized bytes); to read bytes several ways hold one `DownloadedFile` instead. No content-type check; decoding is lossy (invalid bytes become U+FFFD and never throw). For strict or binary-safe reads, use `download().bytes`/`arrayBuffer()`. */
  text(encoding?: string): Promise<string>;
  /** Convenience: run `download()` then return the bytes as an `ArrayBuffer`. Re-fetches on each call. */
  arrayBuffer(): Promise<ArrayBuffer>;
  /** Stream the bytes straight to a local file path, so saving a large file never materializes it in memory. Requires Node: it writes to the local filesystem, which is unavailable in the browser. */
  saveAs(path: string): Promise<void>;
}

/**
 * Accessor for the uploaded files on the current inbound activity, exposed as `ctx.files`.
 *
 * "Files" is the uploaded-file view over the raw `ctx.activity.attachments` array. Uploaded files arrive as attachments where `contentType` is `file.download.info`, carrying file metadata (a `downloadUrl` plus identifiers) rather than the bytes themselves, which are fetched from that URL. This accessor maps each to an {@link IIncomingFile}, and skips everything else in `attachments` (adaptive cards, mentions, other non-file content) as well as malformed file entries, never throwing. For each file it returns, the original wire attachment (the metadata object, not the bytes) is retained on {@link IIncomingFile.raw}. A malformed or non-file attachment is reachable only through the raw `activity.attachments` array.
 *
 * This covers the file-upload path, not "any uploaded media". What matters is how the content arrived, not the file's MIME type, so file *type* is unrestricted (pdf, docx, png, etc.) as long as it was sent as an uploaded file. An image sent as a file appears here, but the same image pasted inline does not.
 */
export interface IFilesAccessor {
  /**
   * The files attached to the current inbound activity. Async because later scopes hydrate through Graph; the personal path resolves synchronously from the activity but keeps the async signature so the shape never breaks.
   *
   * Currently takes no arguments and returns only uploaded files. The signature is reserved to grow an options object later (e.g. `list(options?: { includeInlineImages?; contentTypes?; includeRaw? })`) so coverage can widen opt-in without a break; the default stays narrow.
   */
  list(): Promise<IIncomingFile[]>;

  /** Convenience: the first attached file, or `undefined` when none. Sugar over `list()[0]`; shares `list()`'s resolution so it stays correct when later scopes hydrate through Graph. */
  first(): Promise<IIncomingFile | undefined>;
}
