import { ConversationType } from '@microsoft/teams.api';

/**
 * Base class for the diagnosable failures on the inbound-file path: an expired URL, an unsupported scope, a missing Graph credential, and a refused Graph read.
 *
 * Lets a caller catch those with one `instanceof` check, so a new one can be added without callers changing. A transport or service failure the SDK cannot attribute, such as a Graph 5xx, is not one of these and surfaces as a plain `Error`.
 */
export class FileError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileError';
  }
}

/**
 * The identity a file fetch was attempted as. Reported on {@link FileCredentialError} and {@link FileAccessError} so a failure names who was refused, not merely that something was.
 */
export type FileActor = 'app' | 'agenticUser';

/**
 * Raised when an inbound file's short-lived download URL has expired and can no longer fetch bytes.
 *
 * A personal file's pre-authorized `tempauth` download URL is valid only briefly. A fetch after it lapses gets a `401`/`403` from the platform. A handler that downloads once (and does not keep the handle) should not hit this. `reason` distinguishes the two cases:
 * - `firstFetch`: the first fetch came after the URL lapsed, so no bytes were retrieved. There is no recovery: the URL carried its own credential, and the SDK does not fall back to Graph with an app identity. The file has to be sent again.
 * - `reread`: edge case. An earlier download succeeded, then a later re-fetch through the same handle lapsed. Avoid it by calling `download()` once and reusing the returned `DownloadedFile` rather than re-reading the handle.
 */
export class FileUrlExpiredError extends FileError {
  /** Lets callers branch without string-matching the message. 
   * `firstFetch`: no bytes were ever fetched. `reread`: the uncommon case, a previously successful handle re-fetched too late. */
  readonly reason: 'firstFetch' | 'reread';

  constructor(reason: 'firstFetch' | 'reread', message?: string) {
    super(
      message ??
        (reason === 'firstFetch'
          ? 'file download URL expired before any bytes were fetched. The URL is short-lived and cannot be renewed, so the file has to be sent again. Download on arrival rather than holding the handle.'
          : 'file download URL expired before a repeat read; reuse a single DownloadedFile from one download() call instead of re-reading the handle')
    );
    this.name = 'FileUrlExpiredError';
    this.reason = reason;
  }
}

/**
 * Raised when file bytes are requested for a conversation scope whose download path is not implemented.
 *
 * Only `personal` (1:1) uploaded files download directly. `groupChat` files are surfaced by `list()`, but fetching their bytes needs Graph; `download()`/`stream()` throws until that path lands.
 */
export class FileScopeNotSupportedError extends FileError {
  /** The conversation scope that is not yet fetchable. */
  readonly scope: ConversationType;

  constructor(scope: ConversationType, message?: string) {
    super(message ?? `downloading files from '${scope}' conversations is not supported via SDK at this time`);
    this.name = 'FileScopeNotSupportedError';
    this.scope = scope;
  }
}

/**
 * Raised when no credential was available for the Graph call. Detectable before any HTTP request.
 *
 * Distinct from {@link FileUrlExpiredError}, which means a pre-authorized URL lapsed and cannot be renewed. This means the Graph route was ruled out before the request, because no usable credential was available: either a token could not be acquired, or the one acquired carries no file-capable permission.
 */
export class FileCredentialError extends FileError {
  /** The identity the fetch was attempted as, when one was selected. Absent when the failure preceded credential selection. */
  readonly actor?: FileActor;
  /**
   * What went wrong while acquiring the token, when the attempt failed rather than simply returning nothing.
   *
   * An acquisition that threw and an identity with no permissions both arrive here as "no token", but the fixes differ: one is a transient or configuration fault, the other is a consent problem. Local to this process; contrast {@link FileAccessError.details}, which is the service's own words.
   */
  readonly cause?: string;

  constructor(actor?: FileActor, cause?: string) {
    const base = `cannot fetch file bytes through Graph: ${noCredentialGuidance(actor)}`;
    super(cause ? `${base} (${cause})` : base);
    this.name = 'FileCredentialError';
    this.actor = actor;
    this.cause = cause;
  }
}

/**
 * Raised when the identity used was refused by the storage service.
 *
 * Distinct from {@link FileUrlExpiredError}, which means a pre-authorized URL lapsed and cannot be renewed. This means the Graph route was the one that failed, refused by the service after the request was made.
 */
export class FileAccessError extends FileError {
  /** Lets callers branch without string-matching the message. `401` means the token itself was rejected; `403` means the identity lacks the grant, and the two have different remedies. */
  readonly status: number;
  /** The identity the fetch was attempted as, when one was selected. Absent when the failure preceded credential selection. */
  readonly actor?: FileActor;
  /**
   * What the storage service itself said, verbatim and truncated, when it said anything.
   *
   * A `403` covers an unconsented scope, a file the identity was never granted, and a drive item that does not exist, which are indistinguishable on the wire: Graph answers all three with `403`, because telling an unauthorized caller whether a resource exists would disclose it. That collapse is right for branching and wrong for diagnosis, so the original text is kept here rather than discarded.
   */
  readonly details?: string;

  constructor(status: number, actor?: FileActor, details?: string) {
    const base = `cannot fetch file bytes through Graph: ${accessGuidance(status, actor)}`;
    super(details ? `${base} (service said: ${details})` : base);
    this.name = 'FileAccessError';
    this.status = status;
    this.actor = actor;
    this.details = details;
  }
}

/**
 * Names the identity in prose. Exhaustive on purpose: a new {@link FileActor} must fail the build here rather than silently inherit the app's wording, which would send that identity's failures to the wrong remedy.
 */
function describeActor(actor: FileActor): string {
  switch (actor) {
    case 'agenticUser':
      return 'the agentic user';
    case 'app':
      return 'the app';
  }
}

/** Where to go to fix a missing credential, which differs per identity. Exhaustive for the same reason. */
function noCredentialGuidance(actor?: FileActor): string {
  switch (actor) {
    case 'agenticUser':
      // Linked rather than described because the agent permission model is still moving, and stale instructions in an error message are worse than none.
      return 'the agentic user has no usable Graph permissions. An agent identity gets Graph scopes from its blueprint\'s inheritable permissions or from a direct grant, and an administrator must consent to them. See https://learn.microsoft.com/entra/agent-id/concept-inheritable-permissions';
    case 'app':
      // Graph file reads happen as the agentic user. Granting the app file permissions would make this succeed, which is why the message says it may be used rather than that it cannot.
      return 'the app has no usable Graph credential for this file. Graph file retrieval is supported for Agentic Users, which read as their own identity; an app identity and/or user-delegated permissions may be used but are not supported via the SDK at this time';
    default:
      // No identity was selected, so neither remedy above applies and naming one would send the reader somewhere wrong.
      return 'no Graph credential was available, and no identity had been selected when the attempt was made';
  }
}

/** What a refusal means, which depends on the status: a rejected token and an insufficient grant have different remedies. */
function accessGuidance(status: number, actor?: FileActor): string {
  const as = actor ? describeActor(actor) : 'the identity used';

  if (status === 401) {
    return `the token presented for ${as} was rejected. It may have expired, or been issued for the wrong audience or tenant`;
  }

  if (status === 403) {
    return `access was denied for ${as}. The required scope may not be consented, the file may never have been shared with that identity, or the drive item may not exist`;
  }

  return `the request for ${as} was refused with status ${status}`;
}
