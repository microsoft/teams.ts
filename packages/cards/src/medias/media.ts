import { IElement, Element } from '../base';

/**
 * Displays a media player for audio or video content.
 */
export interface IMedia extends IElement {
  type: 'Media';

  /**
   * Array of media sources to attempt to play.
   */
  sources: IMediaSource[];

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
  captionSources?: ICaptionSource[];
}

export type MediaOptions = Omit<IMedia, 'type' | 'sources'>;

/**
 * Displays a media player for audio or video content.
 */
export class Media extends Element implements IMedia {
  type: 'Media';

  /**
   * Array of media sources to attempt to play.
   */
  sources: IMediaSource[];

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
  captionSources?: ICaptionSource[];

  constructor(...sources: IMediaSource[]) {
    super();
    this.type = 'Media';
    this.sources = sources;
  }

  static from(options: Omit<IMedia, 'type'>) {
    const media = new Media(...options.sources);
    Object.assign(media, options);
    return media;
  }

  withPoster(value: string) {
    this.poster = value;
    return this;
  }

  withAltText(value: string) {
    this.altText = value;
    return this;
  }

  addSources(...value: IMediaSource[]) {
    this.sources.push(...value);
    return this;
  }

  addCaptionSources(...value: ICaptionSource[]) {
    if (!this.captionSources) {
      this.captionSources = [];
    }

    this.captionSources.push(...value);
    return this;
  }
}

/**
 * Defines a source for a Media element
 */
export interface IMediaSource {
  /**
   * URL to media. Supports data URI in version 1.2+
   */
  url: string;

  /**
   * Mime type of associated media (e.g. "video/mp4"). For YouTube and other Web video URLs, mimeType can be omitted.
   */
  mimeType?: string;
}

/**
 * Defines a source for a Media element
 */
export class MediaSource implements IMediaSource {
  /**
   * URL to media. Supports data URI in version 1.2+
   */
  url: string;

  /**
   * Mime type of associated media (e.g. "video/mp4"). For YouTube and other Web video URLs, mimeType can be omitted.
   */
  mimeType?: string;

  constructor(url: string, mimeType?: string) {
    this.url = url;
    this.mimeType = mimeType;
  }

  withMimeType(value: string) {
    this.mimeType = value;
    return this;
  }
}

/**
 * Defines a source for captions
 */
export interface ICaptionSource {
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
export class CaptionSource implements ICaptionSource {
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

  constructor(label: string, url: string, mimeType: string) {
    this.label = label;
    this.url = url;
    this.mimeType = mimeType;
  }
}
