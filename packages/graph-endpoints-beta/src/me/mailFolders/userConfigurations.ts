import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/mailFolders/{mailFolder-id}/userConfigurations': Operation<
    '/me/mailFolders/{mailFolder-id}/userConfigurations',
    'get'
  >;
  'GET /me/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}': Operation<
    '/me/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}',
    'get'
  >;
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/userConfigurations`
 *
 */
export function list(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/userConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/userConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/userConfigurations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mailFolder-id', in: 'path' },
      { name: 'userConfiguration-id', in: 'path' },
    ],
    params,
  };
}
