import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels/{channel-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels/{channel-id}',
    'get'
  >;
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels`
 *
 * List of channels shared with the team.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels',
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
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels/{channel-id}`
 *
 * List of channels shared with the team.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels/{channel-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels/{channel-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}
