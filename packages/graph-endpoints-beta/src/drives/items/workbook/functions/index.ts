import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/functions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/functions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/functions': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/abs': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/abs',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrInt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrInt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrIntM': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrIntM',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acos': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acos',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acosh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acosh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acot': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acot',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acoth': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acoth',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorDegrc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorDegrc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorLinc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorLinc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/and': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/and',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/arabic': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/arabic',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/areas': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/areas',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/asc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/asin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asinh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/asinh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan2': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan2',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atanh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/atanh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/aveDev': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/aveDev',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/average': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/average',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIf': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIf',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIfs': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIfs',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bahtText': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bahtText',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/base': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/base',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselI': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselI',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselJ': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselJ',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselK': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselK',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselY': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselY',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Dec': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Dec',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Hex': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Hex',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Oct': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Oct',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitand': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitand',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitlshift': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitlshift',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitor': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitor',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitrshift': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitrshift',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/char': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/char',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/choose': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/choose',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/clean': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/clean',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/code': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/code',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/columns': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/columns',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/combin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combina': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/combina',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/complex': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/complex',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/concatenate': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/concatenate',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/convert': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/convert',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cos': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cos',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cosh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cosh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cot': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cot',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coth': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coth',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/count': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/count',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countBlank': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countBlank',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIf': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIf',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIfs': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIfs',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDayBs': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDayBs',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDays': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDays',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDaysNc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDaysNc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNcd': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNcd',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNum': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNum',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupPcd': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupPcd',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/csc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csch': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/csch',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumIPmt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumIPmt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumPrinc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumPrinc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/date': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/date',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/datevalue': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/datevalue',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/daverage': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/daverage',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/day': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/day',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/days',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days360': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/days360',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/db': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/db',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dbcs': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dbcs',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcount': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcount',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcountA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcountA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ddb': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ddb',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Bin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Bin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Hex': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Hex',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Oct': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Oct',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/decimal': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/decimal',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/degrees': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/degrees',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/delta': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/delta',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/devSq': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/devSq',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dget': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dget',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/disc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/disc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmax': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmax',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollar': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollar',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarDe': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarDe',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarFr': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarFr',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dproduct': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dproduct',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDev': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDev',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDevP': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDevP',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dsum': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dsum',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/duration': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/duration',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvarP': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvarP',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/edate': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/edate',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/effect': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/effect',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/eoMonth': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/eoMonth',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erf': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/erf',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erfC': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/erfC',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/even': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/even',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exact': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/exact',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exp': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/exp',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fact': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fact',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/factDouble': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/factDouble',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/false': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/false',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/find': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/find',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/findB': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/findB',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisher': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisher',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisherInv': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisherInv',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fixed': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fixed',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fv': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fv',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fvschedule': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fvschedule',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gamma': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gamma',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gammaLn': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gammaLn',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gauss': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gauss',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gcd': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gcd',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geStep': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/geStep',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geoMean': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/geoMean',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/harMean': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/harMean',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Bin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Bin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Dec': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Dec',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Oct': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Oct',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hlookup': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hlookup',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hour': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hour',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hyperlink': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hyperlink',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/if': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/if',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imAbs': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imAbs',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imConjugate': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imConjugate',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCos': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCos',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCosh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCosh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCot': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCot',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsch': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsch',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imDiv': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imDiv',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imExp': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imExp',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLn': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLn',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog10': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog10',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog2': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog2',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imPower': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imPower',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imProduct': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imProduct',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imReal': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imReal',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSec': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSec',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSech': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSech',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSinh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSinh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSqrt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSqrt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSub': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSub',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSum': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSum',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imTan': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imTan',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imaginary': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imaginary',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/int': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/int',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/intRate': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/intRate',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ipmt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ipmt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/irr': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/irr',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isErr': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isErr',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isError': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isError',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isEven': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isEven',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isFormula': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isFormula',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isLogical': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isLogical',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNonText': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNonText',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNumber': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNumber',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isOdd': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isOdd',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isText': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isText',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isoWeekNum': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isoWeekNum',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ispmt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ispmt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isref': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isref',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/kurt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/kurt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/large': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/large',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lcm': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lcm',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/left': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/left',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/leftb': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/leftb',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/len': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/len',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lenb': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lenb',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ln': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ln',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/log',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log10': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/log10',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lookup': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lookup',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lower': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lower',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/match': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/match',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/max': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/max',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/maxA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/maxA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mduration': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mduration',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/median': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/median',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mid': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mid',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/midb': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/midb',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/min': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/min',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/minA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minute': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/minute',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mirr': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mirr',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mod': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mod',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/month': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/month',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mround': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mround',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/multiNomial': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/multiNomial',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/n': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/n',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/na': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/na',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/networkDays': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/networkDays',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nominal': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/nominal',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/not': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/not',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/now': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/now',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nper': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/nper',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/npv': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/npv',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/numberValue': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/numberValue',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Bin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Bin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Hex': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Hex',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/odd': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/odd',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFPrice': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFPrice',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFYield': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFYield',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLPrice': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLPrice',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLYield': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLYield',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/or': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/or',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pduration': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pduration',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permut': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/permut',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permutationa': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/permutationa',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/phi': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/phi',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pi': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pi',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pmt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pmt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/power': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/power',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ppmt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ppmt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/price': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/price',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceDisc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceDisc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceMat': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceMat',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/product': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/product',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/proper': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/proper',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pv': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pv',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/quotient': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/quotient',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/radians': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/radians',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rand': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rand',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/randBetween': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/randBetween',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rate': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rate',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/received': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/received',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replace': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/replace',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replaceB': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/replaceB',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rept': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rept',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/right': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/right',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rightb': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rightb',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roman': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/roman',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/round': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/round',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundDown': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundDown',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundUp': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundUp',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rows': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rows',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rri': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rri',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sec': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sec',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sech': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sech',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/second': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/second',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/seriesSum': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/seriesSum',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheet': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheet',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheets': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheets',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sign': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sign',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sinh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sinh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/skew': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/skew',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sln': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sln',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/small': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/small',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrt': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrt',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrtPi': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrtPi',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevPA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevPA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/standardize': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/standardize',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/substitute': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/substitute',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/subtotal': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/subtotal',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sum': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sum',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIf': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIf',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIfs': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIfs',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumSq': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumSq',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/syd': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/syd',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/t': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/t',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tan': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tan',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tanh': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tanh',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillEq': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillEq',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillPrice': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillPrice',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillYield': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillYield',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/text': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/text',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/time': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/time',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/timevalue': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/timevalue',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/today': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/today',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trim': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/trim',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trimMean': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/trimMean',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/true': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/true',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trunc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/trunc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/type': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/type',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unichar': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/unichar',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unicode': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/unicode',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/upper': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/upper',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/usdollar': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/usdollar',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/value': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/value',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/varA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varPA': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/varPA',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vdb': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/vdb',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vlookup': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/vlookup',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekNum': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekNum',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekday': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekday',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/workDay': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/workDay',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xirr': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/xirr',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xnpv': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/xnpv',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xor': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/xor',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/year': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/year',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yearFrac': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yearFrac',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yield': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yield',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldDisc': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldDisc',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldMat': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldMat',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/functions`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/functions']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/functions']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/functions`
 *
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/functions']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/functions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/functions`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/functions']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/functions']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/functions']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

