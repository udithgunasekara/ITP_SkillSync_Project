package BackEnd.controller;

import BackEnd.DTO.PaymentDTO;
import BackEnd.DTO.paymentDetailsFreelancerDTO;
import BackEnd.service.paymentDetailsFreelancerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
@RestController
@RequestMapping(path="/details")
public class paymentDetailsFController {

    private paymentDetailsFreelancerService paymentDetailsFreelancerService;

    @PostMapping
    public ResponseEntity<paymentDetailsFreelancerDTO> addDetails(@RequestBody paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO){
        paymentDetailsFreelancerDTO savedPayDetailsF = paymentDetailsFreelancerService.addDetails(paymentDetailsFreelancerDTO);
        return new ResponseEntity<>(savedPayDetailsF, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<paymentDetailsFreelancerDTO> getDetailsById(@PathVariable("id") Long id){
        paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO = paymentDetailsFreelancerService.getDetailsById(id);
        return ResponseEntity.ok(paymentDetailsFreelancerDTO);
    }




    @PutMapping("/{id}")
    public ResponseEntity<paymentDetailsFreelancerDTO> updateDetails(@PathVariable("id") Long id,
                                                                     @RequestBody paymentDetailsFreelancerDTO updatedDetails){
        paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO = paymentDetailsFreelancerService.updateDetails(id, updatedDetails);

        return ResponseEntity.ok(paymentDetailsFreelancerDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDetails(@PathVariable("id") Long id){
        paymentDetailsFreelancerService.deleteDetails(id);
        return ResponseEntity.ok("Details deleted sucessfully!");
    }

}
