import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { loginUserWithLocalCredential, type AppUser } from '~/models/user.server';
import { sessionStorage } from '~/services/session.server';

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<AppUser>(sessionStorage);

// Form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email');
    const password = form.get('password');

    if (email == null || email.toString() === '') {
      throw new AuthorizationError();
    }

    const loginResult = await loginUserWithLocalCredential({
      email: email.toString(),
      password: password?.toString() ?? '',
    });

    if (loginResult.ok === true && loginResult.user != null) {
      return loginResult.user;
    }

    throw new AuthorizationError();
  }),
  'credentials',
);
