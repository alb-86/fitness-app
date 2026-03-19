# Fitness Tracker App

A modern fitness app for beginners and newbies in the world of weight lifting.

---

## Features

* Beginners fitness program

---

## 🛠️ Tech Stack

* **Frontend:** React.js / React native
* **Language:** TypeScript
* **Styling:**  CSS
* **State Management:** Context API 

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/fitness-app.git
```

Navigate into the project:

```bash
cd fitness-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npx start expo
```

---

## 📁 Project Structure

MyGymApp/
├── app.json
├── App.tsx
├── babel.config.js
├── expo-env.d.ts
├── package.json
├── react-native.config.js
├── README.md
├── tsconfig.json
│
├── android/
│   ├── build.gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   ├── app/
│   │   ├── build.gradle
│   │   ├── proguard-rules.pro
│   │   └── src/
│   │       ├── debug/
│   │       │   └── AndroidManifest.xml
│   │       └── main/
│   │           ├── AndroidManifest.xml
│   │           ├── java/com/anonymous/
│   │           └── res/
│   │               ├── drawable/
│   │               ├── drawable-hdpi/
│   │               ├── drawable-mdpi/
│   │               ├── drawable-xhdpi/
│   │               └── ...
│   ├── build/
│   │   └── generated/autolinking/
│   │       ├── autolinking.json
│   │       ├── package.json.sha
│   │       └── yarn.lock.sha
│   └── gradle/wrapper/
│       └── gradle-wrapper.properties
│
├── app/
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   ├── about.tsx
│   ├── contacts.tsx
│   ├── workouts.tsx
│   ├── (app)/
│   │   ├── index.tsx
│   │   └── _layout.tsx/
│   │       └── _layout.tsx
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── _layout.tsx/
│   │       └── _layout.tsx
│   ├── (tabs)/
│   └── pages/
│       ├── arms.tsx
│       ├── back.tsx
│       ├── cardio-and-core.tsx
│       ├── chest.tsx
│       ├── legs.tsx
│       └── shoulders.tsx
│
├── assets/
│   ├── fonts/
│   ├── images/
│   │   └── menu/
│   └── videos/
│
├── components/
│   ├── Collapsible.tsx
│   ├── ExternalLink.tsx
│   ├── Form.tsx
│   ├── HapticTab.tsx
│   ├── HelloWave.tsx
│   ├── index.tsx
│   ├── ParallaxScrollView.tsx
│   ├── Social-icons.tsx
│   ├── ThemedText.tsx
│   ├── ThemedView.tsx
│   ├── __tests__/
│   │   ├── ThemedText-test.tsx
│   │   └── __snapshots__/
│   └── ui/
│       ├── IconSymbol.ios.tsx
│       ├── IconSymbol.tsx
│       ├── TabBarBackground.ios.tsx
│       └── TabBarBackground.tsx
│
├── constants/
│   ├── ArmsWorkouts.tsx
│   ├── BackWorkouts.tsx
│   ├── Cardio&Core.tsx
│   ├── ChestWorkouts.tsx
│   ├── Colors.ts
│   ├── Legs.tsx
│   ├── MenuImages.tsx
│   └── Shoulders.tsx
│
├── hooks/
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│   └── useThemeColor.ts
│
├── ios/
│   ├── Podfile
│   ├── Podfile.properties.json
│   ├── MyGymApp/
│   │   ├── AppDelegate.swift
│   │   ├── Info.plist
│   │   ├── MyGymApp-Bridging-Header.h
│   │   ├── SplashScreen.storyboard
│   │   ├── Images.xcassets/
│   │   │   ├── Contents.json
│   │   │   └── AppIcon.appiconset/Contents.json
│   │   └── Supporting/Expo.plist
│   └── MyGymApp.xcodeproj/
│       ├── project.pbxproj
│       ├── project.xcworkspace/
│       │   ├── contents.xcworkspacedata
│       │   └── xcshareddata/IDEWorkspaceChecks.plist
│       └── xcshareddata/xcschemes/MyGymApp.xcscheme
│
├── scripts/
│   └── reset-project.js
│
└── src/
    ├── config/
    │   └── firebase.ts
    ├── context/
    │   └── AuthContext.tsx
    ├── services/
    │   ├── authService.ts
    │   └── biometricService.ts
    └── types/
        └── images.d.ts

---

## Future Improvements

* User authentication (In folder structure, but still in progress)
* Backend integration (Firebase / Supabase)
* Advanced analytics dashboard
* Social features/sharing workouts
* Add actual videos of the workout to the app

---
