import { async, TestBed } from '@angular/core/testing';
import { Logger } from '@dot-build/logger';

import { LoggerModule } from './logger.module';
import { LoggerService } from './logger.service';

describe('Logger service', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                LoggerModule
            ]
        });
    }));

    describe('#create()', () => {
        it('should return a new logger', () => {
            const service = TestBed.get(LoggerService);
            const foo = service.create('foo');
            const bar = service.create('bar');

            expect(foo instanceof Logger).toBe(true);
            expect(bar instanceof Logger).toBe(true);
            expect(foo !== bar).toBe(true);
        });

        it('should print logs to console.log', () => {
            const service = TestBed.get(LoggerService);
            const logger = service.create('test');
            const spy = spyOn(console, 'log');

            logger.log('OK');

            expect(spy).toHaveBeenCalledWith('<test>', 'OK');
        });
    });
});