import { camelCase } from 'change-case/keys';
import { FULLSTACK_ASSESSMENT_API } from '@/config';

import { DepartmentService } from '../domain/service';

import { Department } from '../domain/definitions.d';

export class DepartmentApiService implements DepartmentService {
  basePath: string = FULLSTACK_ASSESSMENT_API;

  async getAllDepartment() {
    try {
      const response = await fetch(`${this.basePath}/department`);

      if (!response.ok) {
        throw `HTTP error! status: ${response.status}`;
      }

      const result = await response.json();

      return camelCase(result, 2) as Department[];
    } catch (error) {
      console.error(`[DepartmentApiService] [getAllDeparment] ${error}`);
      return null;
    }
  }
}
