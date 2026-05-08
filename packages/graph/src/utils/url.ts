import qs from 'qs';

import { type RequestConfig } from '@microsoft/teams.common';

import { ParamDefs } from '../types';

export function getInjectedUrl(
  url: string,
  params: ParamDefs,
  data: Record<string, any>,
) {
  const query: Record<string, any> = {};

  for (const param of params.query ?? []) {
    query[param] = data[param];
  }

  for (const param of params.path ?? []) {
    url = url.replace(`{${param}}`, data[param]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true, arrayFormat: 'comma' })}`;
}

export function getInjectedRequestConfig(
  params: ParamDefs,
  data: Record<string, any>,
  requestConfig?: RequestConfig,
): RequestConfig | undefined {
  const paramHeaders = (params.header ?? []).reduce<Record<string, any>>(
    (agg, param) => {
      if (data[param]) {
        agg[param] = data[param];
      }
      return agg;
    },
    {},
  );

  return Object.keys(paramHeaders).length === 0
    ? requestConfig
    : {
        ...requestConfig,
        headers: { ...requestConfig?.headers, ...paramHeaders },
      };
}
