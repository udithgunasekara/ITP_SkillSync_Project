package BackEnd.Mapper;

import BackEnd.DTO.ServicePackageDTO;
import BackEnd.entity.ServicePackages;

public class ServicePackageMapper {
    public static ServicePackageDTO mapToPackageDto(ServicePackages aPackage){
        return new ServicePackageDTO(
                aPackage.getPackageId(),
                aPackage.getPackageName(),
                aPackage.getPackageDescription(),
                aPackage.getPackagePrice()
        );
    }

    public static ServicePackages mapToPackage(ServicePackageDTO servicePackageDto){
        return new ServicePackages(
                servicePackageDto.getPackageId(),
                servicePackageDto.getPackageName(),
                servicePackageDto.getPackageDescription(),
                servicePackageDto.getPackagePrice()
        );
    }
}
