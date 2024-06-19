import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      port: 5432,
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
