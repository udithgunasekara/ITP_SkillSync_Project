package BackEnd.controller;

import BackEnd.DTO.FreelancerDTO;
import BackEnd.service.FreelancerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping(path = "/freelancer")
public class FreelancerController {

    private FreelancerService freelancerService;

    @PostMapping("/posting")
    public ResponseEntity<FreelancerDTO> createFreelancer(@RequestBody FreelancerDTO freelancerDto){
        FreelancerDTO saveFreelancer = freelancerService.createFreelancer(freelancerDto);
        return new ResponseEntity<>(saveFreelancer, HttpStatus.CREATED);
    }
}
