import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/assignLicense': Operation<'/users/{user-id}/assignLicense', 'post'>;
}

/**
 * `POST /users/{user-id}/assignLicense`
 *
 * Add or remove licenses for the user to enable or disable their use of Microsoft cloud offerings that the company has licenses to. For example, an organization can have a Microsoft 365 Enterprise E3 subscription with 100 licenses, and this request assigns one of those licenses to a specific user. You can also enable and disable specific plans associated with a subscription. Direct user licensing is an alternative to group-based licensing. To get the subscriptions available in the directory, perform a GET subscribedSkus request.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/assignLicense']['body'],
  params?: IEndpoints['POST /users/{user-id}/assignLicense']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/assignLicense']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/assignLicense',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
