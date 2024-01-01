This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## References

The following resources were used to build this application:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [How to Use Cloud Firestore in a React App](https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/)
- [Formik docs](https://formik.org/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Other references used to create this app

- [Integrating Firebase with a Next.js app Documentation](https://firebase.google.com/codelabs/firebase-nextjs#0)
- [Firebase CLI reference](https://firebase.google.com/docs/cli#install_the_firebase_cli)

### Added CSV data to Firestore Firebase using FireFoo

- [The Powerful GUI Client for Firebase Firestore](https://www.firefoo.app/docs/firestore-export-import/import-csv-into-collection)

### For data fetching (removed later)

- [SWR - React Hooks for Data Fetching](https://swr.vercel.app/)

### Querying Firestore

- [TypeScript in React – How to Manage State with Firebase Cloud Firestore](https://www.freecodecamp.org/news/how-to-manage-state-in-react-apps-with-firebase-cloud-firestore/#howtocreateyourtodolistmarkup)
- [Cloud Firestore Compound (AND) queries](https://firebase.google.com/docs/firestore/query-data/queries#array_membership)

### Resources used when testing out Firestore emulator

- [Using Firebase Emulator Suite and React for local-first development](https://blog.logrocket.com/using-firebase-emulator-suite-and-react-for-local-first-development/)
- [How to setup a Firebase demo project](https://stackoverflow.com/questions/67781589/how-to-setup-a-firebase-demo-project/68466383#68466383)
- [Google's Firebase Emulator Suite Tutorial](https://firebase.google.com/docs/emulator-suite)
- [I installed Firebase Emulator for localhost dev. How do I configure my environment to call the emulator?](https://www.reddit.com/r/Firebase/comments/163xt93/i_installed_firebase_emulator_for_localhost_dev/)
- [Setting up the Firebase Emulator for local development.](https://medium.com/@jalomechirwa/setting-up-the-firebase-emulator-for-local-development-f2277c53bc18)

#### Lessons learnt the hard way......

1. Problem with my solution:

- The 'Used Car Price Prediction Dataset' CSV file from [Kaggle](https://www.kaggle.com/datasets/taeefnajib/used-car-price-prediction-dataset?datasetId=3742543) had >4k entries which were imported into the database.
- While writing my code and setting up the configurations I hit the daily quota for Firebase Cloud Storage (being 50K document reads) without realizing.
- I created a new project on Firebase and imported a new set of data, which had fewer number of entries (50).
- During my search I stumbled across local emulator suites which I set up with the help of Firebase documentations and [makerkit Article](https://makerkit.dev/blog/tutorials/setting-up-firebase-emulators-nextjs) so this issue doesn't happen again.

2. Problem with my solution:

- The biggest hurdle after researching and successfully implementing Firestore querying was trying to figure out how to pass the search parameters from the home page (where the user entered what they want) to the display page. I googled terms like 'Next.js 14 app router pass form data to another page' or 'Next.js 14 React query data page' and so on. After 2 stressful days (and yes I did go to bed crying) of non-stop research with many trial and errors, I used the following resources to get the data transfer between pages to work:

* [How to change the URL parameters in real time using Next.js 14](https://medium.com/@martinval11/how-to-change-the-url-parameters-in-real-time-using-next-js-14-76f25d63cec6)
* [How to access query parameters in Next.js 13.4 with the new app router?](https://stackoverflow.com/questions/76592804/how-to-access-query-parameters-in-next-js-13-4-with-the-new-app-router)
* Other resources I came across during my search: [Diving into Server Actions in Next.js 14](https://blog.logrocket.com/diving-into-server-actions-next-js-14/); [Forms with Next.js and Server Actions](https://github.com/vercel/next.js/tree/canary/examples/next-forms) + [Using Forms in Next.js (Server Actions, Revalidating Data)](https://youtu.be/dDpZfOQBMaU?si=LtmNIaCTdMCIGKft)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
