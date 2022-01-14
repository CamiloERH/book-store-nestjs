import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import * as path from 'path';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        port: 5444,
        database: config.get(Configuration.DATABASE),
        type: 'postgres',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
        migrations: [path.join(__dirname, '/migrations/*{.ts,.js}')],
      } as ConnectionOptions;
    },
  }),
];
