import { Container } from 'inversify';
/**
 * reflect-metadata is important for inversify to work
 * [https://www.npmjs.com/package/reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
 */
import 'reflect-metadata';
import { ServiceIdentifiers } from '../constants';
import { CollegeService } from './college.service';

export const container = new Container();

container.bind(ServiceIdentifiers.CollegeService).to(CollegeService);
