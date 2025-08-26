import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/templateDefinition': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/templateDefinition',
    'get'
  >;
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/templateDefinition`
 *
 * Generic representation of a team template definition for a team with a specific structure and configuration.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/templateDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/templateDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/templateDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
    ],
    params,
  };
}
