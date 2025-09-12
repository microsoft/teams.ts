export * as articleIndicators from './articleIndicators';
export * as articles from './articles';
export * as hostComponents from './hostComponents';
export * as hostCookies from './hostCookies';
export * as hostPairs from './hostPairs';
export * as hostPorts from './hostPorts';
export * as hostSslCertificates from './hostSslCertificates';
export * as hostTrackers from './hostTrackers';
export * as hosts from './hosts';
export * as intelProfiles from './intelProfiles';
export * as intelligenceProfileIndicators from './intelligenceProfileIndicators';
export * as passiveDnsRecords from './passiveDnsRecords';
export * as sslCertificates from './sslCertificates';
export * as subdomains from './subdomains';
export * as vulnerabilities from './vulnerabilities';
export * as whoisHistoryRecords from './whoisHistoryRecords';
export * as whoisRecords from './whoisRecords';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence': Operation<'/security/threatIntelligence', 'delete'>;
  'GET /security/threatIntelligence': Operation<'/security/threatIntelligence', 'get'>;
  'PATCH /security/threatIntelligence': Operation<'/security/threatIntelligence', 'patch'>;
}

/**
 * `DELETE /security/threatIntelligence`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/threatIntelligence']['response']> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /security/threatIntelligence`
 *
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence']['body']
): EndpointRequest<IEndpoints['PATCH /security/threatIntelligence']['response']> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence',
    body,
  };
}
