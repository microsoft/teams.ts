import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    'delete'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    'get'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    'get'
  >;
  'PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    'patch'
  >;
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    'post'
  >;
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel',
    'post'
  >;
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/commit': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/commit',
    'post'
  >;
  'POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew',
    'post'
  >;
  'GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    'get'
  >;
  'PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    'patch'
  >;
  'DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent': Operation<
    '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
    'delete'
  >;
}

/**
 * `DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
    },
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions`
 *
 */
export function list(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    paramDefs: {
      path: ['exactMatchDataStore-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    paramDefs: {
      path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['body'],
  params?: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}',
    paramDefs: {
      path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions`
 *
 */
export function create(
  body: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['body'],
  params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['parameters']
): EndpointRequest<
  IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions',
    paramDefs: {
      path: ['exactMatchDataStore-id'],
    },
    params,
    body,
  };
}

export const cancel = {
  /**
   * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel`
   *
   */
  create: function create(
    params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/cancel',
      paramDefs: {
        path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
      },
      params,
    };
  },
};

export const commit = {
  /**
   * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/commit`
   *
   */
  create: function create(
    params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/commit']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/commit']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/commit',
      paramDefs: {
        path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
      },
      params,
    };
  },
};

export const renew = {
  /**
   * `POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew`
   *
   */
  create: function create(
    params?: IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/renew',
      paramDefs: {
        path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
      },
      params,
    };
  },
};

export const uploadAgent = {
  /**
   * `GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent`
   *
   */
  get: function get(
    params?: IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['body'],
    params?: IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
      paramDefs: {
        path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/dataClassification/exactMatchDataStores/{exactMatchDataStore-id}/sessions/{exactMatchSession-id}/uploadAgent',
      paramDefs: {
        header: ['If-Match'],
        path: ['exactMatchDataStore-id', 'exactMatchSession-id'],
      },
      params,
    };
  },
};
