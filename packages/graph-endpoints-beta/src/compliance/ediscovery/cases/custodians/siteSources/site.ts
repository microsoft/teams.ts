import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/siteSources/{siteSource-id}/site': Operation<
    '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/siteSources/{siteSource-id}/site',
    'get'
  >;
}

/**
 * `GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/siteSources/{siteSource-id}/site`
 *
 * The SharePoint site associated with the siteSource.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/siteSources/{siteSource-id}/site']['parameters']
): EndpointRequest<
  IEndpoints['GET /compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/siteSources/{siteSource-id}/site']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/compliance/ediscovery/cases/{case-id}/custodians/{custodian-id}/siteSources/{siteSource-id}/site',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'case-id', in: 'path' },
      { name: 'custodian-id', in: 'path' },
      { name: 'siteSource-id', in: 'path' },
    ],
    params,
  };
}
