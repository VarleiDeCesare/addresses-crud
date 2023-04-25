import { Inject, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { IAddressesRepository } from './repositories/addresses-repository.interface';

@Injectable()
export class AddressesService {
  constructor(
    @Inject('AddressesRepository')
    private readonly addressesRepository: IAddressesRepository,
  ) {}
  create(data: CreateAddressDto) {
    return this.addressesRepository.create(data);
  }

  findAll() {
    return this.addressesRepository.findAll();
  }
}
