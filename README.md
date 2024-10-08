
# Video Calling App

This repository contains a **Video Calling Application** built using **React** with **Vite** and integrated with the **ZEGOCLOUD Video API**. This app allows users to create or join video calls with multiple participants in real-time.

## Features

- **Real-time video and audio calls** using the ZEGOCLOUD Video API.
- **Create rooms** and share the room ID to invite participants.
- **Join rooms** using a room ID.
- **Multiple participants** can join the same call.
- **Mute/Unmute** audio and **enable/disable** video during calls.
- User-friendly interface built with **React**.
  
## Technologies

- **React (Vite)** - Fast frontend framework for development.
- **ZEGOCLOUD Video API** - API for handling video calls.
- **JavaScript (ES6+)** - Logic and interactivity.
- **CSS (or any other styling library)** - For responsive design.

## Installation

Follow these steps to run the project locally:

### Prerequisites

- Install [Node.js](https://nodejs.org/).
- Get your ZEGOCLOUD Video API key by signing up at [ZEGOCLOUD](https://www.zegocloud.com).

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/boythedream/Video-Calling_App.git
    cd video-calling-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your ZEGOCLOUD API key:

    ```bash
    VITE_ZEGOCLOUD_API_KEY=your-zegocloud-api-key-here
    ```

4. **Run the application:**

    ```bash
    npm run dev
    ```

5. **Access the app:**

   The app will run on `http://localhost:5173` (or another port if specified).

## Usage

1. **Create a Room:** Click the "Create Room" button to generate a unique room ID and share it with others.
2. **Join a Room:** Enter the room ID and click "Join Room" to connect to the video call.
3. During the call, you can:
   - **Mute/Unmute** the microphone.
   - **Enable/Disable** the camera.


```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [ZEGOCLOUD Video API Documentation](https://www.zegocloud.com/docs)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

---

You can copy and paste this into your project's `README.md` file on GitHub, making sure to replace placeholders with your actual details!
