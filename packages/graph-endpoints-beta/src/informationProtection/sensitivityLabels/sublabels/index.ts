import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'delete'
  >;
  'GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'get'
  >;
  'GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'get'
  >;
  'PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'patch'
  >;
  'POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'post'
  >;
  'POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    'post'
  >;
  'GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights': Operation<
    '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
    'get'
  >;
}

/**
 * `DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function list(
  params?: IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: {
      path: ['sensitivityLabel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['body'],
  params?: IEndpoints['PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function create(
  body: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['body'],
  params?: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: {
      path: ['sensitivityLabel-id'],
    },
    params,
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['body'],
    params?: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
      paramDefs: {
        path: ['sensitivityLabel-id'],
      },
      params,
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['body'],
    params?: IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
      paramDefs: {
        path: ['sensitivityLabel-id'],
      },
      params,
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sensitivityLabel-id', 'sensitivityLabel-id1'],
      },
      params,
    };
  },
};
