export * as applyDecisions from './applyDecisions';
export * as decisions from './decisions';
export * as instances from './instances';
export * as myDecisions from './myDecisions';
export * as resetDecisions from './resetDecisions';
export * as reviewers from './reviewers';
export * as sendReminder from './sendReminder';
export * as stop from './stop';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /accessReviews/{accessReview-id}': Operation<
    '/accessReviews/{accessReview-id}',
    'delete'
  >;
  'GET /accessReviews': Operation<'/accessReviews', 'get'>;
  'GET /accessReviews/{accessReview-id}': Operation<'/accessReviews/{accessReview-id}', 'get'>;
  'PATCH /accessReviews/{accessReview-id}': Operation<'/accessReviews/{accessReview-id}', 'patch'>;
  'POST /accessReviews': Operation<'/accessReviews', 'post'>;
}

/**
 * `DELETE /accessReviews/{accessReview-id}`
 *
 * In the Microsoft Entra access reviews feature, delete an accessReview object.
 */
export function del(
  params?: IEndpoints['DELETE /accessReviews/{accessReview-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /accessReviews/{accessReview-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/accessReviews/{accessReview-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'accessReview-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /accessReviews`
 *
 * Retrieve the accessReview objects for a particular businessFlowTemplate. A list of zero or more accessReview objects are returned, for each one-time and recurring access review that was created with that business flow template.  Business flow template IDs are case sensitive. If many access reviews match the filter, to improve efficiency and avoid timeouts, retrieve the result set in pages, by including both the $top query parameter with a page size, for example 100, and the $skip&#x3D;0 query parameter in the request. These parameters can be included even when you don&#x27;t anticipate that the request spans multiple pages. When a result set spans multiple pages, Microsoft Graph returns that page with an @odata.nextLink property in the response that contains a URL to the next page of results. If that property is present, continue making requests with the @odata.nextLink URL in each response, until all the results are returned, as described in paging Microsoft Graph data in your app. The accessReview objects returned by this API don&#x27;t include nested structure properties such as settings, or relationships.  To retrieve an access review settings or relationships, use the get accessReview API.
 */
export function list(
  params?: IEndpoints['GET /accessReviews']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews',
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
 * `GET /accessReviews/{accessReview-id}`
 *
 * In the Microsoft Entra access reviews feature, retrieve an accessReview object.   To retrieve the reviewers of the access review, use the list accessReview reviewers API. To retrieve the decisions of the access review, use the list accessReview decisions API, or the list my accessReview decisions API. If this is a recurring access review, no decisions will be associated with the recurring access review series. Instead, use the instances relationship of that series to retrieve an accessReview collection of the past, current, and future instances of the access review. Each past and current instance will have decisions.
 */
export function get(
  params?: IEndpoints['GET /accessReviews/{accessReview-id}']['parameters']
): EndpointRequest<IEndpoints['GET /accessReviews/{accessReview-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/accessReviews/{accessReview-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'accessReview-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /accessReviews/{accessReview-id}`
 *
 * In the Microsoft Entra access reviews feature, update an existing accessReview object to change one or more of its properties. This API is not intended to change the reviewers or decisions of a review.  To change the reviewers, use the addReviewer or removeReviewer APIs.  To stop an already-started one-time review, or an already-started instance of a recurring review, early, use the stop API. To apply the decisions to the target group or app access rights, use the apply API.
 */
export function update(
  body: IEndpoints['PATCH /accessReviews/{accessReview-id}']['body'],
  params?: IEndpoints['PATCH /accessReviews/{accessReview-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /accessReviews/{accessReview-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/accessReviews/{accessReview-id}',
    paramDefs: [{ name: 'accessReview-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /accessReviews`
 *
 * In the Microsoft Entra access reviews feature, create a new accessReview object. Before making this request, the caller must have previously retrieved the list of business flow templates, to have the value of businessFlowTemplateId to include in the request. After making this request, the caller should create a programControl, to link the access review to a program.
 */
export function create(
  body: IEndpoints['POST /accessReviews']['body'],
  params?: IEndpoints['POST /accessReviews']['parameters']
): EndpointRequest<IEndpoints['POST /accessReviews']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/accessReviews',
    paramDefs: [],
    params,
    body,
  };
}
