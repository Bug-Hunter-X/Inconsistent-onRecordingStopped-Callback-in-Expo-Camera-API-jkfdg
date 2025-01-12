# Inconsistent onRecordingStopped Callback in Expo Camera API

This repository demonstrates a bug in Expo's Camera API where the `onRecordingStopped` callback does not always fire when manually stopping a video recording. This inconsistency can lead to unexpected behavior in applications that rely on this callback for proper state management.

## Bug Description

When using the Expo Camera API to record videos with custom controls (not using the built-in record button), there are instances where stopping the recording using the provided stop recording function does not trigger the `onRecordingStopped` callback.  This results in an inconsistent application state and may prevent accurate handling of recorded video metadata or subsequent actions.

## Reproduction

The `bug.js` file provides a minimal reproducible example. This example implements basic video recording with manual stop.  You may need to adjust paths and dependencies according to your setup.  The inconsistency makes it difficult to reproduce the error on demand.

## Solution

The `bugSolution.js` file provides a potential workaround. This involves checking the recording status periodically to see if the recording has stopped, providing a fallback mechanism when `onRecordingStopped` fails to fire.  This isn't perfect, but it mitigates the issue.

## Further Investigation

This bug's intermittent nature makes it challenging to pinpoint the exact cause. Further investigation into potential race conditions or hardware-specific interactions might be necessary to resolve it permanently.