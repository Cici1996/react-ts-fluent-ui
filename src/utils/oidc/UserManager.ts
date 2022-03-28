import { UserManagerSettings, UserManager } from 'oidc-client-ts';

export const userManagerConfig: UserManagerSettings = {
  client_id: 'Sample.App',
  client_secret : '49C1A7E1-0C79-4A89-A3D6-A37998FB86B0',
  redirect_uri: 'http://localhost:3000/signin-oidc',
  response_type: 'code',
  scope:"Sample.App.FullAccess openid email profile offline_access Roles",
  authority: 'https://localhost:5000',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true
  // client_id: 'interactive.public',
  // redirect_uri: 'http://localhost:3000/signin-oidc',
  // response_type: 'code',
  // scope: "openid profile email api",
  // authority: 'https://demo.identityserver.io/',
  // automaticSilentRenew: true,
  // filterProtocolClaims: true,
  // loadUserInfo: true,
  // monitorSession: true
};

export const userManager = new UserManager(userManagerConfig);