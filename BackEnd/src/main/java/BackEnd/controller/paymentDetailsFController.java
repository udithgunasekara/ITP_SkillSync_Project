package BackEnd.controller;

import BackEnd.DTO.PaymentDTO;
import BackEnd.DTO.paymentDetailsFreelancerDTO;
import BackEnd.service.paymentDetailsFreelancerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping(path="/payment")
public class paymentDetailsFController {

    private paymentDetailsFreelancerService paymentDetailsFreelancerService;

    @PostMapping("/add")
    public ResponseEntity<paymentDetailsFreelancerDTO> addDetails(@RequestBody paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO){
        paymentDetailsFreelancerDTO savedPayDetailsF = paymentDetailsFreelancerService.addDetails(paymentDetailsFreelancerDTO);
        return new ResponseEntity<>(savedPayDetailsF, HttpStatus.CREATED);
    }

    @GetMapping("/read/{id}")
    public ResponseEntity<paymentDetailsFreelancerDTO> getDetailsById(@PathVariable("id") Long id){
        paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO = paymentDetailsFreelancerService.getDetailsById(id);
        return ResponseEntity.ok(paymentDetailsFreelancerDTO);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<paymentDetailsFreelancerDTO> updateDetails(@PathVariable("id") Long id,
                                                                     @RequestBody paymentDetailsFreelancerDTO updatedDetails){
        paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO = paymentDetailsFreelancerService.updateDetails(id, updatedDetails);

        return ResponseEntity.ok(paymentDetailsFreelancerDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDetails(@PathVariable("id") Long id){
        paymentDetailsFreelancerService.deleteDetails(id);
        return ResponseEntity.ok("Details deleted sucessfully!");
    }

}
