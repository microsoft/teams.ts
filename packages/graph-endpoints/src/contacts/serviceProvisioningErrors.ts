import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /contacts/{orgContact-id}/serviceProvisioningErrors': Operation<
    '/contacts/{orgContact-id}/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /contacts/{orgContact-id}/serviceProvisioningErrors`
 *
 * Errors published by a federated service describing a non-transient, service-specific error regarding the properties or link from an organizational contact object .  Supports $filter (eq, not, for isResolved and serviceInstance).
 */
export function list(
  params?: IEndpoints['GET /contacts/{orgContact-id}/serviceProvisioningErrors']['parameters']
): EndpointRequest<
  IEndpoints['GET /contacts/{orgContact-id}/serviceProvisioningErrors']['response']
> {
  return {
    method: 'get',
    path: '/contacts/{orgContact-id}/serviceProvisioningErrors',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
    ],
    params,
  };
}
