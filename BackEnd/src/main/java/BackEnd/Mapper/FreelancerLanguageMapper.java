package BackEnd.Mapper;

import BackEnd.DTO.FreelancerLanguageDTO;
import BackEnd.entity.FreelancerLanguage;

public class FreelancerLanguageMapper {
    public static FreelancerLanguageDTO mapToFreelancerLanguageDTO(FreelancerLanguage freelancerLanguage){
        return new FreelancerLanguageDTO(
                freelancerLanguage.getUsername(),
                freelancerLanguage.getLanguage()
        );
    }
    public static FreelancerLanguage mapToFreelancerLanguage(FreelancerLanguageDTO freelancerLanguageDTO){
        return new FreelancerLanguage(
                freelancerLanguageDTO.getUsername(),
                freelancerLanguageDTO.getLanguage()
        );
    }
}