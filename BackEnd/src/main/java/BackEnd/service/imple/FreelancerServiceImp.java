package BackEnd.service.imple;

import BackEnd.DTO.FreelancerDTO;
import BackEnd.entity.Freelancer;
import BackEnd.entity.UserCredential;
import BackEnd.repository.FreelancerRepo;
import BackEnd.repository.UserCredentialRepo;
import BackEnd.service.FreelancerService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class FreelancerServiceImp implements FreelancerService {

   private FreelancerRepo freelancerRepo;
   private UserCredentialRepo userCredentialRepo;
   private ModelMapper modelMapper;

   public FreelancerDTO createFreelancer(FreelancerDTO freelancerDTO){
       Freelancer freelancer = modelMapper.map(freelancerDTO, Freelancer.class);
       Freelancer saveFreelancer = freelancerRepo.save(freelancer);


       UserCredential userCredential = modelMapper.map(freelancerDTO, UserCredential.class);
       userCredential.setUserName(freelancerDTO.getUserName());
       userCredential.setPassword(freelancerDTO.getPassword());
       userCredential.setRole(freelancerDTO.getRole());
       UserCredential savedUserCredential = userCredentialRepo.save(userCredential);

       return modelMapper.map(saveFreelancer, FreelancerDTO.class);
   }

}
