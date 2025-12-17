export * as alerts from './alerts';
export * as attackSimulation from './attackSimulation';
export * as auditLog from './auditLog';
export * as cases from './cases';
export * as collaboration from './collaboration';
export * as dataDiscovery from './dataDiscovery';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as identities from './identities';
export * as incidentTasks from './incidentTasks';
export * as incidents from './incidents';
export * as informationProtection from './informationProtection';
export * as labels from './labels';
export * as partner from './partner';
export * as rules from './rules';
export * as securityActions from './securityActions';
export * as securityCopilot from './securityCopilot';
export * as subjectRightsRequests from './subjectRightsRequests';
export * as threatIntelligence from './threatIntelligence';
export * as threatSubmission from './threatSubmission';
export * as tiIndicators from './tiIndicators';
export * as triggerTypes from './triggerTypes';
export * as triggers from './triggers';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /security': Operation<'/security', 'get'>;
  'PATCH /security': Operation<'/security', 'patch'>;
  'GET /security/cloudAppSecurityProfiles': Operation<'/security/cloudAppSecurityProfiles', 'get'>;
  'POST /security/cloudAppSecurityProfiles': Operation<
    '/security/cloudAppSecurityProfiles',
    'post'
  >;
  'GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}': Operation<
    '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}': Operation<
    '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    'patch'
  >;
  'DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}': Operation<
    '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
    'delete'
  >;
  'GET /security/domainSecurityProfiles': Operation<'/security/domainSecurityProfiles', 'get'>;
  'POST /security/domainSecurityProfiles': Operation<'/security/domainSecurityProfiles', 'post'>;
  'GET /security/domainSecurityProfiles/{domainSecurityProfile-id}': Operation<
    '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}': Operation<
    '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    'patch'
  >;
  'DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}': Operation<
    '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
    'delete'
  >;
  'GET /security/fileSecurityProfiles': Operation<'/security/fileSecurityProfiles', 'get'>;
  'POST /security/fileSecurityProfiles': Operation<'/security/fileSecurityProfiles', 'post'>;
  'GET /security/fileSecurityProfiles/{fileSecurityProfile-id}': Operation<
    '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}': Operation<
    '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    'patch'
  >;
  'DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}': Operation<
    '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
    'delete'
  >;
  'GET /security/hostSecurityProfiles': Operation<'/security/hostSecurityProfiles', 'get'>;
  'POST /security/hostSecurityProfiles': Operation<'/security/hostSecurityProfiles', 'post'>;
  'GET /security/hostSecurityProfiles/{hostSecurityProfile-id}': Operation<
    '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}': Operation<
    '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    'patch'
  >;
  'DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}': Operation<
    '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
    'delete'
  >;
  'GET /security/ipSecurityProfiles': Operation<'/security/ipSecurityProfiles', 'get'>;
  'POST /security/ipSecurityProfiles': Operation<'/security/ipSecurityProfiles', 'post'>;
  'GET /security/ipSecurityProfiles/{ipSecurityProfile-id}': Operation<
    '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}': Operation<
    '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    'patch'
  >;
  'DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}': Operation<
    '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
    'delete'
  >;
  'GET /security/providerTenantSettings': Operation<'/security/providerTenantSettings', 'get'>;
  'POST /security/providerTenantSettings': Operation<'/security/providerTenantSettings', 'post'>;
  'GET /security/providerTenantSettings/{providerTenantSetting-id}': Operation<
    '/security/providerTenantSettings/{providerTenantSetting-id}',
    'get'
  >;
  'PATCH /security/providerTenantSettings/{providerTenantSetting-id}': Operation<
    '/security/providerTenantSettings/{providerTenantSetting-id}',
    'patch'
  >;
  'DELETE /security/providerTenantSettings/{providerTenantSetting-id}': Operation<
    '/security/providerTenantSettings/{providerTenantSetting-id}',
    'delete'
  >;
  'GET /security/secureScoreControlProfiles': Operation<
    '/security/secureScoreControlProfiles',
    'get'
  >;
  'POST /security/secureScoreControlProfiles': Operation<
    '/security/secureScoreControlProfiles',
    'post'
  >;
  'GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}': Operation<
    '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    'get'
  >;
  'PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}': Operation<
    '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    'patch'
  >;
  'DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}': Operation<
    '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
    'delete'
  >;
  'GET /security/secureScores': Operation<'/security/secureScores', 'get'>;
  'POST /security/secureScores': Operation<'/security/secureScores', 'post'>;
  'GET /security/secureScores/{secureScore-id}': Operation<
    '/security/secureScores/{secureScore-id}',
    'get'
  >;
  'PATCH /security/secureScores/{secureScore-id}': Operation<
    '/security/secureScores/{secureScore-id}',
    'patch'
  >;
  'DELETE /security/secureScores/{secureScore-id}': Operation<
    '/security/secureScores/{secureScore-id}',
    'delete'
  >;
  'GET /security/userSecurityProfiles': Operation<'/security/userSecurityProfiles', 'get'>;
  'POST /security/userSecurityProfiles': Operation<'/security/userSecurityProfiles', 'post'>;
  'GET /security/userSecurityProfiles/{userSecurityProfile-id}': Operation<
    '/security/userSecurityProfiles/{userSecurityProfile-id}',
    'get'
  >;
  'PATCH /security/userSecurityProfiles/{userSecurityProfile-id}': Operation<
    '/security/userSecurityProfiles/{userSecurityProfile-id}',
    'patch'
  >;
  'DELETE /security/userSecurityProfiles/{userSecurityProfile-id}': Operation<
    '/security/userSecurityProfiles/{userSecurityProfile-id}',
    'delete'
  >;
}

