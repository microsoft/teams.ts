import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/assignLicense': Operation<'/me/assignLicense', 'post'>;
}

/**
 * `POST /me/assignLicense`
 *
 * Add or remove licenses for the user to enable or disable their use of Microsoft cloud offerings that the company has licenses to. For example, an organization can have a Microsoft 365 Enterprise E3 subscription with 100 licenses, and this request assigns one of those licenses to a specific user. You can also enable and disable specific plans associated with a subscription. Direct user licensing method is an alternative to group-based licensing.
 */
export function create(
  body: IEndpoints['POST /me/assignLicense']['body'],
  params?: IEndpoints['POST /me/assignLicense']['parameters']
): EndpointRequest<IEndpoints['POST /me/assignLicense']['response']> {
  return {
    method: 'post',
    path: '/me/assignLicense',
    paramDefs: [],
    params,
    body,
  };
}
