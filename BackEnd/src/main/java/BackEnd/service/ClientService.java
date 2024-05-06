package BackEnd.service;

import BackEnd.DTO.ClientDTO;
import BackEnd.DTO.LoginDTO;

public interface ClientService {
    ClientDTO createClient(ClientDTO clientDTO);

    Long validateLogin(LoginDTO loginDTO);
}
