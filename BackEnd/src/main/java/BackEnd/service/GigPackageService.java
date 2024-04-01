package BackEnd.service;

import BackEnd.DTO.GigPackageDTO;

import java.util.List;

public interface GigPackageService {
    GigPackageDTO createPackage(Long gigId, GigPackageDTO servicePackageDto);
    GigPackageDTO getPackageById(Long packageId);
    List<GigPackageDTO> getAllPackages();
    GigPackageDTO updatePackage(Long packageId, GigPackageDTO updatedPackage);
    void deletePackage(Long packageId);
}
