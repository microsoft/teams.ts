import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/archive': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/archive',
    'post'
  >;
}

/**
  * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/archive`
  *
  * Archive the specified team. 
When a team is archived, users can no longer make most changes to the team. For example, users can no longer: send or like messages on any channel in the team; edit the team&#x27;s name or description; nor edit other settings. However, membership changes to the team continue to be allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which can occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.
  */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/archive']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/archive']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/archive']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/archive',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
