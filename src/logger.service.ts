import { Logger } from '@dot-build/logger';

export class LoggerService {
    create(name: string) {
        return new Logger(name);
    }
}