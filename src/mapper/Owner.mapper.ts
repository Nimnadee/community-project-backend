import {Injectable} from "@nestjs/common";
import { Owner } from "src/model/schema/Owner";
import { OwnerResponseDto} from "src/model/dto/response/Owner";
import { OwnerRequestDto } from "src/model/dto/request/Owner";

@Injectable()
export class OwnerMapper {

  

    public async ownerToownerResponseDto(owner: Owner) {
        const ownerResponseDto: OwnerResponseDto = new OwnerResponseDto();
       ownerResponseDto.id =  owner._id.toString();
        ownerResponseDto.name =  owner.name;
        ownerResponseDto.password =  owner.password;

        return ownerResponseDto;
    }

    public async ownerRequestDtoToowner(ownerRequestDto: OwnerRequestDto) {
        const owner: Owner = new Owner();
        owner.name = ownerRequestDto.name;
        owner.password = ownerRequestDto.password;
         
          return owner;
        }

}
