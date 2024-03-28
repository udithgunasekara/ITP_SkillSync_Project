package BackEnd.service;

import BackEnd.DTO.FreelancerGigsDTO;

import java.util.List;

public interface FreelancerGigService {
    FreelancerGigsDTO createGig(FreelancerGigsDTO freelancerGigsDto);
    FreelancerGigsDTO getGigById(long gigId);
    List<FreelancerGigsDTO> getAllGigs();
    FreelancerGigsDTO updateGig(long gigId, FreelancerGigsDTO updatedFreelancerGig);
    void deleteGig(long gigId);

}
