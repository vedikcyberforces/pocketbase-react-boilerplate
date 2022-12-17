import PocketBase from 'pocketbase';
import { SERVER_URL } from '../constants';

export const db = new PocketBase(SERVER_URL);
