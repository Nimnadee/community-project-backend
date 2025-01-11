import { Injectable} from "@nestjs/common";
import { OwnerMapper } from "src/mapper/Owner.mapper";
import {OwnerRequestDto } from "src/model/dto/request/Owner";
import { OwnerResponseDto } from "src/model/dto/response/Owner";
import { Owner } from "src/model/schema/Owner";
import {OwnerRepository } from "src/repository/Owner.repository";
 
@Injectable()
export class OwnerService {
    constructor(private readonly ownerRepository: OwnerRepository,
                private readonly ownerMapper:OwnerMapper){}

    public async findById(id: string): Promise<OwnerResponseDto> {
        const owner: Owner= await this.ownerRepository.findById(id);
        return await this.ownerMapper.ownerToownerResponseDto(owner);
    }

    public async findAll(): Promise<OwnerResponseDto[]> {
        const owner: Owner[] = await this.ownerRepository.findAll();
        const ownerResponseDtos: OwnerResponseDto[] = [];

        for (const p of owner) {
            ownerResponseDtos.push(await this.ownerMapper.ownerToownerResponseDto(p));
        }
        return ownerResponseDtos;
    }

    public async create(ownerRequestDto: OwnerRequestDto): Promise<OwnerResponseDto> {
        let owner: Owner = await this.ownerMapper.ownerRequestDtoToowner(ownerRequestDto);
       owner = await this.ownerRepository.create(owner);
        return this.ownerMapper.ownerToownerResponseDto(owner);
    }

    public async update(id: string, ownerRequestDto:OwnerRequestDto): Promise<OwnerResponseDto> {
        let owner: Owner = await this.ownerMapper.ownerRequestDtoToowner(ownerRequestDto);
        owner = await this.ownerRepository.update(id, owner);
        return this.ownerMapper.ownerToownerResponseDto(owner);
    }

    public async delete(id: string): Promise<OwnerResponseDto> {
        const inventory: Owner = await this.ownerRepository.delete(id);
        return this.ownerMapper.ownerToownerResponseDto(inventory);
    }

}
