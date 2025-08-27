import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp`
 *
 * The application that is linked to the tab.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}
