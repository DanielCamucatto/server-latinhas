import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { demandsModules } from './app/modules/demands/demands.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: 'latinhas.db',
      entities: [ __dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true
    }), 
    demandsModules
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
