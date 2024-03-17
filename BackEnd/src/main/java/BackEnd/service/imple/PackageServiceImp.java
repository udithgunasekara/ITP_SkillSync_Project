package BackEnd.service.imple;

import BackEnd.DTO.FreelancerGigsDTO;
import BackEnd.DTO.ServicePackageDTO;
import BackEnd.Mapper.FreelancerGigMapper;
import BackEnd.Mapper.ServicePackageMapper;
import BackEnd.entity.FreelancerGigs;
import BackEnd.entity.ServicePackages;
import BackEnd.repository.ServicePackageRepository;
import BackEnd.service.PackageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class PackageServiceImp implements PackageService {

    private final ServicePackageRepository servicePackageRepository;
    @Override
    public ServicePackageDTO createPackage(ServicePackageDTO servicePackageDto) {
        ServicePackages aServicePackage = ServicePackageMapper.mapToPackage(servicePackageDto);
        ServicePackages savedPackage = servicePackageRepository.save(aServicePackage);
        return ServicePackageMapper.mapToPackageDto(savedPackage);
    }

    @Override
    public List<ServicePackageDTO> getAllPackages() {
        List<ServicePackages> servicePackages;
        servicePackages = servicePackageRepository.findAll();
        return servicePackages.stream().map(ServicePackageMapper::mapToPackageDto).
                collect(Collectors.toList());
    }
}
