This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Other references used to create this app

- [Integrating Firebase with a Next.js app Documentation](https://firebase.google.com/codelabs/firebase-nextjs#0)
- [Firebase CLI reference](https://firebase.google.com/docs/cli#install_the_firebase_cli)

### Added CSV data to Firestore Firebase using FireFoo

- [The Powerful GUI Client for Firebase Firestore](https://www.firefoo.app/docs/firestore-export-import/import-csv-into-collection)

### For data fetching

- [SWR - React Hooks for Data Fetching](https://swr.vercel.app/)

#### Lessons learnt the hard way......

1. Problem with my solution:

- The 'Used Car Price Prediction Dataset' CSV file from [Kaggle](https://www.kaggle.com/datasets/taeefnajib/used-car-price-prediction-dataset?datasetId=3742543) had >4k entries which were imported into the database.
- While writing my code and setting up the configurations I hit the daily quota for Firebase Cloud Storage (being 50K document reads) without realizing.
- I created a new project on Firebase and imported a new set of data, which had fewer number of entries (50).
- During my search I stumbled across local emulator suites which I set up with the help of Firebase documentations and [makerkit Article](https://makerkit.dev/blog/tutorials/setting-up-firebase-emulators-nextjs) so this issue doesn't happen again.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
