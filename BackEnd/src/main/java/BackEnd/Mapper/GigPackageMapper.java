package BackEnd.Mapper;

import BackEnd.DTO.GigPackageDTO;
import BackEnd.entity.GigPackages;

public class GigPackageMapper {
    public static GigPackageDTO mapToPackageDto(GigPackages aPackage){
        return new GigPackageDTO(
                aPackage.getPackageId(),
                aPackage.getPackageName(),
                aPackage.getPackageDescription(),
                aPackage.getPackagePrice()
        );
    }

    public static GigPackages mapToPackage(GigPackageDTO servicePackageDto){
        return new GigPackages(
                servicePackageDto.getPackageId(),
                servicePackageDto.getPackageName(),
                servicePackageDto.getPackageDescription(),
                servicePackageDto.getPackagePrice()
        );
    }
}
