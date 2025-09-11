export type Result<T> =
  | {
      success: true;
      data: T;
      statusCode?: number;
    }
  | {
      success: false;
      message: string;
      error?: Error;
      statusCode?: number;
    };
