package BackEnd.service;

import BackEnd.DTO.FreelancerGigsDto;

import java.util.List;

public interface FreelancerGigService {
    FreelancerGigsDto createGig(FreelancerGigsDto freelancerGigsDto);
    FreelancerGigsDto getGigById(long gigId);
    List<FreelancerGigsDto> getAllGigs();
    FreelancerGigsDto updateGig(long gigId, FreelancerGigsDto updatedFreelancerGig);
    void deleteGig(long gigId);

}
