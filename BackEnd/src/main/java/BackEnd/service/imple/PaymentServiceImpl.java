package BackEnd.service.imple;

import BackEnd.DTO.PaymentDTO;
import BackEnd.Exceptions.ResourceNotFound;
import BackEnd.Mapper.PaymentMapper;
import BackEnd.entity.Payment;
import BackEnd.repository.PaymentRepo;
import BackEnd.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class PaymentServiceImpl implements PaymentService {

    private PaymentRepo PaymentRepo;

    @Autowired
    public PaymentServiceImpl(PaymentRepo PaymentRepo) {
        this.PaymentRepo = PaymentRepo;
    }

    @Override
    public PaymentDTO createPayment(PaymentDTO paymentDTO){

        Payment payment = PaymentMapper.mapToPayment(paymentDTO);
        Payment savedPayment = PaymentRepo.save(payment);

        return PaymentMapper.mapToPaymentDTO(savedPayment);
    }

    @Override
    public PaymentDTO getPaymentById(Long transactionId) {
        Payment payment = PaymentRepo.findById(transactionId)
                .orElseThrow(() ->
                        new ResourceNotFound("Payment is not exists with given id : " + transactionId));
        return PaymentMapper.mapToPaymentDTO(payment);
    }

    @Override
    public List<PaymentDTO> getAllPayment(){
        List<Payment> payments = PaymentRepo.findAll();
        return payments.stream().map((payment) -> PaymentMapper.mapToPaymentDTO(payment))
                .collect(Collectors.toList());
    }
}
