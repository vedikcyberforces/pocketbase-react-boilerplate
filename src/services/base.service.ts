import { injectable } from 'inversify';
import { RecordListQueryParams } from 'pocketbase';
import { db } from '../pocketbase';

@injectable()
export abstract class BaseService<T> {
  abstract collectionName: string;
  constructor() {}
  getFullList<T>(batch?: number, queryParams?: RecordListQueryParams) {
    return db.collection(this.collectionName).getFullList(batch, queryParams);
  }
}
