package BackEnd.controller;

import BackEnd.DTO.ClientDTO;
import BackEnd.DTO.LoginDTO;
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
@RequestMapping(path = "/Client")
public class ClientController {
    private ClientService clientService;

    //Client Registration
    @PostMapping("/Registration")
    public ResponseEntity<ClientDTO> createClient(@RequestBody ClientDTO clientDTO){
        ClientDTO saveClient = clientService.createClient(clientDTO);

        //can we make here a another service function for save usercredentials data (username, role, password))
        return new ResponseEntity<>(saveClient, HttpStatus.CREATED);

    }

    //Client Login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
        Long id = clientService.validateLogin(loginDTO);
        if (clientService.validateLogin(loginDTO)!=null) {
            //return id of the user
            //convert long id to string
            String idAsString = Long.toString(id);

            return ResponseEntity.ok(idAsString);
        }
        return ResponseEntity.status(401).body("Unauthorized");
    }
}
