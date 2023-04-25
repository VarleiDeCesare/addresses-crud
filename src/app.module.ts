import { Module } from '@nestjs/common';
import { AddressesModule } from './modules/addresses/addresses.module';

@Module({
  imports: [AddressesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
