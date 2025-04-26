import { MessageEntity } from './message-entity';

export type CitationIconName =
  | 'Microsoft Word'
  | 'Microsoft Excel'
  | 'Microsoft PowerPoint'
  | 'Microsoft OneNote'
  | 'Microsoft SharePoint'
  | 'Microsoft Visio'
  | 'Microsoft Loop'
  | 'Microsoft Whiteboard'
  | 'Adobe Illustrator'
  | 'Adobe Photoshop'
  | 'Adobe InDesign'
  | 'Adobe Flash'
  | 'Sketch'
  | 'Source Code'
  | 'Image'
  | 'GIF'
  | 'Video'
  | 'Sound'
  | 'ZIP'
  | 'Text'
  | 'PDF';

export type CitationEntity = MessageEntity & {
  /**
   * Required as 'Citation'
   */
  citation?: Claim[];
};

export type Claim = {
  /**
   * Required as 'Claim'
   */
  '@type': 'Claim';

  /**
   * Position of the citation
   */
  position: number;

  /**
   * Appearance options
   */
  appearance: {
    /**
     * Must be 'DigitalDocument'
     */
    '@type': 'DigitalDocument';

    /**
     * Name of the document (max length 80)
     */
    name: string;

    /**
     * Stringified adaptive card with additional information about
     * the citation.
     * It is rendered within a modal
     */
    text?: string;

    /**
     * URL of the document.
     * This will make the name of the citation clickable
     * and direct the user to the specified URL
     */
    url?: string;

    /**
     * Extract of the referenced content (max length 160)
     */
    abstract: string;

    /**
     * Encoding format of the `text`
     */
    encodingFormat?: 'application/vnd.microsoft.card.adaptive';

    /**
     * Information about the citation's icon
     */
    image?: {
      '@type': 'ImageObject';

      /**
       * The image/icon name
       */
      name: CitationIconName;
    };

    /**
     * Keywords (max length 3) (max keyword length 28)
     */
    keywords?: string[];

    /**
     * Sensitivity content information
     */
    usageInfo?: CitationUsageInfo;
  };
};

export type CitationAppearance = {
  /**
   * Name of the document (max length 80)
   */
  name: string;

  /**
   * Stringified adaptive card with additional information about
   * the citation.
   * It is rendered within a modal
   */
  text?: string;

  /**
   * URL of the document.
   * This will make the name of the citation clickable
   * and direct the user to the specified URL
   */
  url?: string;

  /**
   * Extract of the referenced content (max length 160)
   */
  abstract: string;

  /**
   * Information about the citation's icon
   */
  icon?: CitationIconName;

  /**
   * Keywords (max length 3) (max keyword length 28)
   */
  keywords?: string[];

  /**
   * Sensitivity content information
   */
  usageInfo?: CitationUsageInfo;
};

export type CitationUsageInfo = {
  /**
   * Unique identifier for the usage info
   */
  '@id': string;

  /**
   * Description of the usage info
   */
  description: string;

  /**
   * Name of the usage info
   */
  name: string;

  /**
   * Position of the usage info
   */
  position?: number;
};
