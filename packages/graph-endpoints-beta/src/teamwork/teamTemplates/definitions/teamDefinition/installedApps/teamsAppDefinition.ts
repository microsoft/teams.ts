import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
 *
 * The details of this version of the app.
 */
export function get(
  params?: IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/teamTemplates/{teamTemplate-id}/definitions/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplate-id', in: 'path' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
