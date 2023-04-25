import { IsLatitude, IsLongitude } from 'class-validator';

export class CreateAddressDto {
  @IsLongitude()
  longitude: number;

  @IsLatitude()
  latitude: number;
}
