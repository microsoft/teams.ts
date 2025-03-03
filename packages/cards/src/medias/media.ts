import { BaseElement } from '../base';

/**
 * Displays a media player for audio or video content.
 */
export interface Media extends BaseElement {
  type: 'Media';

  /**
   * Array of media sources to attempt to play.
   */
  sources: MediaSource[];

  /**
   * URL of an image to display before playing. Supports data URI in version 1.2+. If poster is omitted, the Media element will either use a default poster (controlled by the host application) or will attempt to automatically pull the poster from the target video service when the source URL points to a video from a Web provider such as YouTube.
   */
  poster?: string;

  /**
   * Alternate text describing the audio or video.
   */
  altText?: string;

  /**
   * Array of captions sources for the media element to provide.
   */
  captionSources?: CaptionSource[];
}

export type MediaParams = Omit<Media, 'type' | 'sources'>;

/**
 * Displays a media player for audio or video content.
 */
export function Media(sources: MediaSource[] = [], params?: MediaParams): Media {
  return {
    type: 'Media',
    sources,
    ...params,
  };
}

/**
 * Defines a source for a Media element
 */
export interface MediaSource {
  /**
   * URL to media. Supports data URI in version 1.2+
   */
  url: string;

  /**
   * Mime type of associated media (e.g. "video/mp4"). For YouTube and other Web video URLs, mimeType can be omitted.
   */
  mimeType?: string;
}

export type MediaSourceParams = Omit<MediaSource, 'url'>;

/**
 * Defines a source for a Media element
 */
export function MediaSource(url: string, params?: MediaSourceParams): MediaSource {
  return {
    url,
    ...params,
  };
}

/**
 * Defines a source for captions
 */
export interface CaptionSource {
  /**
   * Label of this caption to show to the user.
   */
  label: string;

  /**
   * URL to captions.
   */
  url: string;

  /**
   * Mime type of associated caption file (e.g. "vtt"). For rendering in JavaScript, only "vtt" is supported, for rendering in UWP, "vtt" and "srt" are supported.
   */
  mimeType: string;
}

/**
 * Defines a source for captions
 */
export function CaptionSource(label: string, url: string, mimeType: string): CaptionSource {
  return {
    label,
    url,
    mimeType,
  };
}
