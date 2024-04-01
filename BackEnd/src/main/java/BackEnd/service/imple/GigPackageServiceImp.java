package BackEnd.service.imple;

import BackEnd.DTO.GigPackageDTO;
import BackEnd.Exceptions.ResourceNotFound;
import BackEnd.Mapper.GigPackageMapper;

import BackEnd.entity.FreelancerGigs;
import BackEnd.entity.GigPackages;
import BackEnd.repository.FreelancerGigsRepo;
import BackEnd.repository.GigPackageRepository;
import BackEnd.service.GigPackageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class GigPackageServiceImp implements GigPackageService {

    private final GigPackageRepository gigPackageRepository;
    private final FreelancerGigsRepo freelancerGigsRepo;

    @Override
    public GigPackageDTO createPackage(Long gigId, GigPackageDTO servicePackageDto) {
        FreelancerGigs freelancerGigs = freelancerGigsRepo.findById(gigId)
                .orElseThrow(() -> new ResourceNotFound("Freelancer gig not found with id: " + gigId));

        GigPackages aServicePackage = GigPackageMapper.mapToPackage(servicePackageDto);
        aServicePackage.setGigId(freelancerGigs);

        GigPackages savedPackage = gigPackageRepository.save(aServicePackage);
        return GigPackageMapper.mapToPackageDto(savedPackage);
    }

    @Override
    public GigPackageDTO getPackageById(Long packageId) {
        GigPackages gigPackages = gigPackageRepository.findById(packageId).
                orElseThrow(() -> new RuntimeException("Gig package not found"));
        return GigPackageMapper.mapToPackageDto(gigPackages);
    }

    @Override
    public List<GigPackageDTO> getAllPackages() {
        List<GigPackages> gigPackages;
        gigPackages = gigPackageRepository.findAll();
        return gigPackages.stream().map(GigPackageMapper::mapToPackageDto).
                collect(Collectors.toList());
    }

    @Override
    public GigPackageDTO updatePackage(Long packageId, GigPackageDTO updatedPackage) {
        GigPackages gigPackages = gigPackageRepository.findById(packageId).
                orElseThrow(() -> new ResourceNotFound("Gig package not found with id : " + packageId));

        gigPackages.setPackageName(updatedPackage.getPackageName());
        gigPackages.setPackageDescription(updatedPackage.getPackageDescription());
        gigPackages.setPackagePrice(updatedPackage.getPackagePrice());
        gigPackages.setPackageDeliveryTime(updatedPackage.getPackageDeliveryTime());

        GigPackages updatedGigPackage = gigPackageRepository.save(gigPackages);
        return GigPackageMapper.mapToPackageDto(updatedGigPackage);
    }

    @Override
    public void  deletePackage(Long packageId) {
        GigPackages gigPackages = gigPackageRepository.findById(packageId).
                orElseThrow(() -> new RuntimeException("Gig package not found with id : " + packageId));
        gigPackageRepository.delete(gigPackages);
    }
}
