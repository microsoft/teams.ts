import { ClientError } from './client-error';

export interface MessageRequest {
  id: number;
  uuidAsString: string;
  func: string;
  timestamp: number;
  monotonicTimestamp?: number;
  args: any[];
  apiVersionTag?: string;
}

export interface MessageResponse {
  id: number;
  uuidAsString: string;
  origin: string;
  args: any[];
  monotonicTimestamp?: number;
  isPartialResponse?: boolean; // If the message is partial, then there will be more future responses for the given message ID.
}

export interface ErrorMessageResponse extends MessageResponse {
  args: [false, string] | [false, ClientError] | [ClientError];
}
