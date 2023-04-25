import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from '../../dto/create-address.dto';
import { Address } from '../../entities/address.entity';
import { IAddressesRepository } from '../addresses-repository.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MemoryAddressesRepository implements IAddressesRepository {
  private addresses: Address[] = [];

  async create(data: CreateAddressDto): Promise<Address> {
    const newAddress = new Address();

    Object.assign(newAddress, data);

    newAddress.id = uuid();
    newAddress.created_at = new Date();

    this.addresses.push(newAddress);

    return newAddress;
  }

  async findAll(): Promise<Address[]> {
    return this.addresses;
  }
}
