import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceAppManagement/iosManagedAppProtections/hasPayloadLinks': Operation<
    '/deviceAppManagement/iosManagedAppProtections/hasPayloadLinks',
    'post'
  >;
}

/**
 * `POST /deviceAppManagement/iosManagedAppProtections/hasPayloadLinks`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/hasPayloadLinks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/hasPayloadLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/hasPayloadLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosManagedAppProtections/hasPayloadLinks',
    paramDefs: [],
    params,
    body,
  };
}