/**
 * `GET /security`
 *
 */
export function get(
  params?: IEndpoints['GET /security']['parameters']
): EndpointRequest<IEndpoints['GET /security']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security`
 *
 */
export function update(
  body: IEndpoints['PATCH /security']['body']
): EndpointRequest<IEndpoints['PATCH /security']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security',
    body,
  };
}

export const cloudAppSecurityProfiles = {
  /**
   * `GET /security/cloudAppSecurityProfiles`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/cloudAppSecurityProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/cloudAppSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/cloudAppSecurityProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/cloudAppSecurityProfiles`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/cloudAppSecurityProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /security/cloudAppSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/cloudAppSecurityProfiles',
      body,
    };
  },
  /**
   * `GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['cloudAppSecurityProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
      paramDefs: {
        path: ['cloudAppSecurityProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['cloudAppSecurityProfile-id'],
      },
      params,
    };
  },
};

export const domainSecurityProfiles = {
  /**
   * `GET /security/domainSecurityProfiles`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/domainSecurityProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/domainSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/domainSecurityProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/domainSecurityProfiles`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/domainSecurityProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /security/domainSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/domainSecurityProfiles',
      body,
    };
  },
  /**
   * `GET /security/domainSecurityProfiles/{domainSecurityProfile-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/domainSecurityProfiles/{domainSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/domainSecurityProfiles/{domainSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['domainSecurityProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
      paramDefs: {
        path: ['domainSecurityProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/domainSecurityProfiles/{domainSecurityProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['domainSecurityProfile-id'],
      },
      params,
    };
  },
};

export const fileSecurityProfiles = {
  /**
   * `GET /security/fileSecurityProfiles`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/fileSecurityProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/fileSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/fileSecurityProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/fileSecurityProfiles`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/fileSecurityProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /security/fileSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/fileSecurityProfiles',
      body,
    };
  },
  /**
   * `GET /security/fileSecurityProfiles/{fileSecurityProfile-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/fileSecurityProfiles/{fileSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/fileSecurityProfiles/{fileSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileSecurityProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/fileSecurityProfiles/{fileSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
      paramDefs: {
        path: ['fileSecurityProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/fileSecurityProfiles/{fileSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/fileSecurityProfiles/{fileSecurityProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['fileSecurityProfile-id'],
      },
      params,
    };
  },
};

export const hostSecurityProfiles = {
  /**
   * `GET /security/hostSecurityProfiles`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/hostSecurityProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/hostSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/hostSecurityProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/hostSecurityProfiles`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/hostSecurityProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /security/hostSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/hostSecurityProfiles',
      body,
    };
  },
  /**
   * `GET /security/hostSecurityProfiles/{hostSecurityProfile-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/hostSecurityProfiles/{hostSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/hostSecurityProfiles/{hostSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hostSecurityProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/hostSecurityProfiles/{hostSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
      paramDefs: {
        path: ['hostSecurityProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/hostSecurityProfiles/{hostSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/hostSecurityProfiles/{hostSecurityProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['hostSecurityProfile-id'],
      },
      params,
    };
  },
};

export const ipSecurityProfiles = {
  /**
   * `GET /security/ipSecurityProfiles`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/ipSecurityProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/ipSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/ipSecurityProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/ipSecurityProfiles`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/ipSecurityProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /security/ipSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/ipSecurityProfiles',
      body,
    };
  },
  /**
   * `GET /security/ipSecurityProfiles/{ipSecurityProfile-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/ipSecurityProfiles/{ipSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/ipSecurityProfiles/{ipSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['ipSecurityProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/ipSecurityProfiles/{ipSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
      paramDefs: {
        path: ['ipSecurityProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/ipSecurityProfiles/{ipSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/ipSecurityProfiles/{ipSecurityProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['ipSecurityProfile-id'],
      },
      params,
    };
  },
};

export const providerTenantSettings = {
  /**
   * `GET /security/providerTenantSettings`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/providerTenantSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/providerTenantSettings']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/providerTenantSettings',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/providerTenantSettings`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/providerTenantSettings']['body']
  ): EndpointRequest<IEndpoints['POST /security/providerTenantSettings']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/providerTenantSettings',
      body,
    };
  },
  /**
   * `GET /security/providerTenantSettings/{providerTenantSetting-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/providerTenantSettings/{providerTenantSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/providerTenantSettings/{providerTenantSetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/providerTenantSettings/{providerTenantSetting-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['providerTenantSetting-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/providerTenantSettings/{providerTenantSetting-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/providerTenantSettings/{providerTenantSetting-id}']['body'],
    params?: IEndpoints['PATCH /security/providerTenantSettings/{providerTenantSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/providerTenantSettings/{providerTenantSetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/providerTenantSettings/{providerTenantSetting-id}',
      paramDefs: {
        path: ['providerTenantSetting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/providerTenantSettings/{providerTenantSetting-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /security/providerTenantSettings/{providerTenantSetting-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/providerTenantSettings/{providerTenantSetting-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/providerTenantSettings/{providerTenantSetting-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['providerTenantSetting-id'],
      },
      params,
    };
  },
};

export const secureScoreControlProfiles = {
  /**
   * `GET /security/secureScoreControlProfiles`
   *
   * Retrieves a list of secureScoreControlProfile objects for a tenant.
   */
  list: function list(
    params?: IEndpoints['GET /security/secureScoreControlProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/secureScoreControlProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/secureScoreControlProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/secureScoreControlProfiles`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/secureScoreControlProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /security/secureScoreControlProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/secureScoreControlProfiles',
      body,
    };
  },
  /**
   * `GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['secureScoreControlProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}`
   *
   * Update an editable secureScoreControlProfiles property within any integrated solution to change various properties, such as assignedTo or tenantNote.
   */
  update: function update(
    body: IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
      paramDefs: {
        path: ['secureScoreControlProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/secureScoreControlProfiles/{secureScoreControlProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['secureScoreControlProfile-id'],
      },
      params,
    };
  },
};

