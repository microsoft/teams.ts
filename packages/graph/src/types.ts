import * as http from '@microsoft/teams.common/http';

export type SchemaVersion = 'beta' | 'v1.0';

/**
 * Configuration options for the `call` method
 * @see {@link Client.call}
 */
export type CallOptions  = { 
  /** HTTP request configuration */
  requestConfig?: http.RequestConfig 
};

export type EndpointRequest<TResponse> = {
  ver?: SchemaVersion;
  method: 'get' | 'post' | 'patch' | 'delete' | 'put';
  path: string;
  paramDefs?: Array<{ name: string; in: 'query' | 'header' | 'path' }>;
  params?: Record<string, any>;
  body?: any;
  config?: http.RequestConfig;
  responseType?: TResponse; 
};
