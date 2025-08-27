import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/assignLicense': Operation<'/groups/{group-id}/assignLicense', 'post'>;
}

/**
 * `POST /groups/{group-id}/assignLicense`
 *
 * Add or remove licenses on a group. Licenses assigned to the group will be assigned to all users in the group. Group-based licensing is an alternative to direct user licensing. To learn more about group-based licensing, see What is group-based licensing in Microsoft Entra ID. To get the subscriptions available in the directory, perform a GET subscribedSkus request.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/assignLicense']['body'],
  params?: IEndpoints['POST /groups/{group-id}/assignLicense']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/assignLicense']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/assignLicense',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
