import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels/{channel-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels/{channel-id}',
    'get'
  >;
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels`
 *
 * List of channels either hosted in or shared with the team (incoming channels).
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels/{channel-id}`
 *
 * List of channels either hosted in or shared with the team (incoming channels).
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels/{channel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
