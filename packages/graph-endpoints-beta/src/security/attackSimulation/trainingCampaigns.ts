import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}': Operation<
    '/security/attackSimulation/trainingCampaigns/{trainingCampaign-id}',
    'delete'
  >;
  'GET /security/attackSimulation/trainingCampaigns': Operation<
    '/security/attackSimulation/trainingCampaigns',
    'get'
  >;
  'GET /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}': Operation<
    '/security/attackSimulation/trainingCampaigns/{trainingCampaign-id}',
    'get'
  >;
  'PATCH /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}': Operation<
    '/security/attackSimulation/trainingCampaigns/{trainingCampaign-id}',
    'patch'
  >;
  'POST /security/attackSimulation/trainingCampaigns': Operation<
    '/security/attackSimulation/trainingCampaigns',
    'post'
  >;
}

/**
 * `DELETE /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}`
 *
 * Delete a trainingCampaign object.
 */
export function del(
  params?: IEndpoints['DELETE /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/attackSimulation/trainingCampaigns/{trainingCampaign-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'trainingCampaign-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/trainingCampaigns`
 *
 * Get a list of trainingCampaign objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/attackSimulation/trainingCampaigns']['parameters']
): EndpointRequest<IEndpoints['GET /security/attackSimulation/trainingCampaigns']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/trainingCampaigns',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}`
 *
 * Read the properties and relationships of a trainingCampaign object.
 */
export function get(
  params?: IEndpoints['GET /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/attackSimulation/trainingCampaigns/{trainingCampaign-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'trainingCampaign-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}`
 *
 * Update the properties of a trainingCampaign object.
 */
export function update(
  body: IEndpoints['PATCH /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}']['body'],
  params?: IEndpoints['PATCH /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/attackSimulation/trainingCampaigns/{trainingCampaign-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/attackSimulation/trainingCampaigns/{trainingCampaign-id}',
    paramDefs: [{ name: 'trainingCampaign-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/attackSimulation/trainingCampaigns`
 *
 * Create a new trainingCampaign object.
 */
export function create(
  body: IEndpoints['POST /security/attackSimulation/trainingCampaigns']['body'],
  params?: IEndpoints['POST /security/attackSimulation/trainingCampaigns']['parameters']
): EndpointRequest<IEndpoints['POST /security/attackSimulation/trainingCampaigns']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/attackSimulation/trainingCampaigns',
    paramDefs: [],
    params,
    body,
  };
}