export const abs = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/abs`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/abs']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/abs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/abs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/abs',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const accrInt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrInt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrInt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrInt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrInt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrInt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const accrIntM = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrIntM`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrIntM']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrIntM']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrIntM']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/accrIntM',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const acos = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acos`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acos']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acos']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acos']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acos',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const acosh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acosh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acosh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acosh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acosh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acosh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const acot = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acot`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acot']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acot',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const acoth = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acoth`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acoth']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acoth']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/acoth']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/acoth',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const amorDegrc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorDegrc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorDegrc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorDegrc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorDegrc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorDegrc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const amorLinc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorLinc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorLinc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorLinc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorLinc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/amorLinc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const and = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/and`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/and']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/and']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/and']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/and',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const arabic = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/arabic`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/arabic']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/arabic']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/arabic']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/arabic',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const areas = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/areas`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/areas']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/areas']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/areas']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/areas',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const asc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/asc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const asin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/asin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const asinh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asinh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asinh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asinh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/asinh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/asinh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const atan = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const atan2 = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan2`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan2']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan2']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan2']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/atan2',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const atanh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atanh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atanh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atanh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/atanh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/atanh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const aveDev = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/aveDev`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/aveDev']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/aveDev']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/aveDev']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/aveDev',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const average = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/average`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/average']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/average']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/average']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/average',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const averageA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const averageIf = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIf`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIf']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIf']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIf']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIf',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const averageIfs = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIfs`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIfs']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIfs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIfs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/averageIfs',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bahtText = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bahtText`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bahtText']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bahtText']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bahtText']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bahtText',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const base = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/base`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/base']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/base']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/base']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/base',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const besselI = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselI`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselI']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselI']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselI']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselI',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const besselJ = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselJ`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselJ']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselJ']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselJ']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselJ',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const besselK = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselK`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselK']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselK']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselK']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselK',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const besselY = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselY`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselY']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselY']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselY']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/besselY',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bin2Dec = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Dec`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Dec']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Dec']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Dec']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Dec',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bin2Hex = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Hex`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Hex']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Hex']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Hex']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Hex',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bin2Oct = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Oct`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Oct']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Oct']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Oct']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bin2Oct',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bitand = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitand`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitand']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitand']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitand']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitand',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bitlshift = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitlshift`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitlshift']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitlshift']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitlshift']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitlshift',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bitor = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitor`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitor']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitor']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitor']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitor',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bitrshift = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitrshift`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitrshift']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitrshift']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitrshift']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitrshift',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const bitxor = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/bitxor',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const char = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/char`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/char']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/char']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/char']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/char',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const choose = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/choose`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/choose']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/choose']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/choose']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/choose',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const clean = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/clean`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/clean']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/clean']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/clean']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/clean',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const code = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/code`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/code']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/code']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/code']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/code',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const columns = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/columns`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/columns']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/columns']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/columns']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/columns',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const combin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/combin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const combina = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combina`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combina']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combina']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/combina']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/combina',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const complex = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/complex`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/complex']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/complex']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/complex']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/complex',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const concatenate = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/concatenate`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/concatenate']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/concatenate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/concatenate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/concatenate',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const convert = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/convert`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/convert']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/convert']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/convert']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/convert',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const cos = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cos`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cos']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cos']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cos']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cos',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const cosh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cosh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cosh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cosh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cosh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cosh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const cot = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cot`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cot']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cot',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const coth = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coth`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coth']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coth']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coth']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coth',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const count = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/count`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/count']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/count']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/count']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/count',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const countA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const countBlank = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countBlank`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countBlank']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countBlank']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countBlank']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countBlank',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const countIf = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIf`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIf']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIf']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIf']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIf',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const countIfs = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIfs`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIfs']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIfs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIfs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/countIfs',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const coupDayBs = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDayBs`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDayBs']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDayBs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDayBs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDayBs',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const coupDays = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDays`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDays']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDays']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDays']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDays',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const coupDaysNc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDaysNc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDaysNc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDaysNc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDaysNc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupDaysNc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const coupNcd = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNcd`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNcd']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNcd']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNcd']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNcd',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const coupNum = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNum`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNum']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNum']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNum']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupNum',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const coupPcd = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupPcd`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupPcd']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupPcd']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupPcd']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/coupPcd',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const csc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/csc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const csch = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csch`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csch']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csch']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/csch']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/csch',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const cumIPmt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumIPmt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumIPmt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumIPmt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumIPmt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumIPmt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const cumPrinc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumPrinc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumPrinc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumPrinc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumPrinc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/cumPrinc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const date = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/date`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/date']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/date']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/date']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/date',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const datevalue = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/datevalue`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/datevalue']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/datevalue']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/datevalue']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/datevalue',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const daverage = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/daverage`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/daverage']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/daverage']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/daverage']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/daverage',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const day = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/day`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/day']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/day']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/day']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/day',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const days = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/days',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const days360 = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days360`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days360']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days360']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/days360']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/days360',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const db = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/db`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/db']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/db']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/db']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/db',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dbcs = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dbcs`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dbcs']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dbcs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dbcs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dbcs',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dcount = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcount`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcount']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcount']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcount']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcount',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dcountA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcountA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcountA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcountA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcountA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dcountA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const ddb = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ddb`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ddb']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ddb']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ddb']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ddb',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dec2Bin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Bin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Bin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Bin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Bin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Bin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dec2Hex = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Hex`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Hex']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Hex']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Hex']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Hex',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dec2Oct = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Oct`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Oct']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Oct']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Oct']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dec2Oct',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const decimal = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/decimal`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/decimal']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/decimal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/decimal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/decimal',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const degrees = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/degrees`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/degrees']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/degrees']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/degrees']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/degrees',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const delta = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/delta`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/delta']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/delta']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/delta']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/delta',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const devSq = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/devSq`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/devSq']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/devSq']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/devSq']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/devSq',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dget = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dget`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dget']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dget']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dget']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dget',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const disc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/disc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/disc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/disc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/disc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/disc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dmax = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmax`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmax']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmax']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmax']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmax',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dmin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dmin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dollar = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollar`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollar']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollar']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollar']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollar',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dollarDe = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarDe`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarDe']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarDe']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarDe']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarDe',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dollarFr = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarFr`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarFr']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarFr']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarFr']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dollarFr',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dproduct = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dproduct`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dproduct']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dproduct']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dproduct']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dproduct',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dstDev = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDev`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDev']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDev']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDev']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDev',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dstDevP = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDevP`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDevP']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDevP']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDevP']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dstDevP',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dsum = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dsum`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dsum']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dsum']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dsum']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dsum',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const duration = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/duration`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/duration']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/duration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/duration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/duration',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dvar = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvar',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const dvarP = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvarP`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvarP']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvarP']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvarP']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/dvarP',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const edate = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/edate`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/edate']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/edate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/edate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/edate',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const effect = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/effect`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/effect']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/effect']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/effect']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/effect',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const eoMonth = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/eoMonth`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/eoMonth']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/eoMonth']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/eoMonth']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/eoMonth',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const erf = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erf`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erf']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erf']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erf']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/erf',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const erfC = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erfC`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erfC']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erfC']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/erfC']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/erfC',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const even = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/even`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/even']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/even']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/even']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/even',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const exact = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exact`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exact']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exact']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exact']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/exact',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const exp = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exp`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exp']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exp']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/exp']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/exp',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const fact = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fact`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fact']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fact']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fact']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fact',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const factDouble = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/factDouble`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/factDouble']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/factDouble']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/factDouble']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/factDouble',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

