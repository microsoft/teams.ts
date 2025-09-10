export * as attackSimulation from './attackSimulation';
export * as cases from './cases';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as identities from './identities';
export * as incidents from './incidents';
export * as labels from './labels';
export * as subjectRightsRequests from './subjectRightsRequests';
export * as threatIntelligence from './threatIntelligence';
export * as triggerTypes from './triggerTypes';
export * as triggers from './triggers';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /security': Operation<'/security', 'get'>;
  'PATCH /security': Operation<'/security', 'patch'>;
  'GET /security/alerts': Operation<'/security/alerts', 'get'>;
  'POST /security/alerts': Operation<'/security/alerts', 'post'>;
  'GET /security/alerts/{alert-id}': Operation<'/security/alerts/{alert-id}', 'get'>;
  'PATCH /security/alerts/{alert-id}': Operation<'/security/alerts/{alert-id}', 'patch'>;
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
}

/**
 * `GET /security`
 *
 */
export function get(
  params?: IEndpoints['GET /security']['parameters']
): EndpointRequest<IEndpoints['GET /security']['response']> {
  return {
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
    method: 'patch',
    path: '/security',
    body,
  };
}

export const alerts = {
  /**
   * `GET /security/alerts`
   *
   * Retrieve a list of alert objects.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /security/alerts']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/alerts']['response']> {
    return {
      method: 'get',
      path: '/security/alerts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /security/alerts`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /security/alerts']['body']
  ): EndpointRequest<IEndpoints['POST /security/alerts']['response']> {
    return {
      method: 'post',
      path: '/security/alerts',
      body,
    };
  },
  /**
   * `GET /security/alerts/{alert-id}`
   *
   * Retrieve the properties and relationships of an alert object.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /security/alerts/{alert-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/alerts/{alert-id}']['response']> {
    return {
      method: 'get',
      path: '/security/alerts/{alert-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['alert-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/alerts/{alert-id}`
   *
   * Update an editable alert property within any integrated solution to keep alert status and assignments in sync across solutions. This method updates any solution that has a record of the referenced alert ID.
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /security/alerts/{alert-id}']['body'],
    params?: IEndpoints['PATCH /security/alerts/{alert-id}']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /security/alerts/{alert-id}']['response']> {
    return {
      method: 'patch',
      path: '/security/alerts/{alert-id}',
      paramDefs: {
        path: ['alert-id'],
      },
      params,
      body,
    };
  },
};

export const secureScoreControlProfiles = {
  /**
   * `GET /security/secureScoreControlProfiles`
   *
   * Retrieve the properties and relationships of a secureScoreControlProfiles object.
   */
  list: function list(
    params?: IEndpoints['GET /security/secureScoreControlProfiles']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/secureScoreControlProfiles']['response']> {
    return {
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
      method: 'post',
      path: '/security/secureScoreControlProfiles',
      body,
    };
  },
  /**
   * `GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}`
   *
   * Retrieve the properties and relationships of an securescorecontrolprofile object.
   */
  get: function get(
    params?: IEndpoints['GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
  > {
    return {
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
   * Update an editable secureScoreControlProfile object within any integrated solution to change various properties, such as assignedTo or tenantNote.
   */
  update: function update(
    body: IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['body'],
    params?: IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/secureScoreControlProfiles/{secureScoreControlProfile-id}']['response']
  > {
    return {
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
   * Retrieve a list of secureScore objects.
   */
  list: function list(
    params?: IEndpoints['GET /security/secureScores']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/secureScores']['response']> {
    return {
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
      method: 'post',
      path: '/security/secureScores',
      body,
    };
  },
  /**
   * `GET /security/secureScores/{secureScore-id}`
   *
   * Retrieve the properties and relationships of a secureScore object.
   */
  get: function get(
    params?: IEndpoints['GET /security/secureScores/{secureScore-id}']['parameters']
  ): EndpointRequest<IEndpoints['GET /security/secureScores/{secureScore-id}']['response']> {
    return {
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
