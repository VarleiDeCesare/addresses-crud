import { CreateAddressDto } from '../dto/create-address.dto';
import { Address } from '../entities/address.entity';

export interface IAddressesRepository {
  create(address: CreateAddressDto): Promise<Address>;
  findAll(): Promise<Address[]>;
}