const false_ = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/false`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/false']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/false']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/false',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};
export { false_ as false };

export const find = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/find`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/find']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/find']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/find']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/find',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const findB = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/findB`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/findB']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/findB']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/findB']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/findB',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const fisher = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisher`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisher']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisher']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisher']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisher',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const fisherInv = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisherInv`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisherInv']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisherInv']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisherInv']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fisherInv',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const fixed = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fixed`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fixed']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fixed']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fixed']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fixed',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const fv = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fv`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fv']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fv']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fv']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fv',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const fvschedule = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fvschedule`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fvschedule']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fvschedule']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/fvschedule']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/fvschedule',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const gamma = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gamma`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gamma']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gamma']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gamma']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gamma',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const gammaLn = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gammaLn`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gammaLn']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gammaLn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gammaLn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gammaLn',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const gauss = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gauss`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gauss']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gauss']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gauss']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gauss',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const gcd = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gcd`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gcd']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gcd']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/gcd']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/gcd',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const geStep = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geStep`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geStep']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geStep']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geStep']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/geStep',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const geoMean = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geoMean`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geoMean']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geoMean']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/geoMean']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/geoMean',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const harMean = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/harMean`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/harMean']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/harMean']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/harMean']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/harMean',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const hex2Bin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Bin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Bin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Bin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Bin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Bin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const hex2Dec = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Dec`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Dec']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Dec']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Dec']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Dec',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const hex2Oct = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Oct`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Oct']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Oct']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Oct']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hex2Oct',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const hlookup = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hlookup`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hlookup']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hlookup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hlookup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hlookup',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const hour = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hour`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hour']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hour']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hour']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hour',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const hyperlink = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hyperlink`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hyperlink']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hyperlink']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/hyperlink']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/hyperlink',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

