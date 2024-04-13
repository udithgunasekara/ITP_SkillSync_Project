package BackEnd.Mapper;


import BackEnd.DTO.FreelancerVDTO;
import BackEnd.entity.Freelancer;

public class FreelancerVMapper {
    public static FreelancerVDTO mapToFreelancerDTO(Freelancer freelancer){
        return new FreelancerVDTO(
                freelancer.getId(),
                freelancer.getLastName(),
                freelancer.getEmail(),
                freelancer.getDob(),
                freelancer.getPhone(),
                freelancer.getFirstName(),
                freelancer.getUserName(),
                freelancer.getPassword(),
                freelancer.getNic(),
                freelancer.getWorkOn(),
                freelancer.getCreated_at(),
                freelancer.getApp_status()
        );
    }

    public static Freelancer mapToFreelancer(FreelancerVDTO freelancerVDTO){
        return new Freelancer(
                freelancerVDTO.getId(),
                freelancerVDTO.getLastName(),
                freelancerVDTO.getEmail(),
                freelancerVDTO.getDob(),
                freelancerVDTO.getPhone(),
                freelancerVDTO.getFirstName(),
                freelancerVDTO.getUserName(),
                freelancerVDTO.getPassword(),
                freelancerVDTO.getNic(),
                freelancerVDTO.getWorkOn(),
                freelancerVDTO.getCreated_at(),
                freelancerVDTO.getApp_status()
        );
    }
}