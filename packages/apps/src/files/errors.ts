import { ConversationType } from '@microsoft/teams.api';

/**
 * Raised when an inbound file's short-lived download URL has expired and can no longer fetch bytes.
 *
 * A personal file's pre-authorized `tempauth` download URL is valid only briefly. 
 * A fetch after it lapses gets a `401`/`403` from the platform. A handler that downloads once (and does not keep the handle) should not hit this.
 * `reason` distinguishes the two cases:
 * - `firstFetch`: the first fetch came after the URL lapsed, so no bytes were retrieved. Recovery needs Graph drive-item re-resolution, not available via the SDK at this time.
 * - `reread`: edge case. An earlier download succeeded, then a later re-fetch through the same handle lapsed. Avoid it by calling `download()` once and reusing the returned `DownloadedFile` rather than re-reading the handle.
 */
export class FileUrlExpiredError extends Error {
  /** Lets callers branch without string-matching the message. 
   * `firstFetch`: no bytes were ever fetched. 
   * `reread`: the uncommon case, a previously successful handle re-fetched too late. */
  readonly reason: 'firstFetch' | 'reread';

  constructor(reason: 'firstFetch' | 'reread', message?: string) {
    super(
      message ??
        (reason === 'firstFetch'
          ? 'file download URL expired before any bytes were fetched; recovery needs Graph drive-item re-resolution (not available via the SDK at this time)'
          : 'file download URL expired before a repeat read; reuse a single DownloadedFile from one download() call instead of re-reading the handle')
    );
    this.name = 'FileUrlExpiredError';
    this.reason = reason;
  }
}

/**
 * Raised when file bytes are requested for a conversation scope whose download path is not implemented.
 *
 * Only `personal` (1:1) uploaded files download directly. 
 * `groupChat` and `channel` files are surfaced by `list()`, but fetching their bytes needs Graph; `download()`/`stream()` throws until that path lands.
 */
export class FileScopeNotSupportedError extends Error {
  /** The conversation scope that is not yet fetchable. */
  readonly scope: ConversationType;

  constructor(scope: ConversationType, message?: string) {
    super(message ?? `downloading files from '${scope}' conversations is not supported via SDK at this time`);
    this.name = 'FileScopeNotSupportedError';
    this.scope = scope;
  }
}
