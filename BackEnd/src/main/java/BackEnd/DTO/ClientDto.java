package BackEnd.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ClientDto {

    //create all the fields for the client
    private long Id;
    private String firstName;
    private String lastName;
    private String email;
    private String dob;
    private String password;
    private String phone;
    private String userName;
    private String country;
   // private String created_at;
    private String role;



}
