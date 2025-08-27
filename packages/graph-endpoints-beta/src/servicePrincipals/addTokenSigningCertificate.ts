import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate': Operation<
    '/servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate',
    'post'
  >;
}

/**
  * `POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate`
  *
  * Creates a self-signed signing certificate and returns a selfSignedCertificate object, which is the public part of the generated certificate. The self-signed signing certificate is composed of the following objects which are added to the servicePrincipal: 
+ The keyCredentials object with the following objects:
    + A private key object with usage set to Sign.
    + A public key object with usage set to Verify.
+ The passwordCredentials object. All the objects have the same value of customKeyIdentifier. The passwordCredential is used to open the PFX file (private key). It and the associated private key object have the same value of keyId. Once set during creation through the displayName property, the subject of the certificate cannot be updated. The startDateTime is set to the same time the certificate is created using the action. The endDateTime can be up to three years after the certificate is created.
  */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/addTokenSigningCertificate',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
