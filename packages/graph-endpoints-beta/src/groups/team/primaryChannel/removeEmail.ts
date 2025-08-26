import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/removeEmail': Operation<
    '/groups/{group-id}/team/primaryChannel/removeEmail',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/removeEmail`
 *
 * Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/removeEmail']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/removeEmail']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/removeEmail']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/removeEmail',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
