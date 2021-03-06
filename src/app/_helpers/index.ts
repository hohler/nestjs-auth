import * as crypto from 'crypto';
import {config} from '../../config';

export * from './entity/extended-entity';
export function passwordHash(password: string) {
	return crypto.createHmac('sha256', config.salt)
		.update(password)
		.digest('hex');
}
