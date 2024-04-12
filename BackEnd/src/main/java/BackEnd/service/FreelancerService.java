package BackEnd.service;

import BackEnd.DTO.FreelancerDTO;

import java.util.List;

public interface FreelancerService {

    FreelancerDTO createFreelancer(FreelancerDTO freelancerDto);

    List<FreelancerDTO> getAllInprogressFreelancers();

    FreelancerDTO getFreelancerByUsername(String username);

    //delete user account using username
    void deleteFreelancerByUsername(String username);

    String acceptFreelancer(String username);

//    FreelancerDTO getFreelancerById(Long id);
//
//    List<FreelancerDTO> getAllFreelancers();
//
//    List<FreelancerDTO> getInProgressFreelancers();
}
