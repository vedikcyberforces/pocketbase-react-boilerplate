import { injectable } from 'inversify';
import { Collections, Colleges } from '../types';
import { BaseService } from './base.service';

@injectable()
export class CollegeService extends BaseService<Colleges> {
  collectionName: string = Collections.Colleges;
}
