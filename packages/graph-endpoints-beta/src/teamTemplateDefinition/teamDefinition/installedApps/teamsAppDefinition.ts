import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
 *
 * The details of this version of the app.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
