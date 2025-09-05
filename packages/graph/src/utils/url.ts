import qs from 'qs';

import * as http from '@microsoft/teams.common/http';

import { IParam } from './interfaces';

export function getInjectedUrl(url: string, params: Array<IParam>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true, arrayFormat: 'comma' })}`;
}

export function getInjectedRequestConfig(
  params: Array<IParam>,
  data: Record<string, any>,
  requestConfig?: http.RequestConfig
): http.RequestConfig | undefined {

  const paramHeaders = (params ?? []).reduce<Record<string, any>>((agg, param) => {
    if (param.in === 'header' && data[param.name]) {
      agg[param.name] = data[param.name];
    }
    return agg;
   }, {});

   return Object.keys(paramHeaders).length === 0 
     ? requestConfig 
    : {...requestConfig, headers: {...requestConfig?.headers, ...paramHeaders}};

}
