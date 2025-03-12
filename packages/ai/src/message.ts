import { Citation } from './citation';
import { FunctionCall } from './function';

export type Message = UserMessage | ModelMessage | SystemMessage | FunctionMessage;

export type UserMessage = {
  role: 'user';
  content: string | ContentPart[];
};

export type ModelMessage = {
  role: 'model';
  content?: string;
  context?: MessageContext;
  function_calls?: FunctionCall[];
};

export type SystemMessage = {
  role: 'system';
  content: string;
};

export type FunctionMessage = {
  role: 'function';
  content?: string;
  function_id: string;
};

export type ContentPart = TextContentPart | ImageContentPart;

export type TextContentPart = {
  type: 'text';
  text: string;
};

export type ImageContentPart = {
  type: 'image_url';
  image_url: string;
};

/**
 * A representation of the additional context information available when Azure OpenAI chat extensions are involved
 * in the generation of a corresponding chat completions response. This context information is only populated when
 * using an Azure OpenAI request configured to use a matching extension.
 */
export type MessageContext = {
  /**
   * The contextual information associated with the Azure chat extensions used for a chat completions request.
   * These messages describe the data source retrievals, plugin invocations, and other intermediate steps taken in the
   * course of generating a chat completions response that was augmented by capabilities from Azure OpenAI chat
   * extensions.
   */
  citations?: Array<Citation>;

  /** The detected intent from the chat history, used to pass to the next turn to carry over the context. */
  intent?: string;
};
