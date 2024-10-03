import { camelCase, snakeCase } from 'change-case/keys';
import { EmployeeService } from '../domain/service';

import { Employee, EmployeeForm } from '../domain/definitions.d';

export class EmployeeApiService implements EmployeeService {
  basePath: string = process.env.FULLSTACK_ASSESSMENT_API!;

  async getAllEmployees() {
    try {
      const response = await fetch(`${this.basePath}/employee`);

      if (!response.ok) {
        throw `HTTP error! status: ${response.status}`;
      }

      const result = await response.json();

      return camelCase(result, 2) as Employee[];
    } catch (error) {
      console.error(`[EmployeeApiService] [getAllEmployees] ${error}`);
      return null;
    }
  }

  async deleteEmployee(id: string) {
    try {
      const response = await fetch(`${this.basePath}/employee/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw `HTTP error! status: ${response.status}`;
      }

      const result = await response.json();

      return camelCase(result, 2) as Employee;
    } catch (error) {
      console.error(`[EmployeeApiService] [deleteEmployee] ${error}`);
      return null;
    }
  }

  async createEmployee(employee: EmployeeForm) {
    try {
      const response = await fetch(`${this.basePath}/employee`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(snakeCase(employee))
      });

      if (!response.ok) {
        throw `HTTP error! status:${response.status}`;
      }

      const result = await response.json();

      return camelCase(result, 2) as Employee;
    } catch (error) {
      console.error(`[EmployeeApiService] [createEmployee] ${error}`);
      return null;
    }
  }
}
