import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/schedule/timeCards': Operation<
    '/groups/{group-id}/team/schedule/timeCards',
    'get'
  >;
  'GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/schedule/timeCards': Operation<
    '/groups/{group-id}/team/schedule/timeCards',
    'post'
  >;
  'POST /groups/{group-id}/team/schedule/timeCards/clockIn': Operation<
    '/groups/{group-id}/team/schedule/timeCards/clockIn',
    'post'
  >;
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
  'POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'timeCard-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/timeCards`
 *
 * The time cards in the schedule.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/schedule/timeCards']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeCards',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}`
 *
 * The time cards in the schedule.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['group-id', 'timeCard-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['group-id', 'timeCard-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/schedule/timeCards`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/schedule/timeCards']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/schedule/timeCards',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const clockIn = {
  /**
   * `POST /groups/{group-id}/team/schedule/timeCards/clockIn`
   *
   * Clock in to start a timeCard.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/clockIn']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/clockIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/clockIn']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timeCards/clockIn',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const clockOut = {
  /**
   * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/clockOut',
      paramDefs: {
        path: ['group-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const confirm = {
  /**
   * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm`
   *
   * Confirm a timeCard.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/confirm',
      paramDefs: {
        path: ['group-id', 'timeCard-id'],
      },
      params,
    };
  },
};

export const endBreak = {
  /**
   * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/endBreak',
      paramDefs: {
        path: ['group-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const startBreak = {
  /**
   * `POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/schedule/timeCards/{timeCard-id}/startBreak',
      paramDefs: {
        path: ['group-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};
