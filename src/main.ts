import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { HttpExceptionFilter } from './_common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) => {
      const findFirstError = (errors : ValidationError[]) => {
        for(let err of errors ){
          if(err.constraints){
            return Object.values(err.constraints)[0];
          }
        }
      }
      const firstError = findFirstError(errors);
      return new BadRequestException(firstError);
    }
  }));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
