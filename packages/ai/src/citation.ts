/**
 * A single instance of additional context information available when Azure OpenAI chat extensions are involved
 * in the generation of a corresponding chat completions response. This context information is only populated when
 * using an Azure OpenAI request configured to use a matching extension.
 */
export type Citation = {
  /** The content of the citation. */
  content: string;

  /** The title of the citation. */
  title?: string;

  /** The URL of the citation. */
  url?: string;

  /** The file path of the citation. */
  filepath?: string;

  /** The chunk ID of the citation. */
  chunk_id?: string;
};
