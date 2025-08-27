import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/validateProperties': Operation<'/groups/validateProperties', 'post'>;
  'POST /groups/{group-id}/validateProperties': Operation<
    '/groups/{group-id}/validateProperties',
    'post'
  >;
}

/**
  * `POST /groups/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
  */
export function create$1(
  body: IEndpoints['POST /groups/validateProperties']['body'],
  params?: IEndpoints['POST /groups/validateProperties']['parameters']
): EndpointRequest<IEndpoints['POST /groups/validateProperties']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/validateProperties',
    paramDefs: [],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/validateProperties`
 *
 * Validate if a Microsoft 365 Group&#x27;s display name or mail nickname complies with naming policies. Clients can use the API to determine if a display name or mail nickname is valid before trying to update a Microsoft 365 Group. For validating properties before creating a group, use the validateProperties function for directory objects. The following validations are performed for the display name and mail nickname properties: This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/validateProperties']['body'],
  params?: IEndpoints['POST /groups/{group-id}/validateProperties']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/validateProperties']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/validateProperties',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
