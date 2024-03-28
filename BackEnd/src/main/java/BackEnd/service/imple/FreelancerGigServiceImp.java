package BackEnd.service.imple;

import BackEnd.DTO.FreelancerGigsDTO;
import BackEnd.Exceptions.ResourceNotFound;
import BackEnd.Mapper.FreelancerGigMapper;
import BackEnd.entity.FreelancerGigs;
import BackEnd.repository.FreelancerGigsRepo;
import BackEnd.service.FreelancerGigService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FreelancerGigServiceImp implements FreelancerGigService {

    private final FreelancerGigsRepo freelancerGigsRepo;

    @Override
    public FreelancerGigsDTO createGig(FreelancerGigsDTO freelancerGigsDto) {
        FreelancerGigs freelancerGigs = FreelancerGigMapper.mapToFreelancerGigs(freelancerGigsDto);
        FreelancerGigs savedGig = freelancerGigsRepo.save(freelancerGigs);
        return FreelancerGigMapper.mapToFreelancerGigsDto(savedGig);
    }

    @Override
    public FreelancerGigsDTO getGigById(long gigId) {
        FreelancerGigs freelancerGigs = freelancerGigsRepo.findById(gigId).
                orElseThrow(() -> new RuntimeException("Gig not found"));
        return FreelancerGigMapper.mapToFreelancerGigsDto(freelancerGigs);
    }


    @Override
    public List<FreelancerGigsDTO> getAllGigs() {
        List<FreelancerGigs> freelancerGigs = freelancerGigsRepo.findAll();
        return freelancerGigs.stream().map(FreelancerGigMapper::mapToFreelancerGigsDto).
                collect(Collectors.toList());
    }
    @Override
    public FreelancerGigsDTO updateGig(long gigId, FreelancerGigsDTO updatedFreelancerGig) {
        FreelancerGigs freelancerGigs = freelancerGigsRepo.findById(gigId).
                orElseThrow(() -> new ResourceNotFound("Gig not found with id : " + gigId));

        freelancerGigs.setGigTitle(updatedFreelancerGig.getGigTitle());
        freelancerGigs.setGigDescription(updatedFreelancerGig.getGigDescription());
        freelancerGigs.setGigCategory(updatedFreelancerGig.getGigCategory());

        FreelancerGigs updatedGig = freelancerGigsRepo.save(freelancerGigs);
        return FreelancerGigMapper.mapToFreelancerGigsDto(updatedGig);
    }

    @Override
    public void deleteGig(long gigId) {
        FreelancerGigs freelancerGigs = freelancerGigsRepo.findById(gigId).
                orElseThrow(() -> new RuntimeException("Gig not found with id : " + gigId));
        freelancerGigsRepo.delete(freelancerGigs);

    }
}
