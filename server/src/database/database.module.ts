import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
           type :"sqlite",
            database: "main-db",
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            synchronize: true
      }),
    }),
  ],
})
export class DatabaseModule {}