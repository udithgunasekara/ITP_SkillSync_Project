package BackEnd.service.imple;

import BackEnd.DTO.paymentDetailsFreelancerDTO;
import BackEnd.Exceptions.ResourceNotFound;
import BackEnd.Mapper.PaymentMapper;
import BackEnd.Mapper.paymentDetailsFreelancerMapper;
import BackEnd.entity.Payment;
import BackEnd.entity.paymentDetailsFreelancer;
import BackEnd.repository.paymentDetailsFreelancerRepo;
import BackEnd.service.paymentDetailsFreelancerService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service

public class paymentDetailsFServiceImpl implements paymentDetailsFreelancerService {

    private final paymentDetailsFreelancerRepo paymentDetailsFreelancerRepo;

    @Autowired
    public paymentDetailsFServiceImpl(paymentDetailsFreelancerRepo paymentDetailsFreelancerRepo) {
        this.paymentDetailsFreelancerRepo = paymentDetailsFreelancerRepo;
    }

    @Override
    public paymentDetailsFreelancerDTO addDetails(paymentDetailsFreelancerDTO paymentDetailsFreelancerDTO) {

        paymentDetailsFreelancer paymentDetailsFreelancer = paymentDetailsFreelancerMapper.mapTopaymentDetailsFreelancer(paymentDetailsFreelancerDTO);

        //Manually Assign an ID
        paymentDetailsFreelancer.setId(paymentDetailsFreelancerDTO.getId());
        paymentDetailsFreelancer savedPayDetailsF = paymentDetailsFreelancerRepo.save(paymentDetailsFreelancer);

        return paymentDetailsFreelancerMapper.mapTopaymentDetailsFreelancerDTO(savedPayDetailsF);
    }

    @Override
    public paymentDetailsFreelancerDTO getDetailsById(Long id) {
        paymentDetailsFreelancer paymentDetailsFreelancer = paymentDetailsFreelancerRepo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFound("Details is not exists with given id : " + id));
        return paymentDetailsFreelancerMapper.mapTopaymentDetailsFreelancerDTO(paymentDetailsFreelancer);
    }

    @Override
    public paymentDetailsFreelancerDTO updateDetails(Long id, paymentDetailsFreelancerDTO updatedDetails) {
        paymentDetailsFreelancer paymentDetailsFreelancer = paymentDetailsFreelancerRepo.findById(id).orElseThrow(
                () -> new ResourceNotFound("Details not found with given id: " + id)

        );

        paymentDetailsFreelancer.setId(id);
        paymentDetailsFreelancer.setFullName(updatedDetails.getFullName());
        paymentDetailsFreelancer.setCountry(updatedDetails.getCountry());
        paymentDetailsFreelancer.setState(updatedDetails.getState());
        paymentDetailsFreelancer.setAddress(updatedDetails.getAddress());
        paymentDetailsFreelancer.setCity(updatedDetails.getCity());
        paymentDetailsFreelancer.setPostalCode(updatedDetails.getPostalCode());
        paymentDetailsFreelancer.setPaypalAddress(updatedDetails.getPaypalAddress());

        paymentDetailsFreelancer updatedDetailsObj = paymentDetailsFreelancerRepo.save(paymentDetailsFreelancer);


        return paymentDetailsFreelancerMapper.mapTopaymentDetailsFreelancerDTO(updatedDetailsObj);
    }

    @Override
    public void deleteDetails(Long id) {

        paymentDetailsFreelancer paymentDetailsFreelancer = paymentDetailsFreelancerRepo.findById(id).orElseThrow(
                () -> new ResourceNotFound("Details not found with given id: " + id)

        );

        paymentDetailsFreelancerRepo.deleteById(id);
    }
}
