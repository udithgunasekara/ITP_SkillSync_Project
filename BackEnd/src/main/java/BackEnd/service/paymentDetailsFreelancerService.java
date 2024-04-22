package BackEnd.service;

import BackEnd.DTO.PaymentDTO;
import BackEnd.DTO.paymentDetailsFreelancerDTO;

public interface paymentDetailsFreelancerService  {
    paymentDetailsFreelancerDTO addDetails(paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO);

    paymentDetailsFreelancerDTO getDetailsById(Long id);

    paymentDetailsFreelancerDTO updateDetails(Long id, paymentDetailsFreelancerDTO updatedDetails);

    void deleteDetails(Long id);
}