export const secureScores = {
  /**
   * `GET /security/secureScores`
   *
   * Retrieve the properties and relationships of a secureScore object.
   */
  list: function list(
    params?: IEndpoints['GET /security/secureScores']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/secureScores']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/secureScores',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/secureScores`
   *
   */
  create: function create(
    body: IEndpoints['POST /security/secureScores']['body']
  ): EndpointRequest<IEndpoints['POST /security/secureScores']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/secureScores',
      body,
    };
  },
  /**
   * `GET /security/secureScores/{secureScore-id}`
   *
   * Measurements of tenants&#x27; security posture to help protect them from threats.
   */
  get: function get(
    params?: IEndpoints['GET /security/secureScores/{secureScore-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/secureScores/{secureScore-id}']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/secureScores/{secureScore-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['secureScore-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/secureScores/{secureScore-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/secureScores/{secureScore-id}']['body'],
    params?: IEndpoints['PATCH /security/secureScores/{secureScore-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /security/secureScores/{secureScore-id}']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/secureScores/{secureScore-id}',
      paramDefs: {
        path: ['secureScore-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/secureScores/{secureScore-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/secureScores/{secureScore-id}']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /security/secureScores/{secureScore-id}']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/secureScores/{secureScore-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['secureScore-id'],
      },
      params,
    };
  },
};

export const userSecurityProfiles = {
  /**
   * `GET /security/userSecurityProfiles`
   *
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/userSecurityProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/userSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/userSecurityProfiles',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/userSecurityProfiles`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/userSecurityProfiles']['body']
  ): EndpointRequest<IEndpoints['POST /security/userSecurityProfiles']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/userSecurityProfiles',
      body,
    };
  },
  /**
   * `GET /security/userSecurityProfiles/{userSecurityProfile-id}`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/userSecurityProfiles/{userSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/userSecurityProfiles/{userSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/userSecurityProfiles/{userSecurityProfile-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userSecurityProfile-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/userSecurityProfiles/{userSecurityProfile-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/userSecurityProfiles/{userSecurityProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/userSecurityProfiles/{userSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/userSecurityProfiles/{userSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/userSecurityProfiles/{userSecurityProfile-id}',
      paramDefs: {
        path: ['userSecurityProfile-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/userSecurityProfiles/{userSecurityProfile-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /security/userSecurityProfiles/{userSecurityProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/userSecurityProfiles/{userSecurityProfile-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/userSecurityProfiles/{userSecurityProfile-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['userSecurityProfile-id'],
      },
      params,
    };
  },
};
