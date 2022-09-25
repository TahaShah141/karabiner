export interface KarabinerRules {
  description?: string;
  manipulators?: Manipulator[];
}

export interface Manipulator {
  description?: string;
  type: "basic";
  from: From;
  to?: To[];
  to_after_key_up?: To[];
  to_if_alone?: To[];
  parameters?: Parameters;
}

export interface Parameters {
  "basic.simultaneous_threshold_milliseconds"?: number;
}

export interface SimultaneousFrom {
  key_code: string;
}

export interface SimultaneousOptions {
  key_down_order?: "insensitive" | "strict" | "strict_inverse";
  detect_key_down_uninterruptedly?: boolean;
}

export interface From {
  key_code?: string;
  simultaneous?: SimultaneousFrom[];
  simultaneous_options?: SimultaneousOptions;
  modifiers?: Modifiers;
}

export interface Modifiers {
  optional?: string[];
  mandatory?: string[];
}

export interface To {
  key_code?: string;
  modifiers?: string[];
  shell_command?: string;
  set_variable?: {
    name: string;
    value: boolean | number | string;
  };
}