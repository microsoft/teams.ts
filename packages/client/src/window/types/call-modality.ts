/**
 * Modalities that can be associated with a call.
 */
export type CallModality = 'unknown' | 'audio' | 'video' | 'videoBasedScreenSharing' | 'data';

/**
 * Modalities that can be associated with a call.
 */
export enum CallModalities {
  /** Indicates that the modality is unknown or undefined. */
  Unknown = 'unknown',

  /** Indicates that the call includes audio. */
  Audio = 'audio',

  /** Indicates that the call includes video. */
  Video = 'video',

  /** Indicates that the call includes video-based screen sharing. */
  VideoBasedScreenSharing = 'videoBasedScreenSharing',

  /** Indicates that the call includes data sharing or messaging. */
  Data = 'data',
}
