import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/provisionEmail': Operation<
    '/groups/{group-id}/team/primaryChannel/provisionEmail',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/provisionEmail`
 *
 * Provision an email address for a channel. Microsoft Teams doesn&#x27;t automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a channel, use the removeEmail method.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/provisionEmail']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/provisionEmail']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/provisionEmail']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/provisionEmail',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
