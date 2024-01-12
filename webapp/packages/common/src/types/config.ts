
export interface AlasConfig {
  webuiUrl: string;
  theme: 'dark' | 'light';
  language: DefAlasConfig['Deploy']['Webui']['Language'];
  repository: 'global' | 'china';
  alasPath: string;
  webuiPath: string;
  webuiArgs: string[];
  dpiScaling: boolean;
}

export interface DefAlasConfig {
  Deploy: {
    Git: {
      Repository: string;
      Branch: string;
      GitExecutable: string;
      GitProxy: null | string;
      SSLVerify: bigint;
      AutoUpdate: boolean;
      KeepLocalChanges: boolean;
    };
    Python: {
      PythonExecutable: string;
      PypiMirror: string;
      InstallDependencies: boolean;
      RequirementsFile: string;
    };
    Adb: {
      AdbExecutable: string;
      ReplaceAdb: boolean;
      AutoConnect: boolean;
      InstallUiautomator2: boolean;
    };
    Ocr: {
      UseOcrServer: boolean;
      StartOcrServer: boolean;
      OcrServerPort: null;
      OcrClientAddress: string;
    };
    Update: {EnableReload: boolean; CheckUpdateInterval: number; AutoRestartTime: string};
    Misc: {DiscordRichPresence: boolean};
    RemoteAccess: {
      EnableRemoteAccess: boolean;
      SSHUser: null;
      SSHServer: null | string;
      SSHExecutable: string;
    };
    Webui: {
      WebuiHost: string;
      WebuiPort: number;
      Language: 'zh-CN' | 'en-US' | 'ja-JP' | 'zh-TW';
      Theme: 'default' | 'dark';
      DpiScaling: boolean;
      Password: null | string;
      CDN: boolean;
      Run: null | string;
      AppAsarUpdate: boolean;
      NoSandbox: boolean;
    };
  };
}
