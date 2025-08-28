import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/retrieveAppleOSUpdateFailures': Operation<
    '/deviceManagement/reports/retrieveAppleOSUpdateFailures',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/retrieveAppleOSUpdateFailures`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/retrieveAppleOSUpdateFailures']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/retrieveAppleOSUpdateFailures']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/retrieveAppleOSUpdateFailures']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/retrieveAppleOSUpdateFailures',
    paramDefs: [],
    params,
    body,
  };
}
