/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_MESSAGE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
