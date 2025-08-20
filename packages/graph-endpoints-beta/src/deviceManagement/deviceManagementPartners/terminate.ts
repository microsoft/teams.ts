import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate': Operation<
    '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate',
    'post'
  >;
}

/**
 * `POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceManagementPartners/{deviceManagementPartner-id}/terminate',
    paramDefs: [{ name: 'deviceManagementPartner-id', in: 'path' }],
    params,
    body,
  };
}
