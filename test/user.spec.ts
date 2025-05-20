import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

describe('UserController', () => {
  let app: INestApplication<App>;
  let logger: Logger;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    logger = app.get(WINSTON_MODULE_PROVIDER)

  });

  describe('POST /api/users', () => {
    it('should be rejected if request is invalid', async() => {
      const response = await request(app.getHttpServer())
          .post('/api/users')
          .send({
            username: '',
            password: '',
            name: ''
          })
      logger.info(response.body)
      expect(response.status).toBe(400)
      expect(response.body.errors).toBeDefined()
    })
    it('should be able to register', async() => {
      const response = await request(app.getHttpServer())
          .post('/api/users')
          .send({
            username: 'tests',
            password: 'tests',
            name: 'tests'
          })
      logger.info(response.body)
      expect(response.status).toBe(200)
      expect(response.body.data.username).toBe('test')
      expect(response.body.data.name).toBe('test')
    })
  });


});


