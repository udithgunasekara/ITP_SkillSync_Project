package BackEnd.Mapper;

import BackEnd.DTO.FreelancerGigsDto;
import BackEnd.entity.FreelancerGigs;

public class FreelancerGigMapper {

    public static FreelancerGigsDto mapToFreelancerGigsDto(FreelancerGigs freelancerGigs){
        return new FreelancerGigsDto(
                freelancerGigs.getGigId(),
                freelancerGigs.getGigTitle(),
                freelancerGigs.getGigDescription(),
                freelancerGigs.getGigCategory()
        );
    }

    public static FreelancerGigs mapToFreelancerGigs(FreelancerGigsDto freelancerGigsDto){
        return new FreelancerGigs(
                freelancerGigsDto.getGigId(),
                freelancerGigsDto.getGigTitle(),
                freelancerGigsDto.getGigDescription(),
                freelancerGigsDto.getGigCategory()
        );
    }
}
