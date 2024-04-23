package BackEnd.service;

import BackEnd.DTO.paymentDetailsFreelancerDTO;
import BackEnd.entity.paymentDetailsFreelancer;

public interface paymentDetailsFreelancerService  {
    paymentDetailsFreelancerDTO addDetails(paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO);

    paymentDetailsFreelancerDTO getDetailsById(Long id);

    paymentDetailsFreelancerDTO updateDetails(Long id, paymentDetailsFreelancerDTO updatedDetails);

    void deleteDetails(Long id);
}
