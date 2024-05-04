package BackEnd.Mapper;

import BackEnd.DTO.paymentDetailsFreelancerDTO;
import BackEnd.entity.paymentDetailsFreelancer;

public class paymentDetailsFreelancerMapper {

    public static paymentDetailsFreelancerDTO mapTopaymentDetailsFreelancerDTO(paymentDetailsFreelancer paymentDetailsFreelancer){
        return new paymentDetailsFreelancerDTO(
                paymentDetailsFreelancer.getId(),
                paymentDetailsFreelancer.getFullName(),
                paymentDetailsFreelancer.getCountry(),
                paymentDetailsFreelancer.getState(),
                paymentDetailsFreelancer.getAddress(),
                paymentDetailsFreelancer.getCity(),
                paymentDetailsFreelancer.getPostalCode(),
                paymentDetailsFreelancer.getPaypalAddress(),
                paymentDetailsFreelancer.getUserName()
        );
    }

    public static paymentDetailsFreelancer mapTopaymentDetailsFreelancer(paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO){
        return new paymentDetailsFreelancer(
                paymentDetailsFreelancerDTO.getId(), // Manually assign the ID from DTO
                paymentDetailsFreelancerDTO.getFullName(),
                paymentDetailsFreelancerDTO.getCountry(),
                paymentDetailsFreelancerDTO.getState(),
                paymentDetailsFreelancerDTO.getAddress(),
                paymentDetailsFreelancerDTO.getCity(),
                paymentDetailsFreelancerDTO.getPostalCode(),
                paymentDetailsFreelancerDTO.getPaypalAddress(),
                paymentDetailsFreelancerDTO.getUserName()
        );
    }

}
