/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Whisper Model Path - Optional path to an existing whisper.cpp .bin model. Leave empty to use the model downloaded by this extension. */
  "whisperModelPath"?: string,
  /** Whisper CLI Path - Optional path to whisper-cli. Homebrew installations on Apple silicon and Intel are detected automatically. */
  "whisperCliPath"?: string,
  /** Spoken Language - Whisper language code such as en or cs, or auto. */
  "language": string,
  /** Display Number - 1 records the main display; use 2 or higher for another display. */
  "displayNumber": string,
  /** Maximum Automatic Frames - Maximum screenshots included when no moments were marked manually. */
  "maxFrames": "4" | "8" | "12" | "16"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `toggle-recording` command */
  export type ToggleRecording = ExtensionPreferences & {}
  /** Preferences accessible in the `mark-moment` command */
  export type MarkMoment = ExtensionPreferences & {}
  /** Preferences accessible in the `download-model` command */
  export type DownloadModel = ExtensionPreferences & {}
  /** Preferences accessible in the `open-sessions` command */
  export type OpenSessions = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `toggle-recording` command */
  export type ToggleRecording = {}
  /** Arguments passed to the `mark-moment` command */
  export type MarkMoment = {}
  /** Arguments passed to the `download-model` command */
  export type DownloadModel = {}
  /** Arguments passed to the `open-sessions` command */
  export type OpenSessions = {}
}

