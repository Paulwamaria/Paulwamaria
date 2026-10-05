# ProjectSupport widget configuration

The homepage ProjectSupport widget uses the production API:

`https://projectsupport-api.vercel.app`

Set the ProjectSupport **public** project key in the deployment environment:

```bash
NEXT_PUBLIC_PROJECTSUPPORT_KEY=ps_pub_your_full_public_key_here
```

For Netlify, add this variable in the site's environment variables and redeploy.

Only the `ps_pub_...` public key belongs in this frontend variable. Never place the ProjectSupport secret/admin key or an IntaSend secret key in the portfolio source or any `NEXT_PUBLIC_...` variable.
