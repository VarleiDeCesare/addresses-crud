import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { MemoryAddressesRepository } from './repositories/implementations/memory-addresses.repository';

@Module({
  controllers: [AddressesController],
  providers: [
    AddressesService,
    {
      provide: 'AddressesRepository',
      useClass: MemoryAddressesRepository,
    },
  ],
})
export class AddressesModule {}