const if_ = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/if`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/if']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/if']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/if']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/if',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};
export { if_ as if };

export const imAbs = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imAbs`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imAbs']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imAbs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imAbs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imAbs',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imArgument = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imArgument',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imConjugate = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imConjugate`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imConjugate']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imConjugate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imConjugate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imConjugate',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imCos = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCos`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCos']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCos']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCos']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCos',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imCosh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCosh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCosh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCosh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCosh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCosh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imCot = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCot`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCot']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCot']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCot']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCot',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imCsc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imCsch = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsch`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsch']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsch']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsch']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imCsch',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imDiv = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imDiv`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imDiv']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imDiv']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imDiv']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imDiv',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imExp = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imExp`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imExp']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imExp']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imExp']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imExp',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imLn = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLn`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLn']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLn',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imLog10 = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog10`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog10']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog10']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog10']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog10',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imLog2 = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog2`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog2']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog2']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog2']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imLog2',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imPower = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imPower`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imPower']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imPower']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imPower']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imPower',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imProduct = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imProduct`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imProduct']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imProduct']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imProduct']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imProduct',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imReal = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imReal`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imReal']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imReal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imReal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imReal',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imSec = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSec`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSec']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSec']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSec']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSec',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imSech = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSech`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSech']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSech']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSech']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSech',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imSin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imSinh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSinh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSinh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSinh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSinh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSinh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imSqrt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSqrt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSqrt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSqrt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSqrt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSqrt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imSub = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSub`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSub']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSub']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSub']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSub',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imSum = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSum`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSum']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSum']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSum']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imSum',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imTan = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imTan`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imTan']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imTan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imTan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imTan',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const imaginary = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imaginary`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imaginary']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imaginary']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/imaginary']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/imaginary',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const int = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/int`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/int']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/int']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/int']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/int',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const intRate = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/intRate`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/intRate']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/intRate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/intRate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/intRate',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const ipmt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ipmt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ipmt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ipmt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ipmt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ipmt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const irr = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/irr`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/irr']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/irr']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/irr']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/irr',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isErr = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isErr`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isErr']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isErr']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isErr']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isErr',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isError = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isError`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isError']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isError']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isError']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isError',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isEven = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isEven`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isEven']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isEven']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isEven']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isEven',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isFormula = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isFormula`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isFormula']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isFormula']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isFormula']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isFormula',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isLogical = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isLogical`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isLogical']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isLogical']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isLogical']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isLogical',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isNA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isNonText = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNonText`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNonText']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNonText']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNonText']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNonText',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isNumber = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNumber`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNumber']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNumber']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNumber']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isNumber',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isOdd = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isOdd`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isOdd']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isOdd']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isOdd']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isOdd',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isText = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isText`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isText']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isText']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isText']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isText',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isoWeekNum = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isoWeekNum`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isoWeekNum']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isoWeekNum']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isoWeekNum']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isoWeekNum',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const ispmt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ispmt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ispmt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ispmt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ispmt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ispmt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const isref = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isref`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isref']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isref']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/isref']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/isref',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const kurt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/kurt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/kurt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/kurt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/kurt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/kurt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const large = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/large`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/large']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/large']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/large']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/large',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const lcm = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lcm`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lcm']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lcm']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lcm']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lcm',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const left = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/left`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/left']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/left']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/left']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/left',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const leftb = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/leftb`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/leftb']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/leftb']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/leftb']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/leftb',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const len = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/len`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/len']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/len']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/len']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/len',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const lenb = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lenb`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lenb']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lenb']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lenb']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lenb',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const ln = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ln`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ln']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ln']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ln']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ln',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const log = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/log',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const log10 = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log10`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log10']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log10']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/log10']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/log10',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const lookup = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lookup`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lookup']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lookup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lookup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lookup',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const lower = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lower`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lower']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lower']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/lower']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/lower',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const match = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/match`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/match']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/match']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/match']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/match',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const max = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/max`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/max']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/max']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/max']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/max',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const maxA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/maxA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/maxA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/maxA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/maxA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/maxA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const mduration = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mduration`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mduration']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mduration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mduration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mduration',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const median = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/median`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/median']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/median']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/median']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/median',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const mid = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mid`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mid']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mid']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mid']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mid',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const midb = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/midb`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/midb']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/midb']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/midb']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/midb',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const min = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/min`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/min']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/min']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/min']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/min',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const minA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/minA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const minute = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minute`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minute']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minute']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/minute']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/minute',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const mirr = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mirr`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mirr']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mirr']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mirr']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mirr',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const mod = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mod`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mod']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mod']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mod']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mod',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const month = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/month`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/month']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/month']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/month']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/month',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const mround = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mround`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mround']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mround']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/mround']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/mround',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const multiNomial = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/multiNomial`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/multiNomial']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/multiNomial']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/multiNomial']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/multiNomial',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const n = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/n`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/n']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/n']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/n']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/n',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const na = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/na`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/na']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/na']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/na',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const networkDays = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/networkDays`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/networkDays']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/networkDays']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/networkDays']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/networkDays',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const nominal = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nominal`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nominal']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nominal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nominal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/nominal',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const not = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/not`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/not']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/not']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/not']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/not',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const now = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/now`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/now']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/now']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/now',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const nper = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nper`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nper']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nper']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/nper']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/nper',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const npv = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/npv`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/npv']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/npv']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/npv']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/npv',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const numberValue = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/numberValue`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/numberValue']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/numberValue']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/numberValue']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/numberValue',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const oct2Bin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Bin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Bin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Bin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Bin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Bin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const oct2Dec = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Dec',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const oct2Hex = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Hex`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Hex']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Hex']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Hex']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oct2Hex',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const odd = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/odd`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/odd']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/odd']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/odd']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/odd',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const oddFPrice = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFPrice`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFPrice']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFPrice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFPrice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFPrice',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const oddFYield = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFYield`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFYield']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFYield']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFYield']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddFYield',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const oddLPrice = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLPrice`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLPrice']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLPrice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLPrice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLPrice',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const oddLYield = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLYield`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLYield']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLYield']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLYield']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/oddLYield',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const or = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/or`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/or']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/or']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/or']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/or',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const pduration = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pduration`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pduration']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pduration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pduration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pduration',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const permut = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permut`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permut']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permut']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permut']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/permut',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const permutationa = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permutationa`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permutationa']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permutationa']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/permutationa']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/permutationa',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const phi = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/phi`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/phi']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/phi']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/phi']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/phi',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const pi = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pi`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pi']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pi']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pi',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const pmt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pmt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pmt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pmt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pmt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pmt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const power = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/power`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/power']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/power']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/power']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/power',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const ppmt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ppmt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ppmt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ppmt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/ppmt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/ppmt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const price = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/price`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/price']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/price']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/price']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/price',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const priceDisc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceDisc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceDisc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceDisc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceDisc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceDisc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const priceMat = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceMat`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceMat']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceMat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceMat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/priceMat',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const product = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/product`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/product']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/product']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/product']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/product',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const proper = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/proper`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/proper']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/proper']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/proper']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/proper',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const pv = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pv`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pv']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pv']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/pv']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/pv',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const quotient = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/quotient`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/quotient']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/quotient']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/quotient']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/quotient',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const radians = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/radians`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/radians']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/radians']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/radians']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/radians',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const rand = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rand`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rand']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rand']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rand',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const randBetween = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/randBetween`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/randBetween']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/randBetween']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/randBetween']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/randBetween',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const rate = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rate`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rate']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rate',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const received = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/received`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/received']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/received']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/received']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/received',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const replace = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replace`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replace']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replace']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replace']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/replace',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const replaceB = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replaceB`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replaceB']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replaceB']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/replaceB']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/replaceB',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const rept = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rept`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rept']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rept']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rept']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rept',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const right = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/right`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/right']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/right']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/right']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/right',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const rightb = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rightb`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rightb']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rightb']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rightb']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rightb',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const roman = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roman`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roman']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roman']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roman']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/roman',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const round = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/round`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/round']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/round']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/round']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/round',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const roundDown = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundDown`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundDown']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundDown']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundDown']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundDown',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const roundUp = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundUp`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundUp']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundUp']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundUp']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/roundUp',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const rows = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rows`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rows']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rows']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rows']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rows',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const rri = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rri`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rri']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rri']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/rri']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/rri',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sec = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sec`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sec']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sec']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sec']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sec',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sech = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sech`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sech']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sech']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sech']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sech',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const second = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/second`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/second']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/second']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/second']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/second',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const seriesSum = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/seriesSum`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/seriesSum']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/seriesSum']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/seriesSum']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/seriesSum',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sheet = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheet`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheet']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheet']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheet']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheet',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sheets = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheets`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheets']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheets']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheets']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sheets',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sign = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sign`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sign']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sign']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sign']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sign',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sin`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sin']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sinh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sinh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sinh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sinh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sinh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sinh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const skew = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/skew`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/skew']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/skew']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/skew']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/skew',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sln = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sln`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sln']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sln']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sln']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sln',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const small = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/small`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/small']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/small']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/small']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/small',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sqrt = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrt`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrt']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrt']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrt']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrt',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sqrtPi = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrtPi`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrtPi']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrtPi']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrtPi']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sqrtPi',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const stDevA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const stDevPA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevPA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevPA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevPA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevPA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/stDevPA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const standardize = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/standardize`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/standardize']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/standardize']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/standardize']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/standardize',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const substitute = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/substitute`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/substitute']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/substitute']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/substitute']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/substitute',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const subtotal = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/subtotal`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/subtotal']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/subtotal']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/subtotal']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/subtotal',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sum = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sum`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sum']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sum']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sum']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sum',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sumIf = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIf`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIf']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIf']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIf']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIf',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sumIfs = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIfs`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIfs']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIfs']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIfs']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumIfs',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const sumSq = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumSq`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumSq']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumSq']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumSq']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/sumSq',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const syd = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/syd`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/syd']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/syd']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/syd']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/syd',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const t = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/t`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/t']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/t']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/t']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/t',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const tan = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tan`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tan']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tan']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tan']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tan',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const tanh = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tanh`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tanh']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tanh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tanh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tanh',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const tbillEq = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillEq`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillEq']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillEq']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillEq']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillEq',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const tbillPrice = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillPrice`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillPrice']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillPrice']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillPrice']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillPrice',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const tbillYield = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillYield`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillYield']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillYield']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillYield']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/tbillYield',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const text = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/text`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/text']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/text']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/text']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/text',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const time = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/time`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/time']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/time']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/time']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/time',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const timevalue = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/timevalue`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/timevalue']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/timevalue']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/timevalue']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/timevalue',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const today = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/today`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/today']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/today']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/today',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const trim = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trim`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trim']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trim']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trim']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/trim',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const trimMean = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trimMean`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trimMean']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trimMean']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trimMean']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/trimMean',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

const true_ = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/true`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/true']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/true']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/true',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};
export { true_ as true };

