import { ZodObject, ZodRawShape, ZodIssue } from 'zod';

export class Validator<T extends ZodRawShape> {
  private schema: ZodObject<T>;

  constructor(schema: ZodObject<T>) {
    this.schema = schema;
  }

  validateSchema = async (input: unknown) => {
    const { data, success, error } = await this.schema.safeParseAsync(input);

    if (!success) {
      return {
        error: error.issues.reduce((issues, issue) => {
          return { ...issues, [issue.path[0]]: issue.message };
        }, {} as ZodIssue) as unknown as Record<string, string>
      };
    }

    return { data };
  };
}
