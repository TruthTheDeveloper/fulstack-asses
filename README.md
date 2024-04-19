# Your Task

There is an API endpoint in `src/app/api/login/route.ts` to login. The homepage is in src/app/page.tsx. You need to:

- Build a login form which makes a request to the /api/login route
- The returned token should be saved in local storage
- The user should then be redirected to /profile
- Create a new API endpoint to get a profile from a token. You can hardcode "123" as the allowed token, as in the /login request. The profile can just contain a hardcoded name & email address.
- Create a new simple page, /profile, which will call the new endpoint, and display the user's name & email address.

## Considerations

You may want to consider:

- How do we handle incorrect usernames/passwords?
- What do we do on the /profile page if the token is invalid?
- CSS/Styling on the pages (particularly important if you're applying from a Frontend Development background)
- What if a customer is already logged in on the login page?
- How do we logout?

These considerations are time-permitting - you are not expected to action all of them.

## Rubric

- Completing the `Your Task` section put you up at 50%
- Each of the outline under the `Considerations` section adds a 10% completion.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
"# fulstack-asses" 
