package BackEnd.controller;

import BackEnd.DTO.PaymentDTO;
import BackEnd.service.PaymentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path ="/payment")
public class PaymentController {

    private PaymentService paymentService;

    @PostMapping("/create")
    public ResponseEntity<PaymentDTO> createPayment(@RequestBody PaymentDTO paymentDTO){
        PaymentDTO savedPayment = paymentService.createPayment(paymentDTO);
        return new ResponseEntity<>(savedPayment, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<PaymentDTO> getPaymentById(@PathVariable("id") Long transactionId){
        PaymentDTO paymentDTO = paymentService.getPaymentById(transactionId);
        return ResponseEntity.ok(paymentDTO);
    }

    @GetMapping
    public ResponseEntity<List<PaymentDTO>> getAllPayment(){
        List<PaymentDTO> payments = paymentService.getAllPayment();
        return ResponseEntity.ok(payments);
    }
}
