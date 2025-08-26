import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/sendActivityNotification': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/sendActivityNotification',
    'post'
  >;
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/sendActivityNotification`
 *
 * Send an activity feed notification in the scope of a team. For more information, see sending Teams activity notifications.
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/sendActivityNotification']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/sendActivityNotification']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/sendActivityNotification']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/sendActivityNotification',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
