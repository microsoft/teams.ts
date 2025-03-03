import { ClientError } from '../client-error';
import { File } from '../types';
import { WindowClient } from '../window-client';

/**
 * The modes in which camera can be launched in select Media API
 */
export enum CameraStartMode {
  /** Photo mode. */
  Photo = 1,

  /** Document mode. */
  Document = 2,

  /** Whiteboard mode. */
  Whiteboard = 3,

  /** Business card mode. */
  BusinessCard = 4,
}

/**
 * Specifies the image source
 */
export enum Source {
  /** Image source is camera. */
  Camera = 1,

  /** Image source is gallery. */
  Gallery = 2,
}

/**
 * Specifies the type of Media
 */
export enum MediaType {
  /** Media type photo or image */
  Image = 1,

  /** Media type video. */
  Video = 2,

  /** Media type video and image. */
  VideoAndImage = 3,

  /** Media type audio. */
  Audio = 4,
}

/**
 * Specifies the image output formats.
 */
export enum ImageOutputFormats {
  /** Outputs image.  */
  IMAGE = 1,

  /** Outputs pdf. */
  PDF = 2,
}

/**
 * Input for view images API
 */
export interface ImageUri {
  /** Image location */
  value: string;

  /** Image Uri type */
  type: ImageUriType;
}

/**
 * ID contains a mapping for content uri on platform's side, URL is generic
 */
export enum ImageUriType {
  /** Image Id. */
  ID = 1,

  /** Image URL. */
  URL = 2,
}

/**
 * Input parameter supplied to the select Media API
 */
export interface MediaInputs {
  /**
   * Only one media type can be selected at a time
   */
  mediaType: MediaType;

  /**
   * max limit of media allowed to be selected in one go, current max limit is 10 set by office lens.
   */
  maxMediaCount: number;

  /**
   * Additional properties for customization of select media - Image in mobile devices
   */
  imageProps?: ImageProps;

  /**
   * Additional properties for customization of select media - Video in mobile devices
   */
  videoProps?: VideoProps;

  /**
   * Additional properties for customization of select media - VideoAndImage in mobile devices
   */
  videoAndImageProps?: VideoAndImageProps;

  /**
   * Additional properties for audio capture flows.
   */
  audioProps?: AudioProps;
}

/**
 * @hidden
 * Hide from docs
 * --------
 * All properties common to Image and Video Props
 */
interface MediaProps {
  /**
   * Optional; Lets the developer specify the media source, more than one can be specified.
   * Default value is both camera and gallery
   */
  sources?: Source[];

  /**
   * Optional; Specify in which mode the camera will be opened.
   * Default value is Photo
   */
  startMode?: CameraStartMode;

  /**
   * Optional; indicate if user is allowed to move between front and back camera
   * Default value is true
   */
  cameraSwitcher?: boolean;
}

/**
 *  All properties in ImageProps are optional and have default values in the platform
 */
export interface ImageProps extends MediaProps {
  /**
   * Optional; indicate if inking on the selected Image is allowed or not
   * Default value is true
   */
  ink?: boolean;

  /**
   * Optional; indicate if putting text stickers on the selected Image is allowed or not
   * Default value is true
   */
  textSticker?: boolean;

  /**
   * Optional; indicate if image filtering mode is enabled on the selected image
   * Default value is false
   */
  enableFilter?: boolean;

  /**
   * Optional; Lets the developer specify the image output formats, more than one can be specified.
   * Default value is Image.
   */
  imageOutputFormats?: ImageOutputFormats[];
}

/**
 * All properties in VideoProps are optional and have default values in the platform
 */
export interface VideoProps extends MediaProps {
  /**
   * Optional; the maximum duration in seconds after which the recording should terminate automatically.
   * Default value is defined by the platform serving the API.
   */
  maxDuration?: number;

  /**
   * Optional; to determine if the video capturing flow needs to be launched
   * in Full Screen Mode (Lens implementation) or PictureInPicture Mode (Native implementation).
   * Default value is true, indicating video will always launch in Full Screen Mode via lens.
   */
  isFullScreenMode?: boolean;

  /**
   * Optional; controls the visibility of stop button in PictureInPicture Mode.
   * Default value is true, indicating the user will be able to stop the video.
   */
  isStopButtonVisible?: boolean;
}

/**
 * All properties in VideoAndImageProps are optional and have default values in the platform
 */
export interface VideoAndImageProps extends ImageProps, VideoProps {}

/**
 *  All properties in AudioProps are optional and have default values in the platform
 */
export interface AudioProps {
  /**
   * Optional; the maximum duration in minutes after which the recording should terminate automatically
   * Default value is defined by the platform serving the API.
   */
  maxDuration?: number;
}

export class MediaClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async get(localUriId: string) {
    const [err, res] = await this.window.send<[ClientError | undefined, blob: Blob]>(
      'getMedia',
      localUriId
    );

    if (err) {
      throw err;
    }

    return res;
  }

  async select(inputs: MediaInputs) {
    const [err, res] = await this.window.send<[ClientError | undefined, Array<File>]>(
      'selectMedia',
      inputs
    );

    if (err) {
      throw err;
    }

    return res;
  }

  async captureImage() {
    await this.window.send('media.captureImage');
  }

  async viewImages(uris: ImageUri[]) {
    const [err] = await this.window.send<[ClientError | undefined]>('viewImages', uris);

    if (err) {
      throw err;
    }
  }
}
