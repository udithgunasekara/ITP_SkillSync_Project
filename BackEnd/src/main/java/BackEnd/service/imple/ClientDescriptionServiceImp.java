package BackEnd.service.imple;

import BackEnd.DTO.ClientDescriptionDTO;
import BackEnd.Mapper.ClientDescriptionMapper;
import BackEnd.entity.ClientDescription;
import BackEnd.repository.ClientDescriptionRepository;
import BackEnd.service.ClientDescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientDescriptionServiceImp implements ClientDescriptionService {
    @Autowired
    private ClientDescriptionRepository clientDescriptionRepository;
    @Override
    public ClientDescriptionDTO getClientDescriptionByUsername(String username){
        ClientDescription clientDescription = clientDescriptionRepository.findByUsername(username).orElseThrow(() ->new RuntimeException("Client description not found"));
        return ClientDescriptionMapper.mapToClientDescriptionDTO(clientDescription);
    }

    @Override
    public ClientDescriptionDTO saveClientDescription(ClientDescription clientDescription) {
        ClientDescription clientDescription1 = clientDescriptionRepository.save(clientDescription);
        return ClientDescriptionMapper.mapToClientDescriptionDTO(clientDescription1);
    }
}