export const trunc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trunc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trunc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trunc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/trunc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/trunc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const type = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/type`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/type']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/type']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/type']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/type',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const unichar = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unichar`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unichar']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unichar']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unichar']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/unichar',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const unicode = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unicode`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unicode']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unicode']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/unicode']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/unicode',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const upper = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/upper`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/upper']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/upper']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/upper']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/upper',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const usdollar = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/usdollar`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/usdollar']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/usdollar']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/usdollar']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/usdollar',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const value = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/value`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/value']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/value']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/value']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/value',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const varA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/varA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const varPA = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varPA`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varPA']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varPA']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/varPA']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/varPA',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const vdb = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vdb`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vdb']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vdb']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vdb']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/vdb',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const vlookup = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vlookup`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vlookup']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vlookup']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/vlookup']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/vlookup',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const weekNum = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekNum`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekNum']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekNum']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekNum']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekNum',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const weekday = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekday`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekday']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekday']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekday']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/weekday',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const workDay = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/workDay`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/workDay']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/workDay']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/workDay']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/workDay',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const xirr = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xirr`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xirr']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xirr']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xirr']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/xirr',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const xnpv = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xnpv`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xnpv']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xnpv']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xnpv']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/xnpv',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const xor = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xor`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xor']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xor']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/xor']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/xor',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const year = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/year`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/year']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/year']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/year']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/year',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const yearFrac = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yearFrac`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yearFrac']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yearFrac']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yearFrac']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yearFrac',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const doYield = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yield`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yield']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yield']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yield']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yield',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const yieldDisc = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldDisc`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldDisc']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldDisc']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldDisc']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldDisc',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const yieldMat = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldMat`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldMat']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldMat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldMat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/functions/yieldMat',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};
