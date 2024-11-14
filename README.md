# Cloud Calculator 
## React + Vite + Firebase Cloud Functions (Bonus functions & styles! )

[![Deployed on Firebase](https://img.shields.io/badge/Deployed%20on-Firebase-orange?style=for-the-badge&logo=firebase)](https://cloud-calculator-9f80f.web.app/)
[![Built with Firebase](https://img.shields.io/badge/Built%20with-Firebase-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

The Cloud Calculator is a web application built with React, Vite, and Firebase Cloud Functions. It provides a user-friendly interface for performing complex calculations and storing results in the cloud.

![image](https://github.com/user-attachments/assets/88a14a84-171f-4a49-868d-d019e79bc9df)

![image](https://github.com/user-attachments/assets/32b86ae2-73c9-426e-8a5e-5b3dcdde4567)


## Features

- **Real-time Calculation**: Instantly calculate complex mathematical expressions with dynamic updates.
- **Cloud Storage**: Save calculation history and access it from any device.
- **User Authentication**: Secure your calculation history with Firebase Authentication.
- **Serverless Backend**: Handle computation logic and data storage using Firebase Cloud Functions.

## Technologies Used

- **Frontend**:
  - React
  - Vite
  - CSS/SCSS
- **Backend**:
  - Firebase Cloud Functions
  - Firebase Firestore
  - Firebase Authentication
- **Deployment**:
  - Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase CLI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cloud-calculator.git
   cd cloud-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase configuration:
   ```bash
   # Install Firebase CLI if you haven't already
   npm install -g firebase-tools

   # Login to Firebase
   firebase login

   # Initialize Firebase in your project
   firebase init
   ```

4. Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Deploy Firebase Cloud Functions (if modified):
   ```bash
   cd functions
   npm install
   firebase deploy --only functions
   ```

## Live Demo

Experience the Cloud Calculator live: [Cloud Calculator](https://cloud-calculator.vercel.app/)

## Firebase Setup

1. Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable required services:
   - Authentication
   - Cloud Firestore
   - Cloud Functions
3. Set up security rules for Firestore
4. Configure Firebase project settings in your application

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


