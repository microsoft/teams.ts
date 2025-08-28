import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade`
 *
 * Upgrade an app installation within a chat.
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}
