import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    'post'
  >;
  'GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
    'get'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'sensitivityLabel-id', 'sensitivityLabel-id1'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: {
      path: ['site-id', 'sensitivityLabel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      path: ['site-id', 'sensitivityLabel-id', 'sensitivityLabel-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}',
    paramDefs: {
      path: ['site-id', 'sensitivityLabel-id', 'sensitivityLabel-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels',
    paramDefs: {
      path: ['site-id', 'sensitivityLabel-id'],
    },
    params,
    body,
  };
}

export const computeRightsAndInheritance = {
  /**
   * `POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance`
   *
   * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
      paramDefs: {
        path: ['site-id', 'sensitivityLabel-id'],
      },
      params,
      body,
    };
  },
};

export const evaluate = {
  /**
   * `POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
      paramDefs: {
        path: ['site-id', 'sensitivityLabel-id'],
      },
      params,
      body,
    };
  },
};

export const rights = {
  /**
   * `GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights`
   *
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/{sensitivityLabel-id1}/rights',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'sensitivityLabel-id', 'sensitivityLabel-id1'],
      },
      params,
    };
  },
};
