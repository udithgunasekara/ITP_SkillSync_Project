package BackEnd.controller;

import BackEnd.DTO.ClientDto;
import BackEnd.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping(path = "/Register")
public class ClientController {
    private ClientService clientService;
    @PostMapping("/posting")
    public ResponseEntity<ClientDto> createClient(@RequestBody ClientDto clientDto){
        ClientDto saveClient = clientService.createClient(clientDto);
        return new ResponseEntity<>(saveClient, HttpStatus.CREATED);

    }
}
