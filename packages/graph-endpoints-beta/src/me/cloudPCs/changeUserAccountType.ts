import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType': Operation<
    '/me/cloudPCs/{cloudPC-id}/changeUserAccountType',
    'post'
  >;
}

/**
 * `POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType`
 *
 * Change the account type of the user on a specific Cloud PC.
 */
export function create(
  body: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType']['body'],
  params?: IEndpoints['POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType']['parameters']
): EndpointRequest<IEndpoints['POST /me/cloudPCs/{cloudPC-id}/changeUserAccountType']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/cloudPCs/{cloudPC-id}/changeUserAccountType',
    paramDefs: [{ name: 'cloudPC-id', in: 'path' }],
    params,
    body,
  };
}
