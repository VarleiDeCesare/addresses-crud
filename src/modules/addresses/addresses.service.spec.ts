import { MemoryAddressesRepository } from './repositories/implementations/memory-addresses.repository';
import { AddressesService } from '../addresses/addresses.service';

describe('UsersService', () => {
  let service: AddressesService;
  let repository: MemoryAddressesRepository;

  beforeEach(async () => {
    repository = new MemoryAddressesRepository();
    service = new AddressesService(repository);
  });

  it('should be able to create a new address', async () => {
    const address = await service.create({
      latitude: 34.8693,
      longitude: 98.1613,
    });

    expect(address).toHaveProperty('id');
  });

  it('should be able to list all addresses', async () => {
    await service.create({
      latitude: 34.8693,
      longitude: 98.1613,
    });

    await service.create({
      latitude: 56.286,
      longitude: 170.0717,
    });

    const addresses = await service.findAll();

    expect(addresses.length).toBe(2);
  });
});
