# SpacEd - Space Education Web Application

## Table of Contents
1. [Introduction](#introduction)
    - [Live Demo](#live-demo)
2. [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Usage](#usage)
    - [Build](#build)
3. [Testing](#testing)
4. [Deployment](#deployment)
5. [Acknowledgments](#acknowledgments)
    - [API Endpoint Details](#api-endpoint-details)
6. [Additional Information](#additional-information)

## Introduction <a name="introduction"></a>
Welcome to SpacEd, a web application dedicated to space exploration and education! This project provides access to NASA's APOD (Astronomy Picture of the Day), EPIC (Earth Polychromatic Imaging Camera), and Mars Rover Photos APIs. Explore stunning images and information about space phenomena right from your browser.

### Live Demo <a name="live-demo"></a>

You can access the live demo of the SpacEd web application from following links : 
- https://spaced-83610.web.app/
- https://spaced-83610.firebaseapp.com/

## Setup <a name="setup"></a>

To set up the project locally, follow these steps:

### Prerequisites <a name="prerequisites"></a>

Ensure you have the following prerequisites installed:

- Node.js
- npm

### Installation <a name="installation"></a>

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/spaced.git
    ```

2. Navigate to the project directory:

    ```bash
    cd spaced
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration <a name="configuration"></a>

Before running the application, you need to obtain an API key from NASA and configure Firebase for authentication and hosting. Follow these steps:

1. **Obtain NASA API Key:**
   - Go to the NASA API website: [https://api.nasa.gov/](https://api.nasa.gov/)
   - Sign up for an account and obtain your API key.

2. **Configure Firebase:**
   - Go to the Firebase Console: [https://console.firebase.google.com/](https://console.firebase.google.com/).
   - Create a new project and follow the setup instructions.
   - Enable Authentication and choose the authentication methods( email/password, Google sign-in ).
   - Obtain your Firebase configuration settings from the Firebase project settings.

3. **Add API Key to Environment Variables:**
   - Create a `.env` file in the project root.
   - Add the following environment variables:
   
    ```plaintext
    VITE_NASA_API_KEY=your-nasa-api-key
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
    VITE_FIREBASE_APP_ID=your-firebase-app-id
    VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-massaging-sender-id
    VITE_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id
    ```
    - Replace `your-nasa-api-key` with the API key obtained from NASA.
    - Replace `your-firebase-api-key` , `firebase-auth-domain`, `your-firebase-project-id` , `your-firebase-app-id` , `firebase-storage-bucket` ,`your-firebase-massaging-sender-id` , `your-firebase-measurement-id` with your Firebase configuration settings.


### Usage <a name="usage"></a>

To run the project locally:

```bash
npm run dev
```

This will start the development server

### Build <a name="build"></a>

To build the project for production:

```bash
npm run build
```
This will generate the production build in the dist directory.

## Testing <a name="testing"></a>

This project utilizes Jest for testing. To run the tests, use the following command:

```bash
npx jest 
```
This will execute the test suites and provide feedback on the code's functionality and correctness.

## Deployment <a name="deployment"></a>

To deploy the project to Firebase Hosting:

1. Install Firebase CLI globally:
    
    ```bash
    npm install -g firebase-tools    
    ```

2. Log in to Firebase:
        
    ```bash
    firebase login
    ```
This will redirect to firebase login. login using you account.

3. Initialize Firebase in your project:
    
    ```bash
    firebase init
    ```
Follow the prompts to select Firebase Hosting and choose your project.

4. Deploy the project:
    
    ```bash
    firebase deploy
    ```
After deployment, you will get the hosting URL where your app is hosted.

## Acknowledgments <a name="acknowledgments"></a>

This project acknowledges the following resources:

- NASA APIs: [https://api.nasa.gov/](https://api.nasa.gov/)
- Firebase: [https://firebase.google.com/](https://firebase.google.com/)

### API Endpoint Details  <a name="api-endpoint-details"></a>

Documentation for the NASA APIs used in this project can be found at the following links:

- APOD API: https://github.com/nasa/apod-api
- EPIC API: https://api.nasa.gov/
- Mars Rover Photos API: https://github.com/corincerami/mars-photo-api

## Additional Information <a name="additional-information"></a>
- For detailed information on each API endpoint, refer to the API Endpoint Documentations.
- Make sure to configure environment variables properly for testing environments to avoid errors.
- Editor : IT21271182 - Rathnayake R M U V 

    - More info available in SpacEd Report.pdf