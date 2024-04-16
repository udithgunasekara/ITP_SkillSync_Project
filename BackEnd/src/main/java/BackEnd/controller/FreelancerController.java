package BackEnd.controller;

import BackEnd.DTO.FreelancerDTO;
import BackEnd.DTO.LoginDTO;
import BackEnd.service.FreelancerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping(path = "/Freelancer")
public class FreelancerController {


    private FreelancerService freelancerService;


    @PostMapping("/Registration")
    public ResponseEntity<FreelancerDTO> createFreelancer(@RequestBody FreelancerDTO freelancerDTO){
        FreelancerDTO saveFreelancer = freelancerService.createFreelancer(freelancerDTO);
        return new ResponseEntity<>(saveFreelancer, HttpStatus.CREATED);
    }


    //Getting all freelancers who are in "Inprogress" state
    @GetMapping("AllInProgress")
    public ResponseEntity<List<FreelancerDTO>> getAllInprogressFreelancers(){
        List<FreelancerDTO> freelancer = freelancerService.getAllInprogressFreelancers();
        return ResponseEntity.ok(freelancer);

    }
    //Getting freelancer data by give username
    @GetMapping("/{username}")
    public ResponseEntity<FreelancerDTO> getFreelancer(@PathVariable("username") String username){
        FreelancerDTO freelancer = freelancerService.getFreelancerByUsername(username);
        return ResponseEntity.ok(freelancer);
    }

    //Delete freelancer account by given username
    @DeleteMapping("/Delete/{username}")
    public ResponseEntity<?> deleteFreelancer(@PathVariable("username") String username){
        freelancerService.deleteFreelancerByUsername(username);
        //return delete susccess message

        return ResponseEntity.ok("Deleting All Freelance's DATA SuccessFul: (freelancerTable, user_credentialTable and insert bannedTable) " + username);
    }

    //Accept freelancer account after review their docs
    @PutMapping("/Accept")
    public ResponseEntity<String> acceptFreelancer(@RequestParam("username") String username){
        freelancerService.acceptFreelancer(username);
        return ResponseEntity.ok("Freelancer Account Accepted Successfully: " + username);
    }

    //freelancer login validation
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
        if (freelancerService.validateLogin(loginDTO)) {
            return ResponseEntity.ok("Login Successful");
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }



}
