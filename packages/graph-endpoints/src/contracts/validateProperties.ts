import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/validateProperties': Operation<'/contracts/validateProperties', 'post'>;
}

/**
  * `POST /contracts/validateProperties`
  *
  * Validate that a Microsoft 365 group&#x27;s display name or mail nickname complies with naming policies. Clients can use this API to determine whether a display name or mail nickname is valid before trying to create a Microsoft 365 group. To validate the properties of an existing group, use the group: validateProperties function. The following policy validations are performed for the display name and mail nickname properties:
1. Validate the prefix and suffix naming policy
2. Validate the custom banned words policy
3. Validate that the mail nickname is unique This API only returns the first validation failure that is encountered. If the properties fail multiple validations, only the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you&#x27;re only validating the prefix and suffix naming policy. To learn more about configuring naming policies, see Configure naming policy.
  */
export function create(
  body: IEndpoints['POST /contracts/validateProperties']['body'],
  params?: IEndpoints['POST /contracts/validateProperties']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/validateProperties']['response']> {
  return {
    method: 'post',
    path: '/contracts/validateProperties',
    paramDefs: [],
    params,
    body,
  };
}
