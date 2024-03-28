package BackEnd.service.imple;

import BackEnd.DTO.ClientDto;
import BackEnd.entity.Client;
import BackEnd.entity.UserCredential;
import BackEnd.repository.ClientRepo;
import BackEnd.repository.UserCredentialRepo;
import BackEnd.service.ClientService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ClientServiceImp implements ClientService {
    private ClientRepo clientRepo;
   private UserCredentialRepo userCredentialRepo;
    private ModelMapper modelMapper;

    @Override
    public ClientDto createClient(ClientDto clientDto) {
        Client client = modelMapper.map(clientDto, Client.class);
        Client saveClient = clientRepo.save(client);

        UserCredential userCredential = modelMapper.map(clientDto, UserCredential.class);
        userCredential.setUserName(clientDto.getUserName());
        userCredential.setPassword(clientDto.getPassword());
        userCredential.setRole(clientDto.getRole());
        UserCredential savedUserCredential = userCredentialRepo.save(userCredential);

        return modelMapper.map(saveClient, ClientDto.class);
    }

}
