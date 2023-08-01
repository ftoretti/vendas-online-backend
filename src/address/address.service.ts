import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly adressRepository: Repository<AddressEntity>,
        private readonly userService: UserService,
        private readonly cityService: CityService
    ) {};

    async createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AddressEntity> {
        await this.userService.findUserById(userId)
        await this.cityService.findCityByid(createAddressDto.cityId)

        return this.adressRepository.save({
            ...createAddressDto,
            userId
        });
    }
}