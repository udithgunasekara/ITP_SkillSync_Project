package BackEnd.service;

import BackEnd.DTO.PaymentDTO;

import java.util.List;

public interface PaymentService {

    PaymentDTO createPayment(PaymentDTO paymentDTO);

    PaymentDTO getPaymentById(Long transactionId);

    List<PaymentDTO> getAllPayment();

}
