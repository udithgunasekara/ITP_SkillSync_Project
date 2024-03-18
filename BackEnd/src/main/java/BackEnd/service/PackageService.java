package BackEnd.service;

import BackEnd.DTO.ServicePackageDTO;

import java.util.List;

public interface PackageService {
    ServicePackageDTO createPackage(ServicePackageDTO servicePackageDto);
    List<ServicePackageDTO> getAllPackages();

}
