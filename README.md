# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Backend API

Run the backend in one terminal:

```bash
npm run backend
```

It reads `VITE_API_URL` from `src/backend/.env` and serves the upstream NASA response at `http://localhost:3001/api/nasa`. The API key, if configured, remains on the backend and is not sent to the app.

Run Expo in a second terminal:

```bash
npm start
```

For Expo Go on a phone, the app uses the Expo development server's host address
to reach the backend automatically when both devices are on the same local
network. If your network setup requires a different address, copy
`.env.example` to `.env`, replace the example IP with your computer's local
network IP, and restart Expo:

```env
EXPO_PUBLIC_BACKEND_URL=http://YOUR_COMPUTER_IP:3001
```

This `.env` file must be in the project root, beside `package.json`. Expo does
not read `EXPO_PUBLIC_BACKEND_URL` from `src/backend/.env`; that file is only
loaded by the backend.

Keep the phone and computer on the same Wi-Fi network. An Expo tunnel only exposes the Expo development server; the backend must also be reachable from the phone.
