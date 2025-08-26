import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/unarchive': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/unarchive',
    'post'
  >;
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/unarchive`
 *
 * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/unarchive']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/unarchive']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/unarchive']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/unarchive',
    paramDefs: [{ name: 'teamTemplateDefinition-id', in: 'path' }],
    params,
    body,
  };
}
