The primary issue lies in the unreliable nature of the `onRecordingStopped` callback.  To mitigate this, a polling mechanism can be implemented to check the recording status periodically.  This approach ensures that the application is aware of the recording's completion, even if the callback fails to fire:

```javascript
import * as React from 'react';
import { Camera, Video } from 'expo-camera';

// ... other imports and components

export default function App() {
  const [recording, setRecording] = React.useState(false);
  const [videoUri, setVideoUri] = React.useState(null);

  // ... other state and functions

  const startRecording = async () => {
    // ... start recording logic
    setRecording(true);
  };

  const stopRecording = async () => {
    // ... stop recording logic
    setRecording(false);
    // Instead of solely relying on onRecordingStopped
    const intervalId = setInterval(async () => {
      const isRecording = await cameraRef.current.getRecordingStatus();
      if (!isRecording) {
        clearInterval(intervalId);
        // Handle the recording stop here
      }
    }, 100); // Adjust polling interval as needed
  };

  // ... rest of your component
}
```
This solution addresses the problem by periodically checking if the recording has finished.  However, it is not an ideal solution; a better approach would be to address the underlying issue in the `expo-camera` library directly, reporting the bug to the Expo team